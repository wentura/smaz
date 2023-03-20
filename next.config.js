/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "klient001.zbyneksvoboda.cz/**",
        // port: "",
        // pathname: "/**",
      },
    ],
  },
};

// module.exports = nextConfig;
