import React, { useRef } from 'react';

export const ProjectContext = React.createContext();

const ProjectsContext = ({ children }) => {
	const projectsRefs = useRef([]);

	return(
		<ProjectContext.Provider value={ { projectsRefs } }>
			{ children }
		</ProjectContext.Provider>
	)
}

export default ProjectsContext;