import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./menu";
import Classroom from "./classroom";
import Quiz from "./quiz";
import Python from "./python";
import Battleground from "./battleground";
import Sandbox from "./sandbox";

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route path="/classroom" component={Classroom} />
					<Route path="/quiz" component={Quiz} />
					<Route path="/python" component={Python} />
					<Route path="/battleground" component={Battleground} />
					<Route path="/sandbox" component={Sandbox} />
				</Switch>
			</main>
		);
	}
}

export default Main;
