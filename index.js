const Crelate = require('./crelate');
require('dotenv').config();
const print_error = error => {
    console.log('====error ocurred=====\n', error);
}


/*---------------------Crelate API---------------------------------*/
const crelate = new Crelate(process.env.CRELATE_API_KEY, 43200);

crelate.getJobs()
.then(response => {
    // console.log('Jobs from Crelate', response.data.Results);
    const result = response.data.Results;
    result.forEach(job => {
        console.log('Job Title: ', job.Name);
        console.log('Job Category: ', job.JobTypes[0].Name);
        console.log('Job Link: ', job.Website_Description);
        const job_location = 
                (job.Address_Business_Line1 ? (job.Address_Business_Line1+', ') : '')
                + (job.Address_Business_City ? (job.Address_Business_City+', ') : '')
                + (job.Address_Business_State ? (job.Address_Business_State+', ') : '')
                + (job.Address_Business_Country ? (job.Address_Business_Country+', ') : '')
                + (job.Address_Business_ZipCode ? (job.Address_Business_ZipCode) : '');
        console.log('Job Location: ', job_location);
        console.log('\n');
    });
})
.catch(print_error);
/*------------------------------------------------------------------------*/


/*---------------------Green House API---------------------------------*/
/*const GreenHouse = require('./greenhouse');
const green_house_client = new GreenHouse();

//Test with get the list of jobs from greenhouse
green_house_client.getJobs()
.then(response => {
    console.log('Jobs from GreenHouse', response.data.jobs);
})
.catch(print_error);

//Test with get the the job with id 4075608002
green_house_client.getByID(4075608002)
.then(response => {
    console.log('Job Detail:', response.data);
})
.catch(print_error);*/
/*------------------------------------------------------------------------*/