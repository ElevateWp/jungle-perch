const http = require('http');
const routes = [
  '/', '/about/', '/reviews/', '/team/', '/team/jungle-perch-plumbing-services/',
  '/plumbing-services/', '/residential-plumbing/', '/new-home-plumbing/',
  '/plumbing-repairs/', '/leak-repairs/', '/blocked-drains/',
  '/hot-water-systems/', '/bathroom-kitchen-plumbing/',
  '/services/', '/quote/', '/contact/', '/plumbing-advice/', '/robots.txt', '/sitemap.xml',
];
async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get('http://127.0.0.1:3000' + path, (res) => {
      let data = ''; res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path, status: res.statusCode, hasH1: data.includes('<h1'), contentLength: data.length }));
    }).on('error', (err) => resolve({ path, error: err.message }));
  });
}
(async () => { const results = []; for (const route of routes) results.push(await checkRoute(route)); console.table(results); console.log('All routes returned HTTP 200: ' + results.every((r) => r.status === 200)); })();
