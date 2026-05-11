SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 5: Électricité & Éclairage
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(201,'Batterie 12V pour Renault Clio','Pièce de rechange de haute qualité : Batterie 12V pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,29,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(202,'Alternateur pour Renault Clio','Pièce de rechange de haute qualité : Alternateur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,53,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(203,'Démarreur pour Renault Clio','Pièce de rechange de haute qualité : Démarreur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,108,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(204,'Bougie d''allumage pour Renault Clio','Pièce de rechange de haute qualité : Bougie d''allumage pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,93,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(205,'Bobine d''allumage pour Renault Clio','Pièce de rechange de haute qualité : Bobine d''allumage pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,71,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(206,'Batterie 12V pour Peugeot 208','Pièce de rechange de haute qualité : Batterie 12V pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,36,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(207,'Alternateur pour Peugeot 208','Pièce de rechange de haute qualité : Alternateur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,14,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(208,'Démarreur pour Peugeot 208','Pièce de rechange de haute qualité : Démarreur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,176,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(209,'Bougie d''allumage pour Peugeot 208','Pièce de rechange de haute qualité : Bougie d''allumage pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,193,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(210,'Bobine d''allumage pour Peugeot 208','Pièce de rechange de haute qualité : Bobine d''allumage pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,95,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(211,'Batterie 12V pour Volkswagen Golf','Pièce de rechange de haute qualité : Batterie 12V pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,149,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(212,'Alternateur pour Volkswagen Golf','Pièce de rechange de haute qualité : Alternateur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,146,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(213,'Démarreur pour Volkswagen Golf','Pièce de rechange de haute qualité : Démarreur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,35,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(214,'Bougie d''allumage pour Volkswagen Golf','Pièce de rechange de haute qualité : Bougie d''allumage pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,14,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(215,'Bobine d''allumage pour Volkswagen Golf','Pièce de rechange de haute qualité : Bobine d''allumage pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,206,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(216,'Batterie 12V pour BMW Série 3','Pièce de rechange de haute qualité : Batterie 12V pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,63,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(217,'Alternateur pour BMW Série 3','Pièce de rechange de haute qualité : Alternateur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,32,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(218,'Démarreur pour BMW Série 3','Pièce de rechange de haute qualité : Démarreur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,140,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(219,'Bougie d''allumage pour BMW Série 3','Pièce de rechange de haute qualité : Bougie d''allumage pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,122,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(220,'Bobine d''allumage pour BMW Série 3','Pièce de rechange de haute qualité : Bobine d''allumage pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,144,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(221,'Batterie 12V pour Mercedes Classe C','Pièce de rechange de haute qualité : Batterie 12V pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,181,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(222,'Alternateur pour Mercedes Classe C','Pièce de rechange de haute qualité : Alternateur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,147,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(223,'Démarreur pour Mercedes Classe C','Pièce de rechange de haute qualité : Démarreur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,46,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(224,'Bougie d''allumage pour Mercedes Classe C','Pièce de rechange de haute qualité : Bougie d''allumage pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,165,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(225,'Bobine d''allumage pour Mercedes Classe C','Pièce de rechange de haute qualité : Bobine d''allumage pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,190,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(226,'Batterie 12V pour Audi A4','Pièce de rechange de haute qualité : Batterie 12V pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,63,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(227,'Alternateur pour Audi A4','Pièce de rechange de haute qualité : Alternateur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,129,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(228,'Démarreur pour Audi A4','Pièce de rechange de haute qualité : Démarreur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,191,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(229,'Bougie d''allumage pour Audi A4','Pièce de rechange de haute qualité : Bougie d''allumage pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,67,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(230,'Bobine d''allumage pour Audi A4','Pièce de rechange de haute qualité : Bobine d''allumage pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,204,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(231,'Batterie 12V pour Toyota Yaris','Pièce de rechange de haute qualité : Batterie 12V pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,16,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(232,'Alternateur pour Toyota Yaris','Pièce de rechange de haute qualité : Alternateur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,56,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(233,'Démarreur pour Toyota Yaris','Pièce de rechange de haute qualité : Démarreur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,80,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(234,'Bougie d''allumage pour Toyota Yaris','Pièce de rechange de haute qualité : Bougie d''allumage pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,88,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(235,'Bobine d''allumage pour Toyota Yaris','Pièce de rechange de haute qualité : Bobine d''allumage pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,205,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(236,'Batterie 12V pour Ford Fiesta','Pièce de rechange de haute qualité : Batterie 12V pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,127,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(237,'Alternateur pour Ford Fiesta','Pièce de rechange de haute qualité : Alternateur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,61,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(238,'Démarreur pour Ford Fiesta','Pièce de rechange de haute qualité : Démarreur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,128,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(239,'Bougie d''allumage pour Ford Fiesta','Pièce de rechange de haute qualité : Bougie d''allumage pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,64,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(240,'Bobine d''allumage pour Ford Fiesta','Pièce de rechange de haute qualité : Bobine d''allumage pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,151,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(241,'Batterie 12V pour Citroën C3','Pièce de rechange de haute qualité : Batterie 12V pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,110,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(242,'Alternateur pour Citroën C3','Pièce de rechange de haute qualité : Alternateur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,204,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(243,'Démarreur pour Citroën C3','Pièce de rechange de haute qualité : Démarreur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,165,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(244,'Bougie d''allumage pour Citroën C3','Pièce de rechange de haute qualité : Bougie d''allumage pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,94,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(245,'Bobine d''allumage pour Citroën C3','Pièce de rechange de haute qualité : Bobine d''allumage pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,78,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(246,'Batterie 12V pour Fiat 500','Pièce de rechange de haute qualité : Batterie 12V pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,154,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(247,'Alternateur pour Fiat 500','Pièce de rechange de haute qualité : Alternateur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,182,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(248,'Démarreur pour Fiat 500','Pièce de rechange de haute qualité : Démarreur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,118,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(249,'Bougie d''allumage pour Fiat 500','Pièce de rechange de haute qualité : Bougie d''allumage pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,146,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(250,'Bobine d''allumage pour Fiat 500','Pièce de rechange de haute qualité : Bobine d''allumage pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,26,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(201,0x00,'image/jpeg','batterie_60ah_varta_201.jpg','/images/products/car_battery.png'),
(202,0x00,'image/jpeg','batterie_80ah_bosch_202.jpg','/images/products/car_engine.png'),
(203,0x00,'image/jpeg','c_ble_d_marrage_203.jpg','/images/products/car_engine.png'),
(204,0x00,'image/jpeg','projecteur_avant_led_204.jpg','/images/products/car_engine.png'),
(205,0x00,'image/jpeg','feu_arri_re_led_205.jpg','/images/products/car_engine.png'),
(206,0x00,'image/jpeg','ampoule_h7_xenon_206.jpg','/images/products/car_battery.png'),
(207,0x00,'image/jpeg','ampoule_h4_halog_ne_207.jpg','/images/products/car_engine.png'),
(208,0x00,'image/jpeg','kit_led_int_rieur_208.jpg','/images/products/car_engine.png'),
(209,0x00,'image/jpeg','fusible_bo_te_209.jpg','/images/products/car_engine.png'),
(210,0x00,'image/jpeg','relais_5_broches_210.jpg','/images/products/car_engine.png'),
(211,0x00,'image/jpeg','klaxon_bi_ton_211.jpg','/images/products/car_battery.png'),
(212,0x00,'image/jpeg','prise_obd2_212.jpg','/images/products/car_engine.png'),
(213,0x00,'image/jpeg','c_ble_faisceau_universel_213.jpg','/images/products/car_engine.png'),
(214,0x00,'image/jpeg','alternateur_214.jpg','/images/products/car_engine.png'),
(215,0x00,'image/jpeg','r_gulateur_de_tension_215.jpg','/images/products/car_engine.png'),
(216,0x00,'image/jpeg','d_marreur_refait_216.jpg','/images/products/car_battery.png'),
(217,0x00,'image/jpeg','c_ble_masse_batterie_217.jpg','/images/products/car_engine.png'),
(218,0x00,'image/jpeg','cosse_batterie_positive_218.jpg','/images/products/car_engine.png'),
(219,0x00,'image/jpeg','cosse_batterie_n_gative_219.jpg','/images/products/car_engine.png'),
(220,0x00,'image/jpeg','fil_lectrique_10m_220.jpg','/images/products/car_engine.png'),
(221,0x00,'image/jpeg','connecteur_tanche_221.jpg','/images/products/car_battery.png'),
(222,0x00,'image/jpeg','autoradio_bluetooth_222.jpg','/images/products/car_engine.png'),
(223,0x00,'image/jpeg','cam_ra_recul_223.jpg','/images/products/car_engine.png'),
(224,0x00,'image/jpeg','radar_de_recul_224.jpg','/images/products/car_engine.png'),
(225,0x00,'image/jpeg','capteur_de_pluie_225.jpg','/images/products/car_engine.png'),
(226,0x00,'image/jpeg','capteur_cr_pusculaire_226.jpg','/images/products/car_battery.png'),
(227,0x00,'image/jpeg','commodo_essuie_glace_227.jpg','/images/products/car_engine.png'),
(228,0x00,'image/jpeg','l_ve_vitre_gauche_228.jpg','/images/products/car_engine.png'),
(229,0x00,'image/jpeg','l_ve_vitre_droit_229.jpg','/images/products/car_engine.png'),
(230,0x00,'image/jpeg','moteur_essuie_glace_230.jpg','/images/products/car_engine.png'),
(231,0x00,'image/jpeg','balai_essuie_glace_231.jpg','/images/products/car_battery.png'),
(232,0x00,'image/jpeg','buse_essuie_glace_232.jpg','/images/products/car_engine.png'),
(233,0x00,'image/jpeg','pompe_lave_vitre_233.jpg','/images/products/car_engine.png'),
(234,0x00,'image/jpeg','r_servoir_lave_vitre_234.jpg','/images/products/car_engine.png'),
(235,0x00,'image/jpeg','tableau_de_bord_235.jpg','/images/products/car_engine.png'),
(236,0x00,'image/jpeg','compteur_vitesse_236.jpg','/images/products/car_battery.png'),
(237,0x00,'image/jpeg','thermom_tre_ext_237.jpg','/images/products/car_engine.png'),
(238,0x00,'image/jpeg','compte_tours_238.jpg','/images/products/car_engine.png'),
(239,0x00,'image/jpeg','kit_x_non_hid_239.jpg','/images/products/car_engine.png'),
(240,0x00,'image/jpeg','phare_antibrouillard_240.jpg','/images/products/car_engine.png'),
(241,0x00,'image/jpeg','feu_de_jour_led_241.jpg','/images/products/car_battery.png'),
(242,0x00,'image/jpeg','plafonnier_led_242.jpg','/images/products/car_engine.png'),
(243,0x00,'image/jpeg','clignotant_led_243.jpg','/images/products/car_engine.png'),
(244,0x00,'image/jpeg','feu_de_recul_244.jpg','/images/products/car_engine.png'),
(245,0x00,'image/jpeg','module_bcm_245.jpg','/images/products/car_engine.png'),
(246,0x00,'image/jpeg','capteur_angle_volant_246.jpg','/images/products/car_battery.png'),
(247,0x00,'image/jpeg','contacteur_frein_247.jpg','/images/products/car_engine.png'),
(248,0x00,'image/jpeg','interrupteur_stop_248.jpg','/images/products/car_engine.png'),
(249,0x00,'image/jpeg','actionneur_verrouillage_249.jpg','/images/products/car_engine.png'),
(250,0x00,'image/jpeg','moteur_essuie_glace_ar_250.jpg','/images/products/car_engine.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


