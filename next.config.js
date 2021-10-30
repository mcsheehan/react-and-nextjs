/** @type {import('next').NextConfig} */
module.exports = {
    // assetPrefix: './',
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com', 'assets.pokemon.com']
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/pokedex': { page: '/pokedex' },
        }
    },
}
