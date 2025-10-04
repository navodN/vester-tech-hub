const fs = require('fs');
const path = require('path');
const dist = path.resolve(__dirname, '..', 'dist');
const index = path.join(dist, 'index.html');
const notFound = path.join(dist, '404.html');

if (fs.existsSync(index)) {
  fs.copyFileSync(index, notFound);
  console.log('Copied index.html to 404.html');
} else {
  console.error('index.html not found in dist. Did build succeed?');
  process.exit(1);
}
