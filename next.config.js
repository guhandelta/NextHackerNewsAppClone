const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
    // The webpack config exposes a fn() where the webpack config is available
    webpack: config => {
        config.plugins.push(// push any new plugins into the plugins array, in the webpack config
            new SWPrecacheWebpackPlugin({ // Instantiate the plugin and pass in a configuration obj
                // cacheid: "hackerNewsNext" => useful for cache busting 
                // -> Cache busting solves the browser caching issue by using a unique file version identifier to tell the browser that a new version of the file is available. Therefore the browser doesn't retrieve the old file from cache but rather makes a request to the origin server for the new file.
                // dontCacheBustUrlsMatching => prevents removing certain things from cache, if the url matches a certain regex pattern
                // service-worker.js => service-worker file generated for the app. it can be configured with a custom name
                minify: true,
                staticFileGlobsIgnorePatterns: [/\.next\//], // Ignores any static files from the .next folder
                runtimeCaching: [
                    {
                        handler: 'networkFirst',
                        urlPattern: /^https?.*/
                    }
                ]
            })
        )
        return config;
    }
}