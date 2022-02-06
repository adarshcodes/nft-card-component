// Native Import
import React from "react";

// Styles Import
import "./sass/main.css";

// Component Import
import Card from "./components/Card";
import MyAttribution from "./components/MyAttribution";

function App() {
	return (
		<div className="app-container">
			<Card />
			<MyAttribution />
		</div>
	);
}

export default App;
