const fs = require('fs');
const path = require('path');

const categories = {
  'filters_huiles': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Oil_filter_cut.jpg/600px-Oil_filter_cut.jpg',
  'freinage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Brembo_Brakes.jpg/600px-Brembo_Brakes.jpg',
  'moteur': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/BMW_M52B28_engine.jpg/600px-BMW_M52B28_engine.jpg',
  'suspension': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Shock_absorber.jpg/600px-Shock_absorber.jpg',
  'electricite_eclairage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Car_battery_VARTA.jpg/600px-Car_battery_VARTA.jpg',
  'transmission': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cutaway_of_a_manual_gearbox.jpg/600px-Cutaway_of_a_manual_gearbox.jpg',
  'refroidissement': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Radiator_of_a_car.jpg/600px-Radiator_of_a_car.jpg',
  'carrosserie_exterieur': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Car_body_structure.jpg/600px-Car_body_structure.jpg',
  'pneumatique': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tire_tread.jpg/600px-Tire_tread.jpg',
  'climatisation': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/AC_compressor.jpg/600px-AC_compressor.jpg'
};

const dir = './Back-End/ProductService/Data Insertions';
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.sql')) continue;
  const key = file.replace('.sql', '');
  const staticUrl = categories[key] || categories['moteur'];
  
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // The line format currently is: (ID,0x00,'image/jpeg','filename.jpg','https://loremflickr.com...'),
  // We need to replace the loremflickr URL with the staticUrl
  const regex = /\((\d+),\s*0x00,\s*'image\/jpeg',\s*'[^']+',\s*'[^']+'\)/g;
  
  content = content.replace(regex, (match, id) => {
      // Find the last string (the URL) and replace it
      return match.replace(/'https:\/\/[^']+'/, `'${staticUrl}'`);
  });
  
  fs.writeFileSync(path.join(dir, file), content);
  console.log('Fixed ' + file + ' to use static high-quality image.');
}
