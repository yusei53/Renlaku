/** @type {import('next').NextConfig} */
const nextConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  NEXTAUTH_URL: "https://renlaku.vercel.app/",
  NEXTAUTH_SECRET: "0BCDGUhicas+68+8MtNN9eIB0aS2k49xmusUg6b0K18=",
};

module.exports = nextConfig;
