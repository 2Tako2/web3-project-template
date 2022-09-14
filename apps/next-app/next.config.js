/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@web3-project-template/lib",
  "@web3-project-template/smart-contracts"
])

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
