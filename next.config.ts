import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                pathname: "**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/p/discord",
                destination: "https://portal.universesmp.xyz/p/discord",
                permanent: true,
            },
            {
                source: "/p/whatsapp",
                destination: "https://portal.universesmp.xyz/p/whatsapp",
                permanent: true,
            },
            {
                source: "/p/telegram",
                destination: "https://appeal.universesmp.xyz",
                permanent: true,
            },
            {
                source: "/p/github",
                destination: "https://github.com/MGalaCyber",
                permanent: true,
            },
            {
                source: "/p/tos",
                destination: "https://legal.galaxd.com/project/website/nextjs-api-starter-kit",
                permanent: true,
            },
            {
                source: "/p/privacy",
                destination: "https://legal.galaxd.com/project/website/nextjs-api-starter-kit",
                permanent: true,
            },
            {
                source: "/p/cookie",
                destination: "https://en.wikipedia.org/wiki/HTTP_cookie",
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
