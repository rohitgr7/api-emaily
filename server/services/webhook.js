const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'miqasjdojwaksdn' }, (err, tunnel) => {
  console.log('LT running');
});
