import { create } from 'apisauce';

const api = create({
    baseURL: 'https://images-api.nasa.gov/',
    headers: { 'Content-Type': 'application/json' }
});

class Api {
    async searchPlanets(searchText) {
        const response = api.get(`/search?q=${searchText}`)
    }
}

export default new Api();
