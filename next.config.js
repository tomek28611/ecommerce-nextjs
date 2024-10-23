/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/nahradni-dily', 
        permanent: true, 
      },
    ];
  },
}

module.exports = nextConfig;
