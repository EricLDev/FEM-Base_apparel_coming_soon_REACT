import React, { useState } from "react";
import classes from "./EmailForm.module.css";
import arrow from "../images/icon-arrow.svg";
import error from "../images/icon-error.svg";

const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const handleInputChange = (event) => {
		const email = event.target.value;
		setEmail(email);
	};

	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

	const validateEmail = (event) => {
		event.preventDefault();

		if (!emailRegex.test(email) || !email) {
			setIsValid(false);
			setMessage("Please provide a valid email");
		} else {
			setIsValid(true);
			setMessage("The entered email is valid");
		}
	};

	return (
		<form className={classes.emailForm} onSubmit={validateEmail}>
			<input className={`${isValid ? "" : classes.outlineError}`} type="text" placeholder="Email Address" id="email" name="email" onChange={handleInputChange} />
			<img className={`${isValid ? classes.hidden : classes.iconError}`} src={error} alt="" />
			<button type="submit">
				<img src={arrow} alt="" />
			</button>
			<div className={`${classes.message} ${isValid ? classes.success : classes.error}`}>{message}</div>
		</form>
	);
};

export default EmailForm;
