import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/waitlist",
        destination: "/pricing/",
        permanent: true,
      },
      {
        source: "/waitlist/",
        destination: "/pricing/",
        permanent: true,
      },
      {
        source: "/what-is-a-golf-simulator",
        destination: "/technology/",
        permanent: true,
      },
      {
        source: "/what-is-a-golf-simulator/",
        destination: "/technology/",
        permanent: true,
      },
      {
        source: "/best-golf-simulators-garland-dfw",
        destination: "/technology/",
        permanent: true,
      },
      {
        source: "/best-golf-simulators-garland-dfw/",
        destination: "/technology/",
        permanent: true,
      },
      {
        source: "/why-trackman-io-is-the-gold-standard",
        destination: "/technology/",
        permanent: true,
      },
      {
        source: "/why-trackman-io-is-the-gold-standard/",
        destination: "/technology/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;