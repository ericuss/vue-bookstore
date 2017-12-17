'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const questions = require('./questions.js');

module.exports = class extends Generator {
    prompting() {
        this.log(yosay(
            'Welcome to ' + chalk.blue('summary vue') + ' generator!'
        ));

        return this.prompt(questions).then(props => {
            this.props = props;
            console.log(props);
        });
    }

    writing(){
        console.log(chalk.blue('Composing ...'));
        
        console.log('this props moduleName');
        console.log(this.props.moduleName);
        console.log('this.props.generators');
        console.log(this.props.generators);

        if(this.props.generators.indexOf('includeStore') > -1) {
            this.composeWith('vue:store', { moduleName: this.props.moduleName });
        }

        // if(this.props.generators.indexOf('includeLocalizator') > -1) {
        //     this.composeWith('vue:localization');
        // }

        if(this.props.generators.indexOf('includeLocalizator') > -1) {
            this.composeWith('vue:localization');
        }

        // this.composeWith('vue:grid-view', { blabla:'blablablalbla' });
    }
};
  