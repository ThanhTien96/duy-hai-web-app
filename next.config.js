/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   trailingSlash: true,
   images: {
    unoptimized: true
   },
   ignoreBuildErrors: true,
}

module.exports = nextConfig
