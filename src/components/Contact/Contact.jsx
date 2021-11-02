import React, { useEffect, useRef, useContext } from "react";

import Separator from "../Layout/Separator";
import Button from "../Layout/Button";
import Footer from "../Layout/Footer";

import PhonePNG from "../../assets/icons/phone.png";
import EmailPNG from "../../assets/icons/email.png";

import { Context } from "../../contexts/SectionContext";

import "../../styles/Contact.css";

const Contact = () => {
	const { refs } = useContext(Context);

	const contactRef = useRef(null);

	useEffect(() => {
		refs.current.push(contactRef);
	}, [refs]);

	return(
		<div className="Contact" ref={ contactRef }>
			<h1>Contact Me</h1>
			<Separator />
			<p>
				I am currently looking for a Full Stack or Frontend Developer position,<br />
				Feel free to contact me!
			</p>
			<Button text="Email" />
			<div className="contact-information">
				<div className="phone">
					<img src={ PhonePNG } alt="" />
					<p>0539520062</p>
				</div>
				<div className="email">
					<img src={ EmailPNG } alt="" />
					<a href="mailto:noammeshoomar@gmail.com">noammeshoomar@gmail.com</a>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Contact;