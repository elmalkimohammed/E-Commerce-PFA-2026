SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 2: Freinage
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(51,'Plaquettes de frein avant pour Renault Clio','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',280,68,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(52,'Disques de frein pour Renault Clio','Pièce de rechange de haute qualité : Disques de frein pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',210,39,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(53,'Étrier de frein pour Renault Clio','Pièce de rechange de haute qualité : Étrier de frein pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',350,142,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(54,'Liquide de frein DOT4 (Compatible Renault Clio)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Renault Clio). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',290,193,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(55,'Capteur ABS pour Renault Clio','Pièce de rechange de haute qualité : Capteur ABS pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',620,200,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(56,'Plaquettes de frein avant pour Peugeot 208','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,115,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(57,'Disques de frein pour Peugeot 208','Pièce de rechange de haute qualité : Disques de frein pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',120,40,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(58,'Étrier de frein pour Peugeot 208','Pièce de rechange de haute qualité : Étrier de frein pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',320,114,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(59,'Liquide de frein DOT4 (Compatible Peugeot 208)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Peugeot 208). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,120,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(60,'Capteur ABS pour Peugeot 208','Pièce de rechange de haute qualité : Capteur ABS pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,111,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(61,'Plaquettes de frein avant pour Volkswagen Golf','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',180,103,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(62,'Disques de frein pour Volkswagen Golf','Pièce de rechange de haute qualité : Disques de frein pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',230,143,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(63,'Étrier de frein pour Volkswagen Golf','Pièce de rechange de haute qualité : Étrier de frein pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,183,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(64,'Liquide de frein DOT4 (Compatible Volkswagen Golf)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Volkswagen Golf). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',480,116,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(65,'Capteur ABS pour Volkswagen Golf','Pièce de rechange de haute qualité : Capteur ABS pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',85,48,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(66,'Plaquettes de frein avant pour BMW Série 3','Pièce de rechange de haute qualité : Plaquettes de frein avant pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',85,204,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(67,'Disques de frein pour BMW Série 3','Pièce de rechange de haute qualité : Disques de frein pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',65,71,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(68,'Étrier de frein pour BMW Série 3','Pièce de rechange de haute qualité : Étrier de frein pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',520,164,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(69,'Liquide de frein DOT4 (Compatible BMW Série 3)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible BMW Série 3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',480,103,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(70,'Capteur ABS pour BMW Série 3','Pièce de rechange de haute qualité : Capteur ABS pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',780,59,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(71,'Plaquettes de frein avant pour Mercedes Classe C','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,10,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(72,'Disques de frein pour Mercedes Classe C','Pièce de rechange de haute qualité : Disques de frein pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',280,197,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(73,'Étrier de frein pour Mercedes Classe C','Pièce de rechange de haute qualité : Étrier de frein pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',45,75,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(74,'Liquide de frein DOT4 (Compatible Mercedes Classe C)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Mercedes Classe C). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,32,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(75,'Capteur ABS pour Mercedes Classe C','Pièce de rechange de haute qualité : Capteur ABS pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',35,18,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(76,'Plaquettes de frein avant pour Audi A4','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',2800,204,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(77,'Disques de frein pour Audi A4','Pièce de rechange de haute qualité : Disques de frein pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',480,134,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(78,'Étrier de frein pour Audi A4','Pièce de rechange de haute qualité : Étrier de frein pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',950,156,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(79,'Liquide de frein DOT4 (Compatible Audi A4)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Audi A4). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',190,60,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(80,'Capteur ABS pour Audi A4','Pièce de rechange de haute qualité : Capteur ABS pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',380,34,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(81,'Plaquettes de frein avant pour Toyota Yaris','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',45,158,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(82,'Disques de frein pour Toyota Yaris','Pièce de rechange de haute qualité : Disques de frein pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,44,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(83,'Étrier de frein pour Toyota Yaris','Pièce de rechange de haute qualité : Étrier de frein pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',250,39,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(84,'Liquide de frein DOT4 (Compatible Toyota Yaris)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Toyota Yaris). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',220,158,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(85,'Capteur ABS pour Toyota Yaris','Pièce de rechange de haute qualité : Capteur ABS pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',180,79,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(86,'Plaquettes de frein avant pour Ford Fiesta','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',170,202,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(87,'Disques de frein pour Ford Fiesta','Pièce de rechange de haute qualité : Disques de frein pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',400,25,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(88,'Étrier de frein pour Ford Fiesta','Pièce de rechange de haute qualité : Étrier de frein pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',195,29,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(89,'Liquide de frein DOT4 (Compatible Ford Fiesta)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Ford Fiesta). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',85,102,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(90,'Capteur ABS pour Ford Fiesta','Pièce de rechange de haute qualité : Capteur ABS pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',120,63,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(91,'Plaquettes de frein avant pour Citroën C3','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',890,130,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(92,'Disques de frein pour Citroën C3','Pièce de rechange de haute qualité : Disques de frein pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',650,56,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(93,'Étrier de frein pour Citroën C3','Pièce de rechange de haute qualité : Étrier de frein pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',130,97,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(94,'Liquide de frein DOT4 (Compatible Citroën C3)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Citroën C3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',15,141,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(95,'Capteur ABS pour Citroën C3','Pièce de rechange de haute qualité : Capteur ABS pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',25,107,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(96,'Plaquettes de frein avant pour Fiat 500','Pièce de rechange de haute qualité : Plaquettes de frein avant pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',12,168,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(97,'Disques de frein pour Fiat 500','Pièce de rechange de haute qualité : Disques de frein pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',230,18,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(98,'Étrier de frein pour Fiat 500','Pièce de rechange de haute qualité : Étrier de frein pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,57,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(99,'Liquide de frein DOT4 (Compatible Fiat 500)','Pièce de rechange de haute qualité : Liquide de frein DOT4 (Compatible Fiat 500). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',280,149,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(100,'Capteur ABS pour Fiat 500','Pièce de rechange de haute qualité : Capteur ABS pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',550,141,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(51,0x00,'image/jpeg','plaquettes_brembo_avant_51.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=51'),
(52,0x00,'image/jpeg','plaquettes_ferodo_arri_re_52.jpg','/images/products/disques_de_frein.png'),
(53,0x00,'image/jpeg','disque_frein_avant_ventil__53.jpg','/images/products/etrier_de_frein.png'),
(54,0x00,'image/jpeg','disque_plein_arri_re_54.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=54'),
(55,0x00,'image/jpeg','_trier_de_frein_av_gauche_55.jpg','/images/products/capteur_abs.png'),
(56,0x00,'image/jpeg','kit_freinage_complet_avant_56.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=56'),
(57,0x00,'image/jpeg','liquide_de_frein_dot5_1_57.jpg','/images/products/disques_de_frein.png'),
(58,0x00,'image/jpeg','plaquettes_ebc_greenstuff_58.jpg','/images/products/etrier_de_frein.png'),
(59,0x00,'image/jpeg','c_ble_frein_main_gauche_59.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=59'),
(60,0x00,'image/jpeg','c_ble_frein_main_droit_60.jpg','/images/products/capteur_abs.png'),
(61,0x00,'image/jpeg','m_choires_de_frein_arri_re_61.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=61'),
(62,0x00,'image/jpeg','tambour_de_frein_62.jpg','/images/products/disques_de_frein.png'),
(63,0x00,'image/jpeg','cylindre_r_cepteur_frein_63.jpg','/images/products/etrier_de_frein.png'),
(64,0x00,'image/jpeg','ma_tre_cylindre_frein_64.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=64'),
(65,0x00,'image/jpeg','tuyau_flexible_frein_av_65.jpg','/images/products/capteur_abs.png'),
(66,0x00,'image/jpeg','tuyau_flexible_frein_ar_66.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=66'),
(67,0x00,'image/jpeg','kit_r_paration_trier_67.jpg','/images/products/disques_de_frein.png'),
(68,0x00,'image/jpeg','disques_perc_s_sport_68.jpg','/images/products/etrier_de_frein.png'),
(69,0x00,'image/jpeg','plaquettes_pagid_sport_69.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=69'),
(70,0x00,'image/jpeg','servo_frein_70.jpg','/images/products/capteur_abs.png'),
(71,0x00,'image/jpeg','purge_frein_kit_71.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=71'),
(72,0x00,'image/jpeg','durites_aviation_freins_72.jpg','/images/products/disques_de_frein.png'),
(73,0x00,'image/jpeg','capteur_usure_plaquettes_73.jpg','/images/products/etrier_de_frein.png'),
(74,0x00,'image/jpeg','disque_frein_rainur__74.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=74'),
(75,0x00,'image/jpeg','anti_bruit_plaquettes_75.jpg','/images/products/capteur_abs.png'),
(76,0x00,'image/jpeg','_trier_brembo_4_pistons_76.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=76'),
(77,0x00,'image/jpeg','kit_frein_arri_re_complet_77.jpg','/images/products/disques_de_frein.png'),
(78,0x00,'image/jpeg','frein_main_lectrique_78.jpg','/images/products/etrier_de_frein.png'),
(79,0x00,'image/jpeg','plaquettes_textar_arri_re_79.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=79'),
(80,0x00,'image/jpeg','disque_312mm_avant_80.jpg','/images/products/capteur_abs.png'),
(81,0x00,'image/jpeg','visserie_trier_81.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=81'),
(82,0x00,'image/jpeg','bidon_liquide_frein_1l_82.jpg','/images/products/disques_de_frein.png'),
(83,0x00,'image/jpeg','disque_266mm_arri_re_83.jpg','/images/products/etrier_de_frein.png'),
(84,0x00,'image/jpeg','frein_tambour_kit_84.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=84'),
(85,0x00,'image/jpeg','capteur_abs_avant_85.jpg','/images/products/capteur_abs.png'),
(86,0x00,'image/jpeg','capteur_abs_arri_re_86.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=86'),
(87,0x00,'image/jpeg','disque_frein_zimmermann_87.jpg','/images/products/disques_de_frein.png'),
(88,0x00,'image/jpeg','plaquettes_trw_avant_88.jpg','/images/products/etrier_de_frein.png'),
(89,0x00,'image/jpeg','bocal_liquide_frein_89.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=89'),
(90,0x00,'image/jpeg','p_dale_de_frein_renforc_e_90.jpg','/images/products/capteur_abs.png'),
(91,0x00,'image/jpeg','disques_brembo_perc_s_avant_91.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=91'),
(92,0x00,'image/jpeg','plaquettes_carbone_c_ramique_92.jpg','/images/products/disques_de_frein.png'),
(93,0x00,'image/jpeg','kit_r_paration_frein_main_93.jpg','/images/products/etrier_de_frein.png'),
(94,0x00,'image/jpeg','bouchon_bocal_frein_94.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=94'),
(95,0x00,'image/jpeg','ressort_de_rappel_m_choire_95.jpg','/images/products/capteur_abs.png'),
(96,0x00,'image/jpeg','vis_de_purge_trier_96.jpg','https://loremflickr.com/600/600/car,brake,pads?lock=96'),
(97,0x00,'image/jpeg','plaquettes_ate_avant_97.jpg','/images/products/disques_de_frein.png'),
(98,0x00,'image/jpeg','frein_parking_c_ble_98.jpg','/images/products/etrier_de_frein.png'),
(99,0x00,'image/jpeg','disque_fonte_grise_99.jpg','https://loremflickr.com/600/600/car,brake,fluid?lock=99'),
(100,0x00,'image/jpeg','purgeur_frein_automatique_100.jpg','/images/products/capteur_abs.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


