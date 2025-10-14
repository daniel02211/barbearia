/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.utfs.io", // cobre subdomínios tipo f.utfs.io
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
