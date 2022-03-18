import React from "react";
import classes from "./Hero.module.css";
import hero from "../images/hero-mobile.jpg";

const Hero = () => {
	return (
		<div className={classes.hero}>
			<img src={hero} alt="error" />
		</div>
	);
};

export default Hero;
