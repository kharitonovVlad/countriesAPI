import React from "react";

import "./countryInfo.css";

export default class CountryInfo extends React.Component {
	renderLanguages(arr) {
		return arr.map((item, i) => {
			return <li key={i}>{item.name}</li>;
		});
	}

	render() {
    let rndr;

    if (this.props.selectedCountry >= 0) {    
      const selectedCountry = this.props.countries[this.props.selectedCountry];
      const languages = this.renderLanguages(selectedCountry.languages);
      rndr = <>
      <div className="dark" onClick={this.props.onCountryUnselected}></div>
      <div className="counrie">
        <div className="countriesInfo">
          <h3>{selectedCountry.name}</h3>
          <span>Native name: {selectedCountry.nativeName}</span>
          <span>Capital: {selectedCountry.capital}</span>
          <span>Population: {selectedCountry.population.toLocaleString()}</span>
          <span>Region: {selectedCountry.region}</span>
          <span>Languages:</span>
          <ul>{languages}</ul>
        </div>
        <img className="countriesFlag" src={selectedCountry.flag} alt={selectedCountry.name} width="300" height="200" />
      </div>
    </>
    }
		

		return (
      <div>{rndr}</div>
		);
	}
}
