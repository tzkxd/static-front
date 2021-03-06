import React, { Component } from "react";

import { Link } from "react-router-dom";

import test from "./img/Logo.PNG";
import started from "./img/Started.png";
import operators from "./img/Operators.png";
import variables from "./img/Variables.png";
import collections from "./img/Collections.png";
import loops from "./img/Loops.png";

import "../assets/component.css";

class Python extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck mb-5 text-center">
					<Link to="/quiz" className="card shadow-sm border-success" id="menu1">
						<div className="card-body">
							<img className="card-img-top" src={started} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">Getting started</h4>
						</div>
					</Link>
					<div className="card shadow-sm border-success" id="menu2">
						<div className="card-body">
							<img className="card-img-top" src={operators} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">Operators</h4>
						</div>
					</div>
					<div className="card shadow-sm border-success" id="menu3">
						<div className="card-body">
							<img className="card-img-top" src={variables} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">Variables</h4>
						</div>
					</div>
				</div>
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck mb-5 text-center">
					<Link to="/quiz" className="card shadow-sm border-success" id="menu1">
						<div className="card-body">
							<img className="card-img-top" src={collections} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">Collections</h4>
						</div>
					</Link>
					<div className="card shadow-sm border-success" id="menu2">
						<div className="card-body">
							<img className="card-img-top" src={loops} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">Loops</h4>
						</div>
					</div>
					<div className="card shadow-sm border-success" id="menu3">
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
						<div className="card-footer bg-success">
							<h4 className="my-0 font-weight-normal">TBA</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Python;
