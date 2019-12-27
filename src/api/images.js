import { API_URL } from '../config.js';
class ImageService {
    REQUEST_PARAMS;
    
    constructor() {
        this.REQUEST_PARAMS = {
            method: 'GET'
        }
    }

    async getGiphies(limit) {
        const response = await fetch(API_URL.replace('{LIMIT}', limit), this.REQUEST_PARAMS);
        return response.json();
    }
}

export default new ImageService();