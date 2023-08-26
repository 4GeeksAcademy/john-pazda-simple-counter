import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";
import react from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="container">
			<div className="clock"><i className="fa-regular fa-clock"></i></div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};

Home.propTypes = {
	digitOne: propTypes.number,
	digitTwo: propTypes.number,
	digitThree: propTypes.number,
	digitFour: propTypes.number,
	digitFive: propTypes.number,
	digitSix: propTypes.number
}


export default Home;
