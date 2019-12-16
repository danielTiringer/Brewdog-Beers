import axios from 'axios';

let url = `https://api.punkapi.com/v2/beers`;

class BeerService {
	// Get Posts
	static getBeers() {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.get(`${url}?per_page=200`);
				resolve(response.data);
				// eslint-disable-next-line no-console
			} catch(error) {
				// eslint-disable-next-line no-console
				reject(error);
			}
		});
	}
	static filterResults(parameters) {
		parameters.forEach(parameter => {
			// eslint-disable-next-line no-console
			console.log(parameter);
		});
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.get(`${url}`);
				resolve(response.data);
				// eslint-disable-next-line no-console
			} catch(error) {
				// eslint-disable-next-line no-console
				reject(error);
			}
		});
	}
}

export default BeerService;
