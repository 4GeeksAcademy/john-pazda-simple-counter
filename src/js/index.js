//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function(){
	const one = Math.floor(counter/1);
	const two = Math.floor(counter/10);
	const three = Math.floor(counter/100);
	const four = Math.floor(counter/1000);
	const five = Math.floor(counter/10000);
	const six = Math.floor(counter/100000);
    counter++;
    ReactDOM.render(<Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));
}, 1000);

