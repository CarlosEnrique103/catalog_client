import withSvgr from "@newhighsco/next-plugin-svgr";

const nextConfig = withSvgr({
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ["http://res.cloudinary.com/juancarlosechevarria/image/upload"],
  },
});

export default nextConfig;
