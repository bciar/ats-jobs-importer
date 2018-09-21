const axios = require('axios');

module.exports = class GreenHouse {
    constructor(api_key=null) {
        this.api_key = api_key;
        this.client = axios.create({
            baseURL: 'https://boards-api.greenhouse.io',
            responseType: 'application/json'
        });
    }
    getJobs() {
        return this.client.get('/v1/boards/hirehumanly/jobs');
    }
    getByID(id) {
        return this.client.get('/v1/boards/hirehumanly/jobs/'+id);
    }
}