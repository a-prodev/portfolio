import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "apps-development.s3.sa-east-1.amazonaws.com",
				port: "",
				pathname: "/**",
			}
		]
	}
};

export default withContentlayer(nextConfig);
