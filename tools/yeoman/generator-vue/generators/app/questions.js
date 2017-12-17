const prompts = [
    {
        type: 'input',
        name: 'moduleName',
        message: 'Enter the module name',
        default: 'Sample'
    },{
        type: 'checkbox',
        name: 'generators',
        message: 'Select the generators to execute',
        choices: 
        [
            {
                name: 'Generate store',
                value: 'includeStore',
                checked: true
            },{
                name: 'Generate localizer',
                value: 'includeLocalizator',
                checked: true
            },
        ],
    },
];

module.exports = prompts;