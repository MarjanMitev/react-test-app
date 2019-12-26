import { API_HOST, API_KEY, API_URL, API_CIENT_ID } from '../config.js';

class ImageService {
    API_HEADERS;
    
    constructor() {
        this.API_HEADERS = {
            'x-rapidapi-host': `${API_HOST}`,
            'x-rapidapi-key': `${API_KEY}`,
            'Authorization:': 'Client-ID ' + API_CIENT_ID
        }
    }

    getGalery() {
        return fetch(API_URL, {
            'method': 'GET',
            'headers': this.API_HEADERS
        });
    }
}

export default new ImageService();