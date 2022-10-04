import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Link as ChLink,
	Box,
	Button,
	Container,
	Heading,
	Hide,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Show,
	Flex,
	useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaHome, FaPhone } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

const NavLinks = [
	{ label: "Home", href: "/" },
	{ label: "Contact", href: "/contact" },
];
// const NavLinks = [
//   {label: 'Home',href: '/',icon: FaHome},
//   {label: 'Contact',href: '/contact',icon: FaPhone},
// ]

const Navbar = () => {
	const [text] = useTypewriter({
		words: ["Ivan Angjelkoski", "Developer"],
		loop: 0,
		delaySpeed: "4000",
	});
	return (
		<Box
			as='nav'
			position={"sticky"}
			top={0}
			width={"full"}
			backdropFilter='blur(6px)'
			zIndex={10}
			shadow='sm'
		>
			<Container maxW={"4xl"}>
				<HStack
					justifyContent={"space-between"}
					p={2}
				>
					<Heading
						opacity={0.8}
						size='md'
						fontWeight={"normal"}
					>
						&lt;{text}
						<Cursor /> &#47;&gt;
					</Heading>
					<HStack>
						<DarkModeSwitch />
						<DesktopNav />
						<MobileNav />
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
};

const DesktopNav = () => {
	const btnColorScheme = useColorModeValue("gray", "blue");
	return (
		<Box
			gap={3}
			display={{ base: "none", md: "block" }}
		>
			<Flex
				gap={3}
				align='center'
			>
				{NavLinks.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						passHref
					>
						<ChLink _hover={{ textDecoration: "none" }}>
							<Button
								fontWeight={"normal"}
								colorScheme={btnColorScheme}
								variant='ghost'
								leftIcon={link.icon && <link.icon />}
							>
								{link.label}
							</Button>
						</ChLink>
					</Link>
				))}
			</Flex>
		</Box>
	);
};

const MobileNav = () => {
	return (
		<Box display={{ base: "block", md: "none" }}>
			<Menu>
				<MenuButton
					as={IconButton}
					variant='outline'
					colorScheme='blue'
					icon={<HamburgerIcon />}
				/>
				<MenuList>
					{NavLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							passHref
						>
							<MenuItem
								as={ChLink}
								_hover={{ textDecoration: "none" }}
								icon={link.icon && <link.icon />}
							>
								{link.label}
							</MenuItem>
						</Link>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};

export default Navbar;
