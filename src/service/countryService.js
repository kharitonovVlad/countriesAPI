export default class CountryService {
	constructor() {
		this._apiBase = "https://restcountries.eu/rest/v2";
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};

	getCountries() {
		return this.getResource(`/all/`);
	};

	getRegion(region) {
		return this.getResource(`/region/${region}/`);
	};
}
