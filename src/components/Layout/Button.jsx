import React from "react";

import "../../styles/Button.css";

const Button = ({ text }) => {
	return <a className="Button" href="mailto:noammeshoomar@gmail.com">{ text }</a>
}

export default Button;