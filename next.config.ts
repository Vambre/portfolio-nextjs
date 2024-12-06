import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './', // Nécessaire pour GitHub Pages
    images: {
        unoptimized: true, // Optimisation désactivée pour faciliter GitHub Pages
    },
};

module.exports = nextConfig;

export default nextConfig;
