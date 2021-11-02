import React, { useRef } from "react";

export const Context = React.createContext();

const SectionContext = ({ children }) => {
	const refsRef = useRef([]);

	return(
		<Context.Provider value={ { refs: refsRef } }>
			{ children }
		</Context.Provider>
	)
}

export default SectionContext;