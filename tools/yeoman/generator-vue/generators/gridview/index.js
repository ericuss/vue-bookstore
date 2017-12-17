'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const projectUrl = 'https://github.com/ericuss/vue-bookstore.git';
const projectDir = 'vue-bookstore';
module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to ' + chalk.blue('Grid view') + ' generator!'
        ));

        const questions = [];

        return this.prompt(questions).then(props => {
            this.props = props;
            console.log(props);
        });
    }

    writing(){
        const directory = `./${projectDir}/src/`;
        console.log(chalk.blue('clonning from Github ...'));
        this.spawnCommandSync('git', ['clone', projectUrl]);

        console.log(chalk.blue('Yarn process ...'));
        this.spawnCommandSync('yarn', [], { cwd: `./${projectDir}/src/`});

        console.log(chalk.blue('Opening vscode ...'));
        this.spawnCommandSync('code-insiders', [`./${projectDir}/src/`]);

        console.log(chalk.blue('Run first time ...'));
        this.spawnCommandSync('npm', ['start'], { cwd: `./${projectDir}/src/`});
    }
};