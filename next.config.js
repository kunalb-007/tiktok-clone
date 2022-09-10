/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yt.ggpht.com', 
      'lh3.googleusercontent.com',
      'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com'],
  }
}

module.exports = nextConfig
