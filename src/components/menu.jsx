import React, { Component } from "react";
import { Link } from "react-router-dom";

import test from "./img/Aragami.png";

import "../assets/component.css";

class Menu extends Component {
	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck mb-5 text-center">
					<Link
						to="/classroom"
						className="card shadow-sm border-success"
						id="menu1"
					>
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">Classroom</h4>
						</div>
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
					</Link>
					<div className="card shadow-sm border-success" id="menu2">
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">Battleground</h4>
						</div>
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
					</div>
					<div className="card shadow-sm border-success" id="menu3">
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">Sandbox</h4>
						</div>
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
