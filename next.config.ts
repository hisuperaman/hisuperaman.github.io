import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // Generate a fully static site into ./out for GitHub Pages
    output: "export",
    // Emit /route/index.html so GitHub Pages can serve nested routes like /wallety and /wallety/terms
    trailingSlash: true,
    images: {unoptimized: true},
};

export default nextConfig;
