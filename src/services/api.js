import { create } from 'apisauce';

const api = create({
  baseURL: 'https://images-api.nasa.gov/',
  headers: { 'Content-Type': 'application/json' },
});

class Api {
  async searchPlanets(searchText) {
    try {
      console.log(searchText);
      const response = await api.get(`/search?q=${searchText}`);
      console.log(response);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Api();
