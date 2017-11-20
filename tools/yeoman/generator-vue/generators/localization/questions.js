const prompts = [
    {
        type: 'input',
        name: 'moduleName',
        message: 'Enter the module name',
        default: ''
    },{
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
    },
];

module.exports = prompts;