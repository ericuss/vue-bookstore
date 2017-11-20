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
                es: this.source.props.features.indexOf('includeEs') > -1,
                en: this.source.props.features.indexOf('includeEn') > -1,
            },
        };
        
        // patterns for search in files
        this.patterns = {
            localizationsImports: /module languages/i,
            localizationsLanguagesEs: /add modules of es in i18n/i,
            localizationsLanguagesEn: /add modules of en in i18n/i,
        };

        // templates for insert in files
        this.templates = {
            esImport: `import es${this.data.moduleName}Module from './${this.data.moduleName}/es.json';`,            
            esLanguage: `            es${this.data.moduleName}Module,`,            
            enImport: `import en${this.data.moduleName}Module from './${this.data.moduleName}/en.json';`,            
            enLanguage: `            en${this.data.moduleName}Module,`,            
        };

        const routeLocalizationModule = `src/localizations/${this.data.moduleName}`;

        this.files = {
            templates: {
                en: 'en.json',
                es: 'es.json',
            },
            destination: {
                module: {
                    en: `${routeLocalizationModule}/en.json`,
                    es: `${routeLocalizationModule}/es.json`,
                },
                localization: 'src/localizations/i18nwrapper.js',
            },
        };
    }

    // copy

    copyEnJson() {
        this.copyLib.copyTpl(this.files.templates.en, this.files.destination.module.en, this.data);
    }

    copyEsJson() {
        this.copyLib.copyTpl(this.files.templates.es, this.files.destination.module.es, this.data);
    }

    // Modifications

    updateLocalizationEsImport() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.localization, this.patterns.localizationsImports, this.templates.esImport);
    }
    
    updateLocalizationEnImport() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.localization, this.patterns.localizationsImports, this.templates.enImport);
    }
    
    updateLocalizationEnModule() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.localization, this.patterns.localizationsLanguagesEn, this.templates.enLanguage);
    }
    
    updateLocalizationEsModule() {
        this.copyLib.ReadAndInsertBefore(this.files.destination.localization, this.patterns.localizationsLanguagesEs, this.templates.esLanguage);
    }
}
