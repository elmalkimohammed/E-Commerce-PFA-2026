const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Shock_absorber.jpg/600px-Shock_absorber.jpg';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

https.get(url, options, (res) => {
  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(data);
    console.log(`Downloaded ${buffer.length} bytes`);
    console.log('Hex start:', buffer.toString('hex').substring(0, 20));
  });
});
