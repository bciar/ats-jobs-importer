const axios = require('axios');

module.exports = class Crelate {
    constructor(api_key, modified) {
        this.api_key = api_key;
        this.modified = modified;
    }
    getJobs() {
        return axios.create({
            baseURL: 'https://app.crelate.com',
            responseType: 'application/json'
        })
        .get('/api/pub/v1/jobs/recent?modified='+this.modified+'&api_key='+this.api_key);
    }
}