import {
	Box,
	Heading,
	Link,
	SimpleGrid,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const MyRepos = ({ repos }) => {
	const linkColor = useColorModeValue("black", "blue.200");
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
				My GitHub Repos
			</Heading>
			<SimpleGrid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
				{repos.map((repo) => (
					<Box
						key={repo.id}
						p={3}
						m={1}
						rounded={10}
						border='1px'
						borderColor='#88888888'
						_hover={{ borderColor: "blue.500" }}
					>
						<Link
							opacity={0.8}
							color={linkColor}
							href={repo.html_url}
							target='_blank'
							referrerPolicy='no-referrer'
							fontWeight={"bold"}
						>
							{repo.name}
						</Link>
						<Text mt={2}>{repo.description}</Text>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default MyRepos;
