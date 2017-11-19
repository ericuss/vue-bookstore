let CopyLib = require('./copyLib.js');



module.exports = class Commands {
    constructor(source) {
        this.__generateProperties(source);
    }

    __generateProperties(source) {
        this.data = {
            moduleName: this.props.moduleName,
            include = {
                getters: this.props.features.indexOf('includeGetters') > -1,
                actions: this.props.features.indexOf('includeActions') > -1,
                mutations: this.props.features.indexOf('includeMutations') > -1,
                state: this.props.features.indexOf('includeState') > -1,
                store: this.props.features.indexOf('includeStore') > -1,
            },
        };
        
        // patterns for search in files
        this.patterns = {
            storeImport: /import modules/i,
            storeModule: /modules: {/i,
        };

        // templates for insert in files
        this.templates = {
            storeImport: `import ${this.data.moduleName}Module from './modules/${this.data.moduleName}/storeModule';`,            
            storeModule: `		${this.data.moduleName}: ${this.data.moduleName}Module,`,            
            getterConstantsImport: `import ${this.data.moduleName}Const from './modules/${this.data.moduleName}/action-types';`,            
            getterConstantsModule: `		${this.data.moduleName}: ${this.data.moduleName}Const,`,            
            actionConstantsImport: `import ${this.data.moduleName}Const from './modules/${this.data.moduleName}/getter-types';`,            
            actionConstantsModule: `		${this.data.moduleName}: ${this.data.moduleName}Const,`,            
        };

        const routeStoreModule = `src/store/${this.data.moduleName}`;

        this.files = {
            template: {
                actionTypes: 'action-types.js',
                actions: 'actions.js',
                getterTypes: 'getter-types.js',
                getters: 'getters.js',
                mutationTypes: 'mutation-types.js',
                mutations: 'mutations.js',
                state: 'state.js',
                storeModule: 'storeModule.js',
            },
            destination: {
                module: {
                    actionTypes: `${routeStoreModule}/action-types.js`,
                    actions: `${routeStoreModule}/actions.js`,
                    getterTypes: `${routeStoreModule}/getter-types.js`,
                    getters: `${routeStoreModule}/getters.js`,
                    mutationTypes: `${routeStoreModule}/mutation-types.js`,
                    mutations: `${routeStoreModule}/mutations.js`,
                    state: `${routeStoreModule}/state.js`,
                    storeModule: `${routeStoreModule}/storeModule.js`,
                },
                actionTypes: `src/store/action-types.js`,
                getterTypes: `src/store/getter-types.js`,
                store: 'src/store/store.js',
            },
        };
    }

    // copy

    copyGetterConstants() {
        this.copyLib.copyTpl(this.files.templates.getterTypes, this.files.destination.module.getterTypes, this.data);
    }

    copyGetters() {
        this.copyLib.copyTpl(this.files.templates.getters, this.files.destination.module.getters, this.data);
    }

    copyActionConstants() {
        this.copyLib.copyTpl(this.files.templates.actionTypes, this.files.destination.module.actionTypes, this.data);
    }
    
    copyActions() {
        this.copyLib.copyTpl(this.files.templates.actions, this.files.destination.module.actions, this.data);
    }
    
    copyMutationConstants() {
        this.copyLib.copyTpl(this.files.templates.mutationTypes, this.files.destination.module.mutationTypes, this.data);
    }

    copyMutations() {
        this.copyLib.copyTpl(this.files.templates.mutations, this.files.destination.module.mutations, this.data);
    }
    
    copyState() {
        this.copyLib.copyTpl(this.files.templates.state, this.files.destination.module.state, this.data);
    }
    
    copyStoreModule() {
        this.copyLib.copyTpl(this.files.templates.storeModule, this.files.destination.module.storeModule, this.data);
    }

    // Modifications

    updateStore() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.store, this.patterns.storeImport, this.templates.storeImport);
        this.copyLib.ReadAndInsertBefore(this.files.destination.store, this.patterns.storeModule, this.templates.storeModule);
    }
    
    updateGetterConstants() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.getterTypes, this.patterns.getterConstantsImport, this.templates.getterConstantsImport);
        this.copyLib.ReadAndInsertBefore(this.files.destination.getterTypes, this.patterns.getterConstantsModule, this.templates.getterConstantsModule);
    }
    
    updateActionConstants() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.actionTypes, this.patterns.actionConstantsImport, this.templates.actionConstantsImport);
        this.copyLib.ReadAndInsertBefore(this.files.destination.actionTypes, this.patterns.actionConstantsModule, this.templates.actionConstantsModule);
    }
}
