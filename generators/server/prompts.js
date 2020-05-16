const jhiCore = require('jhipster-core');

module.exports = {
    askForTshirtSizes
};

function askForTshirtSizes(meta) {
    const applicationType = this.applicationType;
        const prompts = [
            {
                when: response => applicationType === 'microservice',
                type: 'list',
                name: 'tShirtSize',
                message:
                    'Which flavour you want to use',
                choices: [
                    {
                        value: 'simple',
                        name: 'simple'
                    },
                    {
                        value: 'medium',
                        name: 'medium'
                    },
                    {
                        value: 'advance',
                        name: 'advance'
                    }
                ],
                default: 'simple'
            }
        ];

        if (meta) return PROMPTS; // eslint-disable-line consistent-return
        const done = this.async();
        this.prompt(prompts).then(props => {
            this.tshirtSize = props.tShirtSize;
            done();
        });
}