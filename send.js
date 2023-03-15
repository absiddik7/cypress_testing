const axios = require('axios');

var fs = require('fs');
var results = JSON.parse(fs.readFileSync('./results.json', 'utf8'));

axios.post('https://cypress-dashboard.onrender.com/post-json-result', {
    body: {
        results: results,
        projectId: "1sdo46qf" // your project id
    }
})
    .then(res => {
        console.log(res.data.status);
    })
    .catch(error => {
        console.error(error);
    })