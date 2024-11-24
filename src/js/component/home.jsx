import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container">
			<div className="clock"><i className="fa-regular fa-clock"></i></div>
			<div className="six">{props.digit6}</div>
			<div className="five">{props.digit5}</div>
			<div className="four">{props.digit4}</div>
			<div className="three">{props.digit3}</div>
			<div className="two">{props.digit2}</div>
			<div className="one">{props.digit1}</div>
		</div>
	);
};

export default Home;
