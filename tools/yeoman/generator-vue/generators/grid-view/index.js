'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const questions = require('./questions.js');

module.exports = class extends Generator {
    prompting() {
        
        console.log("blabla")
        console.log(this.options.blabla)
        // console.log(arguments)
        this.log(yosay(
            'Welcome to ' + chalk.blue('grid vue') + ' generator!'
        ));
        console.log(Generator)
        // Generator.Base.apply(this, arguments);
        
        
        // console.log(this.option.blabla)

        // return this.prompt(questions).then(pr    ops => {
        //     this.props = props;
        //     console.log(props);
        // });
    }

    // writing(){
    //     console.log(chalk.blue('Composing ...'));

    //     if(this.props.generators.indexOf('includeStore') > -1) {
    //         this.composeWith('vue:store');
    //     }

    //     if(this.props.generators.indexOf('includeLocalizator') > -1) {
    //         this.composeWith('vue:localization');
    //     }
    // }
};
  