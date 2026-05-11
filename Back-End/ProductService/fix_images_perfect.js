const fs = require('fs');
const https = require('https');
const path = require('path');

const categories = {
  'filters_huiles': 'oil filter car',
  'freinage': 'disc brake car',
  'moteur': 'car engine',
  'suspension': 'car shock absorber',
  'electricite_eclairage': 'car headlight',
  'transmission': 'car gearbox',
  'refroidissement': 'car radiator',
  'carrosserie_exterieur': 'car bumper',
  'pneumatique': 'car tire',
  'climatisation': 'car air conditioning compressor'
};

async function fetchImage(keyword) {
    return new Promise((resolve) => {
        const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(keyword)}&gsrlimit=10&prop=imageinfo&iiprop=url&format=json`;
        const options = {
            headers: {
                'User-Agent': 'AutoNovaBot/1.0 (mohammed@example.com)'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.query && json.query.pages) {
                        const pages = json.query.pages;
                        for (const id in pages) {
                            const url = pages[id].imageinfo[0].url;
                            if (url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.jpeg') || url.toLowerCase().endsWith('.png')) {
                                resolve(url);
                                return;
                            }
                        }
                    }
                    resolve('https://upload.wikimedia.org/wikipedia/commons/5/52/Bosch_Oil_Filter.JPG');
                } catch(e) {
                    resolve('https://upload.wikimedia.org/wikipedia/commons/5/52/Bosch_Oil_Filter.JPG');
                }
            });
        }).on('error', () => resolve('https://upload.wikimedia.org/wikipedia/commons/5/52/Bosch_Oil_Filter.JPG'));
    });
}

async function main() {
    const dir = './Back-End/ProductService/Data Insertions';
    
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.sql')) continue;
      const key = file.replace('.sql', '');
      const keyword = categories[key] || 'car engine';
      const staticUrl = await fetchImage(keyword);
      console.log(`Fetched ${staticUrl} for ${key}`);
      
      let content = fs.readFileSync(path.join(dir, file), 'utf8');
      
      const regex = /\((\d+),\s*0x00,\s*'image\/jpeg',\s*'[^']+',\s*'[^']+'\)/g;
      content = content.replace(regex, (match, id) => {
          return match.replace(/'https:\/\/[^']+'/, `'${staticUrl}'`);
      });
      
      fs.writeFileSync(path.join(dir, file), content);
    }
    console.log("Done updating SQL files.");
}

main();
