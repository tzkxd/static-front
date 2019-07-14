import React, { Component } from "react";

import "../assets/component.css";

class Battleground extends Component {
	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck">
					<div className="col-lg-12 d-flex game-height">
						<div className="card border-success">
							<div className="card-body" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Battleground;
