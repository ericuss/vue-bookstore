'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const questions = require('./questions.js');
const Commands = require('./commands.js');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to ' + chalk.blue('localication creator') + ' generator!'
    ));

    return this.prompt(questions).then(props => {
      this.props = props;
      // console.log(props);
    });
  }

  writing() {
    console.log(chalk.blue('Starting...'));
    
    this.commands = new Commands(this);

    if(this.props.features.indexOf('includeEs') > -1) {
      console.log(chalk.green(' · Creating es json'));      
      this.commands.copyEsJson();
      console.log(chalk.green(' · Updating localizer for es'));      
      this.commands.updateLocalizationEsImport();
      this.commands.updateLocalizationEsModule();
    }

    if(this.props.features.indexOf('includeEn') > -1) {
      console.log(chalk.green(' · Creating en json'));      
      this.commands.copyEnJson();
      console.log(chalk.green(' · Updating localizer for en'));      
      this.commands.updateLocalizationEnImport();
      this.commands.updateLocalizationEnModule();
    }
    
    console.log(chalk.blue('Finishing...'));
  }
};

