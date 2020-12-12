import ItemList from '../itemList/itemList';
import CountryInfo from '../countryInfo/countryInfo';
import Header from '../header/header';
import React from 'react';

import './App.css';

export default class App extends React.Component {
  state = {
    selectedCountry: -1,
    countries: null,
    region: null,
  }

  onRegionSelected = (region) => {
    console.log(region)
    this.setState({
      region,
    })
  };

  // onRegionUnselected = () => {
  //   this.setState({
  //     region: null,
  //   })
  // };

  onCountrySelected = (id, countries) => {
    this.setState({
      selectedCountry: id,
      countries,
    })
  };

  onCountryUnselected = () => {
    this.setState({
      selectedCountry: -1,
    })
  };

  render() {
      return (
        <>
          <Header onRegionSelected={this.onRegionSelected}/>
          <CountryInfo onCountryUnselected={this.onCountryUnselected} countries={this.state.countries} selectedCountry={this.state.selectedCountry}/>
          <ItemList region={this.state.region} onCountrySelected={this.onCountrySelected}/>
        </>
      );
  }
}