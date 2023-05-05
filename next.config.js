/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "upload.wikimedia.org",
      "uhdtv.io",
      "mango.blender.org",
      "download.blender.org",
    ],
  },
};

module.exports = nextConfig;
