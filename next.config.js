/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = {
  // warning: setting reactStrictMode: true will cause continue client refreshing in dev mode 
  reactStrictMode: false, 
  ...nextTranslate(),
  images: {
    domains: [
      "api-host.disdicilo.it",
      "hurrairaaa.disdicilo.it",
      "static.ghost.org"
    ]
  }
}

module.exports = nextConfig
