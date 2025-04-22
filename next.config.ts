import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "galaa.my.id",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "galaxd.dev",
                pathname: "**",
            },
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
                destination: "https://discord.gg/myhtfAbauc",
                permanent: true,
            },
            {
                source: "/p/whatsapp",
                destination: "https://whatsapp.com/channel/0029VaXL8Vc4o7qG33MYjE3T",
                permanent: true,
            },
            {
                source: "/p/telegram",
                destination: "https://t.me/GalaxyUniverseOfficial",
                permanent: true,
            },
            {
                source: "/p/github",
                destination: "https://github.com/MGalaCyber",
                permanent: true,
            },
            {
                source: "/p/upgrade",
                destination: "https://sociabuzz.com/galaxd/p/nextjs-api-starter-kit",
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
