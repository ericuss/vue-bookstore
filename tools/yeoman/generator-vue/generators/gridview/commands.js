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
        };
        
        // patterns for search in files
        this.patterns = {
            menuAddGridComponent: /insert components/i,
            menuAddGridOptionMenu: /insert menu options/i,
            menuLayoutAddOption: /insert menu options/i,
        };

        // templates for insert in files
        this.templates = {
            storeImport: `import ${this.data.moduleName}Module from './modules/${this.data.moduleName}/storeModule';`,     
            menuAddGridComponent: `import ${this.data.moduleName}GridComponent from '@/components/modules/${this.data.moduleName}/${this.data.moduleName}grid/gridView';`,       
            menuAddGridOptionMenu: `{ path: '/${this.data.moduleName}Grid', name: '${this.data.moduleName}Grid', component: ${this.data.moduleName}GridComponent, },`,       
            menuLayoutAddOption: `{ icon: 'grid_on', text: '${this.data.moduleName}Grid', link: '${this.data.moduleName}Grid' },`,       
        };

        this.files = {
            templates: {
                gridComponent: 'gridComponent.vue',
            },
            destination: {
                gridView: `src/src/components/modules/${this.data.moduleName}/${this.data.moduleName}Grid/gridView.vue`,
                MenuLayout: `src/src/Layout/Menu.vue`,
                router: `src/src/router/index.js`,
            },
        };
    }

    // copy
    copyGridView() {
        this.copyLib.copyTpl(this.files.templates.gridComponent, this.files.destination.gridView, this.data);
    }

    // Modifications
    updateMenuComponent() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.router, this.patterns.menuAddGridComponent, this.templates.menuAddGridComponent);
    }

    updateMenuOption() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.router, this.patterns.menuAddGridOptionMenu, this.templates.menuAddGridOptionMenu);
    }

    updateMenuOptionInLayout() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.MenuLayout, this.patterns.menuLayoutAddOption, this.templates.menuLayoutAddOption);
    }
}
