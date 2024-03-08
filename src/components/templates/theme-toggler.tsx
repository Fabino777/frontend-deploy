"use client";

import { useContext } from "react";
import { 
	ThemeContext, 
	ToggleThemeContext 
} from "@/context/toggle-theme-provider";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export default function ThemeToggler() {

	const toggleTheme = useContext(ToggleThemeContext);
	const theme = useContext(ThemeContext);

	return (
		<Switch
			defaultSelected
			size="lg"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
			onValueChange={toggleTheme}
		>
    	</Switch>
	);
}
