'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const questions = require('./questions.js');
const Commands = require('./commands.js');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to ' + chalk.blue('store creator') + ' generator!'
    ));

    return this.prompt(questions(this)).then(props => {
      this.props = props;

      if(this.options.moduleName !== undefined){
        this.props.moduleName = this.options.moduleName;
      }

      // console.log(props);
    });
  }

  writing() {
    console.log(chalk.blue('Starting...'));
    
    this.commands = new Commands(this);

    if(this.props.features.indexOf('includeGetters') > -1) {
      console.log(chalk.green(' · Creating getter types'));      
      this.commands.copyGetterConstants();
      console.log(chalk.green(' · Creating getters'));   
      this.commands.copyGetters();
      console.log(chalk.green(' · Updating getter types in parent'));   
      this.commands.updateGetterConstantsImport();
      this.commands.updateGetterConstantsModule();
    }
    
    if(this.props.features.indexOf('includeActions') > -1) {
      console.log(chalk.green(' · Creating action types'));      
      this.commands.copyActionConstants();
      console.log(chalk.green(' · Creating actions'));   
      this.commands.copyActions();
      console.log(chalk.green(' · Updating action types in parent'));
      this.commands.updateActionConstantsImport();
      this.commands.updateActionConstantsModule();
    }
    
    if(this.props.features.indexOf('includeMutations') > -1) {
      console.log(chalk.green(' · Creating mutation types'));      
      this.commands.copyMutationConstants();
      console.log(chalk.green(' · Creating mutations'));   
      this.commands.copyMutations();
    }
    
    if(this.props.features.indexOf('includeState') > -1) {
      console.log(chalk.green(' · Creating state'));      
      this.commands.copyState();
    }
    
    if(this.props.features.indexOf('includeStore') > -1) {
      console.log(chalk.green(' · Creating stores'));   
      this.commands.copyStoreModule();
      console.log(chalk.green(' · Updating store in parent'));
      this.commands.updateStoreImport();
      this.commands.updateStoreModule();
    }

    console.log(chalk.blue('Finishing...'));
  }
};

