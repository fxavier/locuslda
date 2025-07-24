/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: false,
	},
	reactStrictMode: true,
	images: {
		domains: [],
	},
};

module.exports = nextConfig;
