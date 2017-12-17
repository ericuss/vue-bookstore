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

    return prompts;
}

module.exports = GetPrompts;