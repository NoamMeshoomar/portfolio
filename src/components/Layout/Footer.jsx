import React from "react";

import "../../styles/Footer.css";

const Footer = () => {
	return(
		<div className="Footer">
			<h3>©copyright <span style={ { color: "var(--red-color)" } }>-</span> Noam Meshoomar <span style={ { color: "var(--red-color)" } }>-</span> Portfolio</h3>
		</div>
	)
}

export default Footer;