import React from "react";
import classes from "./ComingSoon.module.css";

const ComingSoon = () => {
	return (
		<div className={classes.comingSoon}>
			<h1 className={classes.title}>
				<span>We're </span>
				coming soon
			</h1>
			<p className={classes.text}>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
		</div>
	);
};

export default ComingSoon;
