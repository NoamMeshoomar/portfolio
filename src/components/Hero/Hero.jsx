import React, { useEffect, useRef, useContext } from "react";

import NavBar from "../Layout/NavBar";
import Information from "./Information";
import Sensei from "./Sensei";

import { Context } from "../../contexts/SectionContext";

import "../../styles/Hero.css";

const Hero = () => {
	const { refs } = useContext(Context);

	const heroRef = useRef(null);

	useEffect(() => {
		refs.current.push(heroRef);
	}, [refs]);

	return(
		<section className="Hero" ref={ heroRef }>
			<NavBar />
			<div className="hero-container">
				<Information />
				<Sensei />
			</div>
		</section>
	)
}

export default Hero;