import React, { useEffect, useRef, useContext } from "react";

import projectsData from "../../helpers/projectsData";

import Project from "./Project";

import Separator from "../Layout/Separator";

import { Context } from "../../contexts/SectionContext";

import "../../styles/Projects.css";

const Projects = () => {
	const { refs } = useContext(Context);

	const projectsRef = useRef(null);

	useEffect(() => {
		refs.current.push(projectsRef);
	}, [refs]);
	
	return(
		<section className="Projects" ref={ projectsRef }>
			<h1>Projects</h1>
			<Separator />
			<div className="projects-list">
				{ projectsData.map(project => <Project key={ project.id } data={ project } />) }
			</div>
		</section>
	)
}

export default Projects;