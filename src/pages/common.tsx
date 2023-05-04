import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Template Next.js Malkavianson</title>
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
				<div className="MainHome">
					<h1 className="title">this is the main home page.</h1>
					<p className="text">This text is in the home page.</p>
				</div>
			</main>
		</>
	);
}
