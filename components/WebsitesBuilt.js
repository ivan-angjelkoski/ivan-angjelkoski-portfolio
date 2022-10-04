import {
	Box,
	Heading,
	Img,
	Link,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const websites = [
	{
		name: "Rick And Morty Explorer",
		img: "/rickandmorty_webp.webp",
		link: "https://rickandmortyexplorer.netlify.app",
		description:
			"Search The Characters From The Animated Series,Built With React,Framer-Motion,Chakra-Ui,GraphQl.",
	},
	{
		name: "SpaceX Launches",
		img: "/spacex_webp.webp",
		link: "https://spacex-react-five.vercel.app",
		description:
			"Search The Recent Launches From SpaceX,also with a Back-End server for storing comments.Built with React,GraphQl,Chakra-ui,Express and MongoDB.",
	},
];

const WebsitesBuilt = () => {
	return (
		<Box
			borderTop='2px'
			borderColor='blue.300'
			py={3}
		>
			<Heading
				size='lg'
				mb={3}
			>
				Websites Built
			</Heading>
			<SimpleGrid
				gap={3}
				p={3}
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
			>
				{websites.map((website) => (
					<Link
						_hover={{ textDecoration: "none", borderColor: "blue.300" }}
						key={website.name}
						rounded={10}
						border='2px'
						borderColor='gray.500'
						overflow={"hidden"}
						href={website.link}
						referrerPolicy='no-referrer'
						target={"_blank"}
					>
						<Img
							alt={website.name}
							w='full'
							src={website.img}
						/>
						<Box p={3}>
							<Heading size='md'>{website.name}</Heading>
							<Text
								mt={3}
								borderTop='1px'
								pt={2}
							>
								{website.description}
							</Text>
						</Box>
					</Link>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default WebsitesBuilt;
