import React from "react";

import CodesPNG from "../../assets/codes.png";
import SenseiPNG from "../../assets/sensei.png";

const Sensei = () => {
	return(
		<div className="Sensei">
			<img className="codes" src={ CodesPNG } alt="" />
			<img className="sensei" src={ SenseiPNG } alt="" />
		</div>
	)
}

export default Sensei;