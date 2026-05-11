SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 4: Suspension
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(151,'Amortisseur avant pour Renault Clio','Pièce de rechange de haute qualité : Amortisseur avant pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,167,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(152,'Ressort de suspension pour Renault Clio','Pièce de rechange de haute qualité : Ressort de suspension pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,81,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(153,'Bras de suspension pour Renault Clio','Pièce de rechange de haute qualité : Bras de suspension pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,38,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(154,'Rotule de direction pour Renault Clio','Pièce de rechange de haute qualité : Rotule de direction pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,99,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(155,'Biellette de barre stabilisatrice pour Renault Clio','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,35,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(156,'Amortisseur avant pour Peugeot 208','Pièce de rechange de haute qualité : Amortisseur avant pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,67,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(157,'Ressort de suspension pour Peugeot 208','Pièce de rechange de haute qualité : Ressort de suspension pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,175,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(158,'Bras de suspension pour Peugeot 208','Pièce de rechange de haute qualité : Bras de suspension pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,37,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(159,'Rotule de direction pour Peugeot 208','Pièce de rechange de haute qualité : Rotule de direction pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,104,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(160,'Biellette de barre stabilisatrice pour Peugeot 208','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,172,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(161,'Amortisseur avant pour Volkswagen Golf','Pièce de rechange de haute qualité : Amortisseur avant pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,132,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(162,'Ressort de suspension pour Volkswagen Golf','Pièce de rechange de haute qualité : Ressort de suspension pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,21,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(163,'Bras de suspension pour Volkswagen Golf','Pièce de rechange de haute qualité : Bras de suspension pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,94,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(164,'Rotule de direction pour Volkswagen Golf','Pièce de rechange de haute qualité : Rotule de direction pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(165,'Biellette de barre stabilisatrice pour Volkswagen Golf','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,50,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(166,'Amortisseur avant pour BMW Série 3','Pièce de rechange de haute qualité : Amortisseur avant pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,190,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(167,'Ressort de suspension pour BMW Série 3','Pièce de rechange de haute qualité : Ressort de suspension pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,116,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(168,'Bras de suspension pour BMW Série 3','Pièce de rechange de haute qualité : Bras de suspension pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,182,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(169,'Rotule de direction pour BMW Série 3','Pièce de rechange de haute qualité : Rotule de direction pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,199,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(170,'Biellette de barre stabilisatrice pour BMW Série 3','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,209,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(171,'Amortisseur avant pour Mercedes Classe C','Pièce de rechange de haute qualité : Amortisseur avant pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,114,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(172,'Ressort de suspension pour Mercedes Classe C','Pièce de rechange de haute qualité : Ressort de suspension pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,95,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(173,'Bras de suspension pour Mercedes Classe C','Pièce de rechange de haute qualité : Bras de suspension pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,35,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(174,'Rotule de direction pour Mercedes Classe C','Pièce de rechange de haute qualité : Rotule de direction pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,45,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(175,'Biellette de barre stabilisatrice pour Mercedes Classe C','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,42,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(176,'Amortisseur avant pour Audi A4','Pièce de rechange de haute qualité : Amortisseur avant pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,121,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(177,'Ressort de suspension pour Audi A4','Pièce de rechange de haute qualité : Ressort de suspension pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,115,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(178,'Bras de suspension pour Audi A4','Pièce de rechange de haute qualité : Bras de suspension pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,106,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(179,'Rotule de direction pour Audi A4','Pièce de rechange de haute qualité : Rotule de direction pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,39,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(180,'Biellette de barre stabilisatrice pour Audi A4','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,182,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(181,'Amortisseur avant pour Toyota Yaris','Pièce de rechange de haute qualité : Amortisseur avant pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,47,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(182,'Ressort de suspension pour Toyota Yaris','Pièce de rechange de haute qualité : Ressort de suspension pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,66,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(183,'Bras de suspension pour Toyota Yaris','Pièce de rechange de haute qualité : Bras de suspension pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,55,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(184,'Rotule de direction pour Toyota Yaris','Pièce de rechange de haute qualité : Rotule de direction pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,50,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(185,'Biellette de barre stabilisatrice pour Toyota Yaris','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,26,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(186,'Amortisseur avant pour Ford Fiesta','Pièce de rechange de haute qualité : Amortisseur avant pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,191,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(187,'Ressort de suspension pour Ford Fiesta','Pièce de rechange de haute qualité : Ressort de suspension pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,52,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(188,'Bras de suspension pour Ford Fiesta','Pièce de rechange de haute qualité : Bras de suspension pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,171,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(189,'Rotule de direction pour Ford Fiesta','Pièce de rechange de haute qualité : Rotule de direction pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,165,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(190,'Biellette de barre stabilisatrice pour Ford Fiesta','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,157,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(191,'Amortisseur avant pour Citroën C3','Pièce de rechange de haute qualité : Amortisseur avant pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(192,'Ressort de suspension pour Citroën C3','Pièce de rechange de haute qualité : Ressort de suspension pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,17,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(193,'Bras de suspension pour Citroën C3','Pièce de rechange de haute qualité : Bras de suspension pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,10,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(194,'Rotule de direction pour Citroën C3','Pièce de rechange de haute qualité : Rotule de direction pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,94,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(195,'Biellette de barre stabilisatrice pour Citroën C3','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,169,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(196,'Amortisseur avant pour Fiat 500','Pièce de rechange de haute qualité : Amortisseur avant pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,28,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(197,'Ressort de suspension pour Fiat 500','Pièce de rechange de haute qualité : Ressort de suspension pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,71,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(198,'Bras de suspension pour Fiat 500','Pièce de rechange de haute qualité : Bras de suspension pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,123,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(199,'Rotule de direction pour Fiat 500','Pièce de rechange de haute qualité : Rotule de direction pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,162,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(200,'Biellette de barre stabilisatrice pour Fiat 500','Pièce de rechange de haute qualité : Biellette de barre stabilisatrice pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(151,0x00,'image/jpeg','amortisseur_avant_gauche_151.jpg','/images/products/amortisseur_avant.png'),
(152,0x00,'image/jpeg','amortisseur_avant_droit_152.jpg','/images/products/ressort_de_suspension.png'),
(153,0x00,'image/jpeg','amortisseur_arri_re_gauche_153.jpg','/images/products/bras_de_suspension.png'),
(154,0x00,'image/jpeg','amortisseur_arri_re_droit_154.jpg','/images/products/rotule_de_direction.png'),
(155,0x00,'image/jpeg','ressort_h_lico_dal_avant_155.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=155'),
(156,0x00,'image/jpeg','ressort_h_lico_dal_arri_re_156.jpg','/images/products/amortisseur_avant.png'),
(157,0x00,'image/jpeg','kit_amortisseurs_r_glables_157.jpg','/images/products/ressort_de_suspension.png'),
(158,0x00,'image/jpeg','silent_bloc_bras_158.jpg','/images/products/bras_de_suspension.png'),
(159,0x00,'image/jpeg','triangle_inf_rieur_gauche_159.jpg','/images/products/rotule_de_direction.png'),
(160,0x00,'image/jpeg','triangle_inf_rieur_droit_160.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=160'),
(161,0x00,'image/jpeg','rotule_de_direction_161.jpg','/images/products/amortisseur_avant.png'),
(162,0x00,'image/jpeg','biellette_de_direction_162.jpg','/images/products/ressort_de_suspension.png'),
(163,0x00,'image/jpeg','cr_maill_re_direction_163.jpg','/images/products/bras_de_suspension.png'),
(164,0x00,'image/jpeg','pompe_direction_assist_e_164.jpg','/images/products/rotule_de_direction.png'),
(165,0x00,'image/jpeg','colonne_de_direction_165.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=165'),
(166,0x00,'image/jpeg','barre_stabilisatrice_av_166.jpg','/images/products/amortisseur_avant.png'),
(167,0x00,'image/jpeg','barre_stabilisatrice_ar_167.jpg','/images/products/ressort_de_suspension.png'),
(168,0x00,'image/jpeg','silent_bloc_de_barre_stab_168.jpg','/images/products/bras_de_suspension.png'),
(169,0x00,'image/jpeg','but_e_de_suspension_169.jpg','/images/products/rotule_de_direction.png'),
(170,0x00,'image/jpeg','coupelle_d_amortisseur_170.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=170'),
(171,0x00,'image/jpeg','roulement_de_roue_avant_171.jpg','/images/products/amortisseur_avant.png'),
(172,0x00,'image/jpeg','roulement_de_roue_arri_re_172.jpg','/images/products/ressort_de_suspension.png'),
(173,0x00,'image/jpeg','moyeu_de_roue_avant_173.jpg','/images/products/bras_de_suspension.png'),
(174,0x00,'image/jpeg','fus_e_d_essieu_174.jpg','/images/products/rotule_de_direction.png'),
(175,0x00,'image/jpeg','rotule_de_suspension_175.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=175'),
(176,0x00,'image/jpeg','kit_bras_de_suspension_176.jpg','/images/products/amortisseur_avant.png'),
(177,0x00,'image/jpeg','tirant_de_r_glage_177.jpg','/images/products/ressort_de_suspension.png'),
(178,0x00,'image/jpeg','biellette_antirollbar_178.jpg','/images/products/bras_de_suspension.png'),
(179,0x00,'image/jpeg','kit_ressorts_sport_179.jpg','/images/products/rotule_de_direction.png'),
(180,0x00,'image/jpeg','amortisseur_gaz_180.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=180'),
(181,0x00,'image/jpeg','combin_filet_street_181.jpg','/images/products/amortisseur_avant.png'),
(182,0x00,'image/jpeg','kit_rehausse_182.jpg','/images/products/ressort_de_suspension.png'),
(183,0x00,'image/jpeg','cric_rouleur_183.jpg','/images/products/bras_de_suspension.png'),
(184,0x00,'image/jpeg','b_quille_de_levage_184.jpg','/images/products/rotule_de_direction.png'),
(185,0x00,'image/jpeg','rondelle_de_cale_ressort_185.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=185'),
(186,0x00,'image/jpeg','chape_de_ressort_186.jpg','/images/products/amortisseur_avant.png'),
(187,0x00,'image/jpeg','ancrage_ressort_187.jpg','/images/products/ressort_de_suspension.png'),
(188,0x00,'image/jpeg','tube_amortisseur_188.jpg','/images/products/bras_de_suspension.png'),
(189,0x00,'image/jpeg','joint_spy_amortisseur_189.jpg','/images/products/rotule_de_direction.png'),
(190,0x00,'image/jpeg','bague_de_suspension_190.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=190'),
(191,0x00,'image/jpeg','rotule_axiale_191.jpg','/images/products/amortisseur_avant.png'),
(192,0x00,'image/jpeg','rotule_radiale_192.jpg','/images/products/ressort_de_suspension.png'),
(193,0x00,'image/jpeg','palier_de_direction_193.jpg','/images/products/bras_de_suspension.png'),
(194,0x00,'image/jpeg','pivot_de_direction_194.jpg','/images/products/rotule_de_direction.png'),
(195,0x00,'image/jpeg','tirant_de_carrossage_195.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=195'),
(196,0x00,'image/jpeg','bielle_de_direction_196.jpg','/images/products/amortisseur_avant.png'),
(197,0x00,'image/jpeg','kit_g_om_trie_197.jpg','/images/products/ressort_de_suspension.png'),
(198,0x00,'image/jpeg','silentbloc_moteur_198.jpg','/images/products/bras_de_suspension.png'),
(199,0x00,'image/jpeg','silentbloc_boite_199.jpg','/images/products/rotule_de_direction.png'),
(200,0x00,'image/jpeg','cale_de_suspension_200.jpg','https://loremflickr.com/600/600/car,stabilizer,link?lock=200');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


