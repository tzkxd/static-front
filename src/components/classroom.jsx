import React, { Component } from "react";

import { Link } from "react-router-dom";

import test from "./img/Aragami.png";

import "../assets/component.css";

class Classroom extends Component {
	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck mb-5 text-center">
					<Link
						to="/python"
						className="card shadow-sm border-success"
						id="menu1"
					>
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">Python</h4>
						</div>
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
					</Link>
					<div className="card mb-0 shadow-sm border-success">
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">Java</h4>
						</div>
						<div className="card-body">
							<img className="card-img-top" src={test} alt="temp" />
							<a className="stretched-link" href="#" />
						</div>
					</div>
					<div className="card mb-0 shadow-sm border-success">
						<div className="card-header bg-success">
							<h4 className="my-0 font-weight-normal">C++</h4>
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

export default Classroom;
