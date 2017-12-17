'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const questions = require('./questions.js');
const Commands = require('./commands.js');

const projectDir = 'vue-bookstore';

module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to ' + chalk.blue('Grid view') + ' generator!'
        ));

        const questions = [];

        return this.prompt(questions).then(props => {
            this.props = props;

            if(this.options.moduleName !== undefined){
              this.props.moduleName = this.options.moduleName;
            }
      
            // console.log(props);
        });
    }

    writing(){
        const directory = `./${projectDir}/src/`;

            
        this.commands = new Commands(this);

        console.log(chalk.green('Copy grid view'));      
        this.commands.copyGridView();

        console.log(chalk.green('Update menu for grid view'));      
        this.commands.updateMenuComponent();
        this.commands.updateMenuOption();
        this.commands.updateMenuOptionInLayout();

        console.log(chalk.blue('Run project ...'));
        this.spawnCommandSync('npm', ['start'], { cwd: `./${projectDir}/src/`});
    }
};