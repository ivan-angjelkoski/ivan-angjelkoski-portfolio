import { Box, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import MyRepos from "../components/MyRepos";
import Profile from "../components/Profile";
import WebsitesBuilt from "../components/WebsitesBuilt";

export default function Home({ repos }) {
	return (
		<>
			<Head>
				<title>Ivan Angjelkoski</title>
				<meta
					name='description'
					content='Portfolio - Ivan Angjelkoski'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Container
				maxW='3xl'
				px={7}
			>
				<Profile />
			</Container>
			<Container maxW='5xl'>
				<WebsitesBuilt />
				<MyRepos repos={repos} />
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		"https://api.github.com/users/ivan-angjelkoski/repos"
	);
	const repos = await res.json();
	return {
		props: {
			repos,
		},
		revalidate: 3600 * 24,
	};
};
