import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/regio/maastricht",
        destination: "/bouwplaatsbeveiliging-maastricht",
        permanent: true,
      },
      {
        source: "/regio/heerlen",
        destination: "/bouwplaatsbeveiliging-heerlen",
        permanent: true,
      },
      {
        source: "/regio/sittard",
        destination: "/bouwplaatsbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/sittard-geleen",
        destination: "/bouwplaatsbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/geleen",
        destination: "/bouwplaatsbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/roermond",
        destination: "/bouwplaatsbeveiliging-roermond",
        permanent: true,
      },
      {
        source: "/regio/venlo",
        destination: "/bouwplaatsbeveiliging-venlo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
