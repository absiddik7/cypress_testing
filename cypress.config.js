const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here

            // add the following lines
            on('after:run', (results) => {
                const fs = require('fs');
                fs.writeFileSync('./results.json', JSON.stringify(results, null, 2));

                const execSync = require('child_process').execSync;
                const cmd = "node send.js";

                const options = {
                encoding: 'utf8'
                };

                console.log(execSync(cmd, options))
            })
        }
    }
})