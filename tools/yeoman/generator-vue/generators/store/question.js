const prompts = [
    {
        type: 'input',
        name: 'moduleName',
        message: 'Enter the module name',
        default: ''
    },{
        type: 'checkbox',
        name: 'features',
        message: '¿files to add?',
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
    },
];

module.exports = prompts;