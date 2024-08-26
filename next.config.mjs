/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
    },
    optimizeFonts: true,
    reactStrictMode: true,
};

export default nextConfig;
