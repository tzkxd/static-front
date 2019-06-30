import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import Main from "./components/main";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Main />
			</div>
		);
	}
}

export default App;
