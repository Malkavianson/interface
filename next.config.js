/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		forceSwcTransforms: true,
		swcMinify: true,
	},
};

module.exports = nextConfig;
