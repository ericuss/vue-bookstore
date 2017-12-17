
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
        message: 'Select languages',
        choices: [
            {
                name: 'Es',
                value: 'includeEs',
                checked: true
            },
            {
                name: 'En',
                value: 'includeEn',
                checked: true
            },
        ],
    });

    return prompts;
}

module.exports = GetPrompts;