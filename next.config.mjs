/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true
      }
    ];
  },

  images: {
    domains: ["openweathermap.org"]
  }
};

export default nextConfig;
