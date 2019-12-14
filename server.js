// Creating custom server to inform Next.js, of the env that it's executing in and giving the server a context, that it would operate in
const next = require('next')
const http = require('http')
const url = require('url')
const path = require('path')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();// Normally how requests are handled in/by Next, like req form static folder for any static file req

app.prepare()
    .then(() => {
        http.createServer((req, res) => {
            // on the server, the req url should be cheked to find the req pathname to find which path requires the service worker-
            //- and send it back down to the clinet
            /* Parse the req url to get the path name*/
            const parsedUrl = url.parse(req.url, true)
            const { pathname } = parsedUrl; // extracting the pathname form the parsedUrl obj

            /*If a service worker is requested, serve it as a static file => serving the service worker, lil bit differently than 
            how Next normally handles it's requests */
            if (pathname === '/service-worker.js') { // if the pathname has this in it
                const filePath = path.join(__dirname, '.next', pathname); // current dir name + .next folder + service worker pathname
                app.serveStatic(req, res, filePath);
            } else {// if => giving info to the server on how to serve the service worker(this is actually to prevent a 404) || 
                //- else => handle it the usual way, the way Next deals with it
                handle(req, res, parsedUrl);
            }
        }).listen(port, () => {
            console.log(`Listening on port: ${port}`);

        })
    })