import React from "react";

import './header.css';

export default class Header extends React.Component {
	render() {
		return (
      <div className="header">
        <ul className="headerMenu">
          <li className="headerItem selectedItem" onClick={() => this.props.onRegionSelected("all")}>All</li>
        </ul>
			<ul className="headerMenu">
				<li className="headerItem" onClick={() => this.props.onRegionSelected("africa")}>Africa</li>
				<li className="headerItem" onClick={() => this.props.onRegionSelected("americas")}>Americas</li>
				<li className="headerItem" onClick={() => this.props.onRegionSelected("asia")}>Asia</li>
				<li className="headerItem" onClick={() => this.props.onRegionSelected("europe")}>Europe</li>
				<li className="headerItem" onClick={() => this.props.onRegionSelected("oceania")}>Oceania</li>
			</ul>
      </div>
		);
	}
}
