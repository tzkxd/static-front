import React, { Component } from "react";

import "../assets/component.css";

class Quiz extends Component {
	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck">
					<div class="col-lg-8 d-flex game-height">
						<div class="card border-success">
							<div class="card-body">
								<p class="card-text" />
							</div>
						</div>
					</div>
					<div class="col-lg-4 d-flex game-height text-center">
						<div class="card border-success">
							<div class="card-body">
								<button className="btn btn-success p-2 mt-5 answer-edit">
									A
								</button>
								<button className="btn btn-success p-2 mt-5 answer-edit">
									B
								</button>
								<button className="btn btn-success p-2 mt-5 answer-edit">
									C
								</button>
								<button className="btn btn-success p-2 mt-5 answer-edit">
									D
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Quiz;
