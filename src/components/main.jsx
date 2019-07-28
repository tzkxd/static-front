import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./menu";
import Classroom from "./classroom";
import Quiz from "./quiz";
import Battleground from "./battleground";
import Sandbox from "./sandbox";

import Python from "./python";
import Java from "./java";
import CPlus from "./cplus";

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route path="/classroom" component={Classroom} />
					<Route path="/quiz" component={Quiz} />
					<Route path="/battleground" component={Battleground} />
					<Route path="/sandbox" component={Sandbox} />
					<Route path="/python" component={Python} />
					<Route path="/java" component={Java} />
					<Route path="/cplus" component={CPlus} />
					<Route path="/python" component={Python} />
				</Switch>
			</main>
		);
	}
}

export default Main;
