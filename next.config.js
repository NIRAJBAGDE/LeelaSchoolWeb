/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images:{
        unoptimized:true
    },
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://api.leelasschool.com/:path*',
          },
        ]
      }
}

module.exports = nextConfig
