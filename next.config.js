const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
    images: {
        domains: ['i.imgur.com','*.tmdb.org','www.themoviedb.org']
    },
    env: {
        NAME: 'AnimeON',
        URL: 'http://www.animeon.moe/',
        APIURL: 'http://api.animelatinohd.com/api/',
        STREAMURL: 'https://api.animelatinohd.com/stream/',
        GA_TRACKING_ID: 'UA-59047120-3',
        DISQUS_SHORTNAME: 'animeonmoe'
    },
}

module.exports = withPlugins([[withImages]], nextConfig)
