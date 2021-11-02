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
				My name is Noam, Live in Tel Aviv,<br />
				I’m a Full Stack Developer, Enjoys Programming,<br />
				Self Learning Abillity, Enjoys working in front of a computer,<br />
				Interested in new technologies & very motivated!
			</p>
			<Button text="Get in touch" />
		</div>	
	)
}

export default Information;