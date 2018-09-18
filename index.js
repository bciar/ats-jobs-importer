const Crelate = require('./crelate');
require('dotenv').config();

const crelate = new Crelate(process.env.CRELATE_API_KEY, 43200);

crelate.getJobs()
.then(response => {
    console.log('response======>', response.data.Results);
})
.catch(error => {
    console.log('error======>', error);
});