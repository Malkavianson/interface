import Head from "next/head";
import { SBody, STitle } from "@/styles/components/Home";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					name="description"
					content="Next.js"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main>
				<STitle>This page is painted with styled component</STitle>
				<SBody>A styled component</SBody>
			</main>
		</>
	);
}