const jhiCore = require('jhipster-core');

module.exports = {
    askForTshirtSizes
};

function askForTshirtSizes(meta) {
    //const choices = [];
    const applicationType = this.applicationType;
   // const askForTshirtSize = done => {

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

        // if (choices.length > 0) {

        this.prompt(prompts).then(props => {

            this.tshirtSize = props.tShirtSize;

            //askForTshirtSize(done);
            done();
        });

        //  }d
        //  else {
        //     done();
        // }


  //  };


  
    //askForTshirtSize(done);
}

