import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes["outer-cercle"]}>
				<div className={classes["inner-cercle"]}></div>
			</div>
			<div className={classes.text}>
				<p>Base</p>
				<p>Apparel</p>
			</div>
		</div>
	);
};

export default Header;
