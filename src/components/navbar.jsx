import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/component.css";

import logo from "./img/Logo.PNG";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-success main-color">
				<Link to="/" className="my-0 mr-md-auto font-weight-bold h4" id="logo">
					<img src={logo} alt="temp" width="40%" />
				</Link>
				<a className="p-2 text-dark font-weight-bold" id="lead" href="#">
					Leaderboard
				</a>
				<a className="p-2 text-dark font-weight-bold" id="achi" href="#">
					Achievements
				</a>
				<a className="p-2 text-dark font-weight-bold" id="set" href="#">
					Settings
				</a>
				<a className="btn btn-warning font-weight-bold" href="#">
					Log out
				</a>
			</nav>
		);
	}
}

export default NavBar;
