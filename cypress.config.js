const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
        const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    });
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
    
        return config;
        },
            specPattern: "cypress/e2e/**/*.feature",
        },
    });



//const cucumber = require('cypress-cucumber-preprocessor').default
//module.exports = (on, config) => {
//    on('file:preprocessor', cucumber())
//  }
//module.exports = defineConfig({
    
//    e2e: {
        
//        setupNodeEvents(on, config) {
//            // implement node event listeners here

//            // add the following lines
//            on('after:run', (results) => {
//                const fs = require('fs');
//                fs.writeFileSync('./results.json', JSON.stringify(results, null, 2));

//                const execSync = require('child_process').execSync;
//                const cmd = "node send.js";

//                const options = {
//                encoding: 'utf8'
//                };

//                console.log(execSync(cmd, options))
//            })
           
            
//        }
//    }
//})

