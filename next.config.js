/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "mktg-assets.tcgplayer.com",
      "https://i.redd.it/lasw889lest71.jpg",
      "i.redd.it",
      "www.coca-colacompany.com",
    ],
  },
};

module.exports = nextConfig;
