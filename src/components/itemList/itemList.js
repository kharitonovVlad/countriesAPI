import React from "react";
import countryService from "../../service/countryService";

import "./itemList.css";

export default class ItemList extends React.Component {
	countryService = new countryService();

	state = {
		countryList: [],
	};

	getItems() {
		if (this.props.region !== null && this.props.region !== 'all') {
			this.countryService.getRegion(this.props.region).then((countryList) => {
				this.setState({
					countryList,
				});
			})
		} else {
			this.countryService.getCountries().then((countryList) => {
				this.setState({
					countryList,
				});
			});
		}
	};

	componentDidMount() {
		this.getItems();
	};

	componentDidUpdate(prevProps) {
		if (this.props.region !== prevProps.region) {
			this.getItems();
		}
	};

	renderItems(arr) {
		return arr.map((item, i) => {
			return (
				<div key={i} className="counriesItem" onClick={() => this.props.onCountrySelected(i, this.state.countryList)}>
					<div className="countriesInfo">
						<h3>{item.name}</h3>
						<span>Capital: {item.capital}</span>
						<span>Population: {item.population.toLocaleString()}</span>
					</div>
					<img className="countriesFlag" src={item.flag} alt={item.name} width="150" height="100"></img>
				</div>
			);
		});
	}

	render() {
		const items = this.renderItems(this.state.countryList);

		return <div className="counriesContainer">{items}</div>;
	}
}
