import React from "react";

import Separator from "../Layout/Separator";
import Button from "../Layout/Button";

const Information = () => {
	return(
		<div className="Information">
			<h1 className="name">Noam<br />Meshoomar</h1>
			<h3 className="profession">Full Stack Developer</h3>
			<Separator />
			<p className="about">
            I have always been interested in development, <br />
            have done quite a few things and projects of computers, <br />
            I'm an autodidactic, have a very great motivation to succeed and develop, <br />
            very sociable and enjoys working in a team, <br />
            open to learn new technologies and topics.
			</p>
			<Button text="Get in touch" />
		</div>	
	)
}

export default Information;