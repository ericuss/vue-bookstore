
function GetPrompts(app){
    const prompts = [];

    if (app.options.moduleName === undefined){
        prompts.push({
            type: 'input',
            name: 'moduleName',
            message: 'Enter the module name',
            default: 'Sample',
        });
    }

    prompts.push({
            type: 'checkbox',
            name: 'features',
            message: 'Select parts',
            choices: [
                {
                    name: 'Getters',
                    value: 'includeGetters',
                    checked: true
                },
                {
                    name: 'Action files',
                    value: 'includeActions',
                    checked: true
                }, {
                    name: 'Mutation files',
                    value: 'includeMutations',
                    checked: true
                }, {    
                    name: 'State file',
                    value: 'includeState',
                    checked: true
                },{    
                    name: 'Store module',
                    value: 'includeStore',
                    checked: true
                },
            ],
        });

    return prompts;
}

module.exports = GetPrompts;