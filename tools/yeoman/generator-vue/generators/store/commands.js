let CopyLib = require('../../utils/copyLibrary.js');



module.exports = class Commands {
    constructor(source) {
        this.source = source;        
        this.__generateProperties();
    }
    
    __generateProperties() {
        this.copyLib = new CopyLib(this.source);
        this.data = {
            moduleName: this.source.props.moduleName,
            include: {
                getters: this.source.props.features.indexOf('includeGetters') > -1,
                actions: this.source.props.features.indexOf('includeActions') > -1,
                mutations: this.source.props.features.indexOf('includeMutations') > -1,
                state: this.source.props.features.indexOf('includeState') > -1,
                store: this.source.props.features.indexOf('includeStore') > -1,
            },
        };
        
        // patterns for search in files
        this.patterns = {
            storeImport: /import modules/i,
            storeModule: /modules: {/i,
            actionConstantsImport: /import modules/i,
            actionConstantsModule: /export default {/i,
            getterConstantsImport: /import modules/i,
            getterConstantsModule: /export default {/i,
        };

        // templates for insert in files
        this.templates = {
            storeImport: `import ${this.data.moduleName}Module from './modules/${this.data.moduleName}/storeModule';`,            
            storeModule: `		${this.data.moduleName}: ${this.data.moduleName}Module,`,            
            getterConstantsImport: `import ${this.data.moduleName}Const from './modules/${this.data.moduleName}/action-types';`,            
            getterConstantsModule: `	${this.data.moduleName}: ${this.data.moduleName}Const,`,            
            actionConstantsImport: `import ${this.data.moduleName}Const from './modules/${this.data.moduleName}/getter-types';`,            
            actionConstantsModule: `	${this.data.moduleName}: ${this.data.moduleName}Const,`,            
        };

        const routeStoreModule = `src/src/store/modules/${this.data.moduleName}`;

        this.files = {
            templates: {
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
                actionTypes: `src/src/store/action-types.js`,
                getterTypes: `src/src/store/getter-types.js`,
                store: 'src/src/store/store.js',
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

    updateStoreImport() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.store, this.patterns.storeImport, this.templates.storeImport);
    }

    updateStoreModule() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.store, this.patterns.storeModule, this.templates.storeModule);
    }
    
    updateGetterConstantsImport() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.getterTypes, this.patterns.getterConstantsImport, this.templates.getterConstantsImport);
    }

    updateGetterConstantsModule() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.getterTypes, this.patterns.getterConstantsModule, this.templates.getterConstantsModule);
    }
    
    updateActionConstantsImport() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.actionTypes, this.patterns.actionConstantsImport, this.templates.actionConstantsImport);
    }
    
    updateActionConstantsModule() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.actionTypes, this.patterns.actionConstantsModule, this.templates.actionConstantsModule);
    }
}
