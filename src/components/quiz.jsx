import React, { Component } from "react";

import "../assets/component.css";

class Quiz extends Component {
	state = {
		quote: null,
		notAvailable: true,
		count: 0,
		qna: [
			[
				"What is a correct syntax to output 'Hello World' in Python?",
				"print('Hello World')",
				"p('Hello World')",
				"pr('Hello World')",
				"System.out.println('Hello World')"
			],
			[
				"How do you insert a comment in Python?",
				"#Comment",
				"//Comment",
				"/* Comment */",
				"&Comment"
			],
			[
				"How can we distinguish blocks of code in Python?",
				"By indentation",
				"By a semicolon at the end of each line",
				"By a comma at the end of each line",
				"The editor will figure out"
			]
		]
	};

	render() {
		return (
			<div className="container">
				<div className="pt-lg-5 pb-lg-5 mx-auto text-center" />
				<div className="card-deck">
					<div className="col-lg-6 d-flex game-height">
						<div className="card border-success">
							<div className="card-body">
								<p className="card-text">
									{this.state.qna[this.state.count][0]}
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 d-flex game-height text-center">
						<div className="card border-success">
							<div className="card-body flex-column">
								<button
									className="btn btn-success p-2 mt-2 answer-edit"
									onClick={() =>
										this.setState({
											quote: "CORRECT!",
											notAvailable: false
										})
									}
								>
									A. {this.state.qna[this.state.count][1]}
								</button>
								<button
									className="btn btn-success p-2 mt-4 answer-edit"
									onClick={() => this.setState({ quote: "TRY AGAIN" })}
								>
									B. {this.state.qna[this.state.count][2]}
								</button>
								<button
									className="btn btn-success p-2 mt-4 answer-edit"
									onClick={() => this.setState({ quote: "TRY AGAIN" })}
								>
									C. {this.state.qna[this.state.count][3]}
								</button>
								<button
									className="btn btn-success p-2 mt-4 answer-edit"
									onClick={() => this.setState({ quote: "TRY AGAIN" })}
								>
									D. {this.state.qna[this.state.count][4]}
								</button>
								<h3 className="card-text mt-5 font-weight-bold">
									{this.state.quote}
								</h3>
								<button
									className="btn btn-warning p-2 mt-4 answer-edit"
									disabled={this.state.notAvailable}
									onClick={() =>
										this.setState({
											count: this.state.count + 1,
											notAvailable: true,
											quote: null
										})
									}
								>
									Next
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
