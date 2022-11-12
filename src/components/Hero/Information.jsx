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
				I have always been interested in development.<br /><br />
				Enjoys by writing code. write clean and organized<br />
				code, and learn new things.<br /><br />
				I have a self-learning ability,<br />
				highly motivated, and enjoy working in a team.
			</p>
			<Button text="Get in touch" />
		</div>	
	)
}

export default Information;