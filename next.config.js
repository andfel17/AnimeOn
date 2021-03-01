const withPlugins = require('next-compose-plugins')

const nextConfig = {
    images: {
        domains: ['i.imgur.com','*.tmdb.org','www.themoviedb.org'],
        deviceSizes: [40, 53, 140, 162, 182, 192, 236, 250, 280],
        imageSizes: [40, 53, 140, 162, 182, 192, 236, 250, 280],
    },
    env: {
        NAME: 'AnimeON',
        URL: 'https://www.animeon.moe',
        APIURL: 'https://api.animelatinohd.com/api/',
        STREAMURL: 'https://api.animelatinohd.com/stream/',
        GA_TRACKING_ID: 'UA-59047120-3',
        DISQUS_SHORTNAME: 'animeonmoe'
    },
}

module.exports = withPlugins([], nextConfig)
