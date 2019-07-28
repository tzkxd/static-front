import React, { Component } from "react";

import "../assets/component.css";

class Sandbox extends Component {
	state = {
		output: null
	};

	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck">
					<div className="col-lg-12 d-flex game-height">
						<div>
							<button
								className="btn btn-success"
								onClick={() => this.setState({ output: "Hello World!" })}
							>
								RUN
							</button>
						</div>
						<div className="card border-success">
							<iframe
								id="editor"
								src="http://10.1.8.101:5010/editor"
								width="100%"
								height="100%"
							/>
						</div>
					</div>
				</div>
				<div className="card-deck">
					<div className="col-lg-6 d-flex log-height">
						<div />
						<div className="card border-success">
							<input type="text" id="input" placeholder="Input" height="100%" />
						</div>
					</div>
					<div className="col-lg-6 d-flex log-height">
						<div className="card border-success">
							<p>{this.state.output}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Sandbox;
