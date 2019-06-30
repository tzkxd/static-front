import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./menu";
import Classroom from "./classroom";
import Quiz from "./quiz";
import Python from "./python";

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route path="/classroom" component={Classroom} />
					<Route path="/quiz" component={Quiz} />
					<Route path="/python" component={Python} />
				</Switch>
			</main>
		);
	}
}

export default Main;
