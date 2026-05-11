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
(201,0x00,'image/jpeg','batterie_60ah_varta_201.jpg','https://loremflickr.com/600/600/car,battery?lock=201'),
(202,0x00,'image/jpeg','batterie_80ah_bosch_202.jpg','https://loremflickr.com/600/600/car,alternator?lock=202'),
(203,0x00,'image/jpeg','c_ble_d_marrage_203.jpg','https://loremflickr.com/600/600/car,starter?lock=203'),
(204,0x00,'image/jpeg','projecteur_avant_led_204.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=204'),
(205,0x00,'image/jpeg','feu_arri_re_led_205.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=205'),
(206,0x00,'image/jpeg','ampoule_h7_xenon_206.jpg','https://loremflickr.com/600/600/car,battery?lock=206'),
(207,0x00,'image/jpeg','ampoule_h4_halog_ne_207.jpg','https://loremflickr.com/600/600/car,alternator?lock=207'),
(208,0x00,'image/jpeg','kit_led_int_rieur_208.jpg','https://loremflickr.com/600/600/car,starter?lock=208'),
(209,0x00,'image/jpeg','fusible_bo_te_209.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=209'),
(210,0x00,'image/jpeg','relais_5_broches_210.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=210'),
(211,0x00,'image/jpeg','klaxon_bi_ton_211.jpg','https://loremflickr.com/600/600/car,battery?lock=211'),
(212,0x00,'image/jpeg','prise_obd2_212.jpg','https://loremflickr.com/600/600/car,alternator?lock=212'),
(213,0x00,'image/jpeg','c_ble_faisceau_universel_213.jpg','https://loremflickr.com/600/600/car,starter?lock=213'),
(214,0x00,'image/jpeg','alternateur_214.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=214'),
(215,0x00,'image/jpeg','r_gulateur_de_tension_215.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=215'),
(216,0x00,'image/jpeg','d_marreur_refait_216.jpg','https://loremflickr.com/600/600/car,battery?lock=216'),
(217,0x00,'image/jpeg','c_ble_masse_batterie_217.jpg','https://loremflickr.com/600/600/car,alternator?lock=217'),
(218,0x00,'image/jpeg','cosse_batterie_positive_218.jpg','https://loremflickr.com/600/600/car,starter?lock=218'),
(219,0x00,'image/jpeg','cosse_batterie_n_gative_219.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=219'),
(220,0x00,'image/jpeg','fil_lectrique_10m_220.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=220'),
(221,0x00,'image/jpeg','connecteur_tanche_221.jpg','https://loremflickr.com/600/600/car,battery?lock=221'),
(222,0x00,'image/jpeg','autoradio_bluetooth_222.jpg','https://loremflickr.com/600/600/car,alternator?lock=222'),
(223,0x00,'image/jpeg','cam_ra_recul_223.jpg','https://loremflickr.com/600/600/car,starter?lock=223'),
(224,0x00,'image/jpeg','radar_de_recul_224.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=224'),
(225,0x00,'image/jpeg','capteur_de_pluie_225.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=225'),
(226,0x00,'image/jpeg','capteur_cr_pusculaire_226.jpg','https://loremflickr.com/600/600/car,battery?lock=226'),
(227,0x00,'image/jpeg','commodo_essuie_glace_227.jpg','https://loremflickr.com/600/600/car,alternator?lock=227'),
(228,0x00,'image/jpeg','l_ve_vitre_gauche_228.jpg','https://loremflickr.com/600/600/car,starter?lock=228'),
(229,0x00,'image/jpeg','l_ve_vitre_droit_229.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=229'),
(230,0x00,'image/jpeg','moteur_essuie_glace_230.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=230'),
(231,0x00,'image/jpeg','balai_essuie_glace_231.jpg','https://loremflickr.com/600/600/car,battery?lock=231'),
(232,0x00,'image/jpeg','buse_essuie_glace_232.jpg','https://loremflickr.com/600/600/car,alternator?lock=232'),
(233,0x00,'image/jpeg','pompe_lave_vitre_233.jpg','https://loremflickr.com/600/600/car,starter?lock=233'),
(234,0x00,'image/jpeg','r_servoir_lave_vitre_234.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=234'),
(235,0x00,'image/jpeg','tableau_de_bord_235.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=235'),
(236,0x00,'image/jpeg','compteur_vitesse_236.jpg','https://loremflickr.com/600/600/car,battery?lock=236'),
(237,0x00,'image/jpeg','thermom_tre_ext_237.jpg','https://loremflickr.com/600/600/car,alternator?lock=237'),
(238,0x00,'image/jpeg','compte_tours_238.jpg','https://loremflickr.com/600/600/car,starter?lock=238'),
(239,0x00,'image/jpeg','kit_x_non_hid_239.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=239'),
(240,0x00,'image/jpeg','phare_antibrouillard_240.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=240'),
(241,0x00,'image/jpeg','feu_de_jour_led_241.jpg','https://loremflickr.com/600/600/car,battery?lock=241'),
(242,0x00,'image/jpeg','plafonnier_led_242.jpg','https://loremflickr.com/600/600/car,alternator?lock=242'),
(243,0x00,'image/jpeg','clignotant_led_243.jpg','https://loremflickr.com/600/600/car,starter?lock=243'),
(244,0x00,'image/jpeg','feu_de_recul_244.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=244'),
(245,0x00,'image/jpeg','module_bcm_245.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=245'),
(246,0x00,'image/jpeg','capteur_angle_volant_246.jpg','https://loremflickr.com/600/600/car,battery?lock=246'),
(247,0x00,'image/jpeg','contacteur_frein_247.jpg','https://loremflickr.com/600/600/car,alternator?lock=247'),
(248,0x00,'image/jpeg','interrupteur_stop_248.jpg','https://loremflickr.com/600/600/car,starter?lock=248'),
(249,0x00,'image/jpeg','actionneur_verrouillage_249.jpg','https://loremflickr.com/600/600/car,spark,plug?lock=249'),
(250,0x00,'image/jpeg','moteur_essuie_glace_ar_250.jpg','https://loremflickr.com/600/600/car,ignition,coil?lock=250');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


