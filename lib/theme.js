import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
	heading: `'Poppins',Avenir,Helvetica,sans-serif`,
	body: `'Poppins',Avenir,Helvetica,sans-serif`,
};

const styles = {
	global: (prop) => ({
		body: {
			bg: mode("gray.300", "gray.800")(prop),
			color: mode("gray.900", "gray.100")(prop),
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystsemColorMode: false,
	disableTransitionOnChange: false,
};

const theme = extendTheme({
	fonts,
	styles,
	config,
});

export default theme;
