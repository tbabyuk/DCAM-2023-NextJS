/** @type {import('next').NextConfig} */

// NOT SURE IF BELOW IS REQUIRED
const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    // nextConfig,
    async redirects() {
        return [
        {
            source: '/easy-chopin-etudes',
            destination: '/blog/easy-chopin-etudes',
            permanent: true,
        },
        {
            source: '/easy-chopin-nocturnes',
            destination: '/blog/easy-chopin-nocturnes',
            permanent: true,
        },
        ]
    },
}

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '/easy-chopin-etudes',
//           destination: '/blog/easy-chopin-etudes',
//         //   permanent: true,
//         },
//       ]
//     },
//   }
