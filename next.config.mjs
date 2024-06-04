/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const nextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
   trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
   skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      // {
      //   source: "/api/:path*",
      //   destination:process.env.NODE_ENV !== "development" ? "https://erp-server-zeta.vercel.app/:path*" : "http://localhost:3333/:path*",
      // },
     { source:"/api/:path*",
      destination:"http://localhost:3333/api/:path*" 
    }
    ]
    },
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

const withPWA = nextPWA({
  dest: "public", // Destination directory for the PWA files
  //   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

export default withPWA(nextConfig);
