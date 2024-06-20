// const config = require("./config");
// // import config  from "./config";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     DB_URI: config.DB_URI,
//     API: config.API,
//     NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
//     GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
//     PAGESIZE: config.PAGESIZE,
//     CLOUDNARY_CLOUD_NAME: config.CLOUDNARY_CLOUD_NAME,
//     CLOUDINARY_API_KEY: config.CLOUDINARY_API_KEY,
//     CLOUDINRAY_API_SECRET: config.CLOUDINRAY_API_SECRET,
//   },
//   webpack5: true,
//   // webpack5: (config, options) => {
//   //   config.cache = false;
//   //   return config;
//   // },
// };

// module.exports = nextConfig;

const config = require('./config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    DB_URI: config.DB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    // NEXT_PUBLIC_PAGESIZE: config.PAGESIZE,
    CLOUDINARY_CLOUD_NAME: config.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: config.CLOUDINARY_API_KEY,
    CLOUDINRAY_API_SECRET: config.CLOUDINRAY_API_SECRET,
    NEXT_PUBLIC_TOSS_CLIENT_KEY: config.NEXT_PUBLIC_TOSS_CLIENT_KEY,
    TOSS_SECRET_KEY: config.TOSS_SECRET_KEY,
    // STRIPE_PUBLISHABLE_KEY: config.STRIPE_PUBLISHABLE_KEY,
    // STRIPE_SECRET_KEY: config.STRIPE_SECRET_KEY,
    // STRIPE_TAX_RATE: config.STRIPE_TAX_RATE,
    // DOMAIN: config.DOMAIN,
    // STRIPE_SHIPPING_RATE: config.STRIPE_SHIPPING_RATE,
    // STRIPE_WEBHOOK_SECRET: config.STRIPE_WEBHOOK_SECRET,
  },
};

module.exports = nextConfig;
