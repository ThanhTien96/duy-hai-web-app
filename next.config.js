/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        console.log(process.env.NEXT_PUBLIC_API)
        return [
            {
                source: '/api/next/:path*',
                destination: `https://shop.cyberlearn.vn/api/:paht*`,
            }
        ]
    }
}

module.exports = nextConfig
