const fs = require('fs');
const path = require('path');

const categories = [
    { 
        name: 'Moteur & Distribution', 
        filename: 'moteur.sql', 
        imgs: ['/images/products/car_engine.png', '/images/products/car_engine_2.png'],
        parts: ['Courroie de distribution', 'Kit de distribution complet', 'Galet tendeur', 'Pompe à eau', 'Joint de culasse', 'Soupape d\'échappement', 'Arbre à cames', 'Piston moteur', 'Segment de piston', 'Coussinet de bielle', 'Chaîne de distribution', 'Poulie damper', 'Support moteur', 'Vilebrequin', 'Culasse complète']
    },
    { 
        name: 'Freinage', 
        filename: 'freinage.sql', 
        imgs: ['/images/products/car_brakes.png', '/images/products/car_brakes_2.png'],
        parts: ['Plaquettes de frein avant', 'Disques de frein ventilés', 'Étrier de frein', 'Flexible de frein', 'Tambour de frein arrière', 'Maître-cylindre de frein', 'Servofrein (Mastervac)', 'Capteur ABS', 'Câble de frein à main', 'Liquide de frein Dot4', 'Kit de mâchoires de frein', 'Cylindre de roue', 'Témoin d\'usure des plaquettes']
    },
    { 
        name: 'Suspension & Direction', 
        filename: 'suspension.sql', 
        imgs: ['/images/products/car_suspension.png'],
        parts: ['Amortisseur avant', 'Amortisseur arrière', 'Ressort de suspension', 'Bras de suspension', 'Rotule de direction', 'Biellette de barre stabilisatrice', 'Crémaillère de direction', 'Pompe de direction assistée', 'Triangle de suspension', 'Silent bloc de bras', 'Coupelle d\'amortisseur', 'Rotule de suspension']
    },
    { 
        name: 'Transmission & Embrayage', 
        filename: 'transmission.sql', 
        imgs: ['/images/products/car_transmission.png'],
        parts: ['Kit d\'embrayage complet', 'Volant moteur bi-masse', 'Butée d\'embrayage', 'Cardan de transmission', 'Soufflet de cardan', 'Joint homocinétique', 'Récepteur d\'embrayage', 'Émetteur d\'embrayage', 'Câble d\'embrayage', 'Huile de boîte de vitesse']
    },
    { 
        name: 'Électricité & Allumage', 
        filename: 'electricite_eclairage.sql', 
        imgs: ['/images/products/car_battery.png'],
        parts: ['Alternateur 12V', 'Démarreur électrique', 'Batterie 70Ah', 'Bougie d\'allumage Irisium', 'Bougie de préchauffage', 'Bobine d\'allumage', 'Faisceau d\'allumage', 'Capteur de vilebrequin', 'Capteur de pression d\'huile', 'Sonde lambda']
    },
    { 
        name: 'Échappement & Dépollution', 
        filename: 'filters_huiles.sql', 
        imgs: ['/images/products/car_exhaust.png'],
        parts: ['Pot d\'échappement arrière', 'Catalyseur', 'Filtre à particules (FAP)', 'Collecteur d\'échappement', 'Silencieux central', 'Vanne EGR', 'Sonde de température d\'échappement', 'Collier d\'échappement', 'Silentbloc de pot']
    },
    { 
        name: 'Refroidissement & Chauffage', 
        filename: 'refroidissement.sql', 
        imgs: ['/images/products/car_radiator.png'],
        parts: ['Radiateur moteur', 'Ventilateur de radiateur', 'Thermostat (Calorstat)', 'Vase d\'expansion', 'Durite de refroidissement', 'Sonde de température d\'eau', 'Radiateur de chauffage', 'Pompe à eau électrique']
    },
    { 
        name: 'Carrosserie & Extérieur', 
        filename: 'carrosserie_exterieur.sql', 
        imgs: ['/images/products/car_body.png'],
        parts: ['Vérin de coffre', 'Rétroviseur complet', 'Phare avant H7', 'Feu arrière LED', 'Lève-vitre électrique', 'Poignée de porte', 'Calandre avant', 'Pare-chocs', 'Aile avant', 'Capot moteur']
    },
    { 
        name: 'Pneumatique & Jantes', 
        filename: 'pneumatique.sql', 
        imgs: ['/images/products/car_tire.png'],
        parts: ['Pneu Été 205/55 R16', 'Pneu Hiver', 'Jante Alu 17 pouces', 'Valve de pneu', 'Écrou de roue', 'Enjoliveur de roue', 'Roue de secours', 'Capteur de pression des pneus']
    },
    { 
        name: 'Climatisation', 
        filename: 'climatisation.sql', 
        imgs: ['/images/products/car_oil_filter.png'],
        parts: ['Compresseur de clim', 'Condenseur de clim', 'Filtre d\'habitacle', 'Détendeur de clim', 'Bouteille déshydratante', 'Pulseur d\'air', 'Pressostat de clim']
    }
];

const dir = './Back-End/ProductService/Data Insertions';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let productId = 1;

for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    
    let sql = `SET NAMES utf8mb4;\n`;
    sql += `-- ================================================================\n`;
    sql += `-- Catégorie ${i + 1}: ${cat.name}\n`;
    sql += `-- ================================================================\n\n`;
    sql += `START TRANSACTION;\n\n`;
    
    // Products
    sql += `INSERT INTO \`product\` (\`Id\`,\`Name\`,\`Description\`,\`price\`,\`Stock\`,\`Attributes\`,\`Category\`,\`UserId\`) VALUES\n`;
    const productValues = [];
    const imageValues = [];

    for (let j = 1; j <= 50; j++) {
        const id = productId++;
        
        // Pick a part name from the list or fallback to generic
        const partBase = cat.parts[j % cat.parts.length];
        const name = `${partBase} ${Math.floor(j/cat.parts.length) > 0 ? (Math.floor(j/cat.parts.length) + 1) : ''}`.trim();
        const desc = `${name} — pièce de rechange haute performance pour véhicules européens et asiatiques. Qualité certifiée OEM.`;
        const price = Math.floor(Math.random() * 800) + 40;
        const stock = Math.floor(Math.random() * 50) + 5;
        const attrs = JSON.stringify({ 
            categorie: cat.name, 
            marque: ["Bosch", "Valeo", "Brembo", "Sachs", "Magneti Marelli"][Math.floor(Math.random()*5)], 
            garantie: "2 ans" 
        });
        const userId = '00000000-0000-0000-0000-000000000000';
        
        productValues.push(`(${id},'${name.replace(/'/g, "''")}','${desc.replace(/'/g, "''")}',${price},${stock},'${attrs}','${cat.name}','${userId}')`);
        
        // Assign image (cycle through available images for this category)
        const imgUrl = cat.imgs[j % cat.imgs.length];
        imageValues.push(`(${id},0x00,'image/png','${path.basename(imgUrl)}','${imgUrl}')`);
    }
    sql += productValues.join(',\n') + ';\n\n';
    
    // Images
    sql += `INSERT INTO \`productsImage\` (\`Product_Id\`,\`image\`,\`Mimetype\`,\`Filename\`,\`image_url\`) VALUES\n`;
    sql += imageValues.join(',\n') + ';\n\n';
    sql += `COMMIT;\n`;
    
    fs.writeFileSync(path.join(dir, cat.filename), sql);
}

console.log("All 500 products generated with REAL NAMES and dynamic attributes!");
