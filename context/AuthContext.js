import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userDetails, setUserDetails] = useState({
		bodyType: "",
		age: "",
		activityLevel: "",
		height: "",
		weight: "",
		gender: ""
	});

	return (
		<AuthContext.Provider value={{ userDetails, setUserDetails }}>
			{children}
		</AuthContext.Provider>
	);
};
