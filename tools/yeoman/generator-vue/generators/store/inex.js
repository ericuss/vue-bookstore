'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const questions = require('./questions.js');
const Commands = require('./commands.js');
// let CopyLib = require('./copyLib.js');

    // var fs = require('fs');
    // var readline = require('readline');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to ' + chalk.red('crud of backend') + ' generator!'
    ));

    return this.prompt(questions).then(props => {
      this.props = props;
      console.log(props);
    });
  }

  writing() {
    this.commands = new Commands(this);

    if(this.props.features.indexOf('includeGetters') > -1) {
      this.commands.copyGetterConstants();
      this.commands.copyGetters();
    }
    
    if(this.props.features.indexOf('includeActions') > -1) {
        this.commands.copyActionConstants();
        this.commands.copyActions();
    }
    
    if(this.props.features.indexOf('includeMutations') > -1) {
        this.commands.copyMutationConstants();
        this.commands.copyMutations();
    }
    
    if(this.props.features.indexOf('includeState') > -1) {
        this.commands.copyState();
    }
    
    if(this.props.features.indexOf('includeStore') > -1) {
        this.commands.copyStoreModule();
        this.commands.addStoreToGeneral();
    }
  }
};

