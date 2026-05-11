SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 9: Pneumatiques & Jantes
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(401,'Pneu été 205/55 R16 (Compatible Renault Clio)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Renault Clio). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,209,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(402,'Pneu hiver 195/65 R15 (Compatible Renault Clio)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Renault Clio). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,69,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(403,'Jante alliage 17 pouces (Compatible Renault Clio)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Renault Clio). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,161,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(404,'Capteur de pression TPMS pour Renault Clio','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,197,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(405,'Kit anti-crevaison pour Renault Clio','Pièce de rechange de haute qualité : Kit anti-crevaison pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,178,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(406,'Pneu été 205/55 R16 (Compatible Peugeot 208)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Peugeot 208). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,173,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(407,'Pneu hiver 195/65 R15 (Compatible Peugeot 208)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Peugeot 208). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,111,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(408,'Jante alliage 17 pouces (Compatible Peugeot 208)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Peugeot 208). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,205,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(409,'Capteur de pression TPMS pour Peugeot 208','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,109,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(410,'Kit anti-crevaison pour Peugeot 208','Pièce de rechange de haute qualité : Kit anti-crevaison pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,27,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(411,'Pneu été 205/55 R16 (Compatible Volkswagen Golf)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Volkswagen Golf). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,19,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(412,'Pneu hiver 195/65 R15 (Compatible Volkswagen Golf)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Volkswagen Golf). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,102,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(413,'Jante alliage 17 pouces (Compatible Volkswagen Golf)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Volkswagen Golf). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,194,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(414,'Capteur de pression TPMS pour Volkswagen Golf','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,198,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(415,'Kit anti-crevaison pour Volkswagen Golf','Pièce de rechange de haute qualité : Kit anti-crevaison pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,174,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(416,'Pneu été 205/55 R16 (Compatible BMW Série 3)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible BMW Série 3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,188,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(417,'Pneu hiver 195/65 R15 (Compatible BMW Série 3)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible BMW Série 3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,10,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(418,'Jante alliage 17 pouces (Compatible BMW Série 3)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible BMW Série 3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,133,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(419,'Capteur de pression TPMS pour BMW Série 3','Pièce de rechange de haute qualité : Capteur de pression TPMS pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,145,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(420,'Kit anti-crevaison pour BMW Série 3','Pièce de rechange de haute qualité : Kit anti-crevaison pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,98,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(421,'Pneu été 205/55 R16 (Compatible Mercedes Classe C)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Mercedes Classe C). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,179,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(422,'Pneu hiver 195/65 R15 (Compatible Mercedes Classe C)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Mercedes Classe C). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,52,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(423,'Jante alliage 17 pouces (Compatible Mercedes Classe C)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Mercedes Classe C). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,163,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(424,'Capteur de pression TPMS pour Mercedes Classe C','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,148,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(425,'Kit anti-crevaison pour Mercedes Classe C','Pièce de rechange de haute qualité : Kit anti-crevaison pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,56,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(426,'Pneu été 205/55 R16 (Compatible Audi A4)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Audi A4). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,184,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(427,'Pneu hiver 195/65 R15 (Compatible Audi A4)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Audi A4). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,117,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(428,'Jante alliage 17 pouces (Compatible Audi A4)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Audi A4). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,74,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(429,'Capteur de pression TPMS pour Audi A4','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,22,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(430,'Kit anti-crevaison pour Audi A4','Pièce de rechange de haute qualité : Kit anti-crevaison pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,176,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(431,'Pneu été 205/55 R16 (Compatible Toyota Yaris)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Toyota Yaris). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,84,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(432,'Pneu hiver 195/65 R15 (Compatible Toyota Yaris)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Toyota Yaris). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,58,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(433,'Jante alliage 17 pouces (Compatible Toyota Yaris)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Toyota Yaris). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,36,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(434,'Capteur de pression TPMS pour Toyota Yaris','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,46,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(435,'Kit anti-crevaison pour Toyota Yaris','Pièce de rechange de haute qualité : Kit anti-crevaison pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,66,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(436,'Pneu été 205/55 R16 (Compatible Ford Fiesta)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Ford Fiesta). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,131,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(437,'Pneu hiver 195/65 R15 (Compatible Ford Fiesta)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Ford Fiesta). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,140,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(438,'Jante alliage 17 pouces (Compatible Ford Fiesta)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Ford Fiesta). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,188,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(439,'Capteur de pression TPMS pour Ford Fiesta','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,142,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(440,'Kit anti-crevaison pour Ford Fiesta','Pièce de rechange de haute qualité : Kit anti-crevaison pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,54,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(441,'Pneu été 205/55 R16 (Compatible Citroën C3)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Citroën C3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,138,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(442,'Pneu hiver 195/65 R15 (Compatible Citroën C3)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Citroën C3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,130,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(443,'Jante alliage 17 pouces (Compatible Citroën C3)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Citroën C3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,51,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(444,'Capteur de pression TPMS pour Citroën C3','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,31,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(445,'Kit anti-crevaison pour Citroën C3','Pièce de rechange de haute qualité : Kit anti-crevaison pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,83,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(446,'Pneu été 205/55 R16 (Compatible Fiat 500)','Pièce de rechange de haute qualité : Pneu été 205/55 R16 (Compatible Fiat 500). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,59,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(447,'Pneu hiver 195/65 R15 (Compatible Fiat 500)','Pièce de rechange de haute qualité : Pneu hiver 195/65 R15 (Compatible Fiat 500). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,171,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(448,'Jante alliage 17 pouces (Compatible Fiat 500)','Pièce de rechange de haute qualité : Jante alliage 17 pouces (Compatible Fiat 500). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,30,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(449,'Capteur de pression TPMS pour Fiat 500','Pièce de rechange de haute qualité : Capteur de pression TPMS pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,132,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(450,'Kit anti-crevaison pour Fiat 500','Pièce de rechange de haute qualité : Kit anti-crevaison pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,200,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(401,0x00,'image/jpeg','pneu_t_205_55r16_401.jpg','/images/products/car_tire.png'),
(402,0x00,'image/jpeg','pneu_hiver_205_55r16_402.jpg','/images/products/car_tire.png'),
(403,0x00,'image/jpeg','pneu_4_saisons_195_65r15_403.jpg','/images/products/car_tire.png'),
(404,0x00,'image/jpeg','pneu_sport_225_45r17_404.jpg','/images/products/car_tire.png'),
(405,0x00,'image/jpeg','jante_alliage_16_pouces_405.jpg','/images/products/car_tire.png'),
(406,0x00,'image/jpeg','jante_acier_15_pouces_406.jpg','/images/products/car_tire.png'),
(407,0x00,'image/jpeg','jante_sport_17_pouces_407.jpg','/images/products/car_tire.png'),
(408,0x00,'image/jpeg','kit_jante_pneu_t__408.jpg','/images/products/car_tire.png'),
(409,0x00,'image/jpeg','valve_de_gonflage_409.jpg','/images/products/car_tire.png'),
(410,0x00,'image/jpeg','capteur_tpms_410.jpg','/images/products/car_tire.png'),
(411,0x00,'image/jpeg','kit_r_paration_crevaison_411.jpg','/images/products/car_tire.png'),
(412,0x00,'image/jpeg','cric_t_lescopique_412.jpg','/images/products/car_tire.png'),
(413,0x00,'image/jpeg','cl_chocs_1_2_413.jpg','/images/products/car_tire.png'),
(414,0x00,'image/jpeg','douille_17mm_414.jpg','/images/products/car_tire.png'),
(415,0x00,'image/jpeg','_crou_antivol_415.jpg','/images/products/car_tire.png'),
(416,0x00,'image/jpeg','boulons_roue_m12x1_5_416.jpg','/images/products/car_tire.png'),
(417,0x00,'image/jpeg','adaptateur_de_jante_417.jpg','/images/products/car_tire.png'),
(418,0x00,'image/jpeg','bague_de_centrage_418.jpg','/images/products/car_tire.png'),
(419,0x00,'image/jpeg','cale_de_roue_419.jpg','/images/products/car_tire.png'),
(420,0x00,'image/jpeg','gonfleur_compresseur_420.jpg','/images/products/car_tire.png'),
(421,0x00,'image/jpeg','jauge_pression_pneu_421.jpg','/images/products/car_tire.png'),
(422,0x00,'image/jpeg','balance_roue_422.jpg','/images/products/car_tire.png'),
(423,0x00,'image/jpeg','pneu_rechap_175_65r14_423.jpg','/images/products/car_tire.png'),
(424,0x00,'image/jpeg','pneu_run_flat_225_50r17_424.jpg','/images/products/car_tire.png'),
(425,0x00,'image/jpeg','mousse_anti_crevaison_425.jpg','/images/products/car_tire.png'),
(426,0x00,'image/jpeg','kit_quilibrage_426.jpg','/images/products/car_tire.png'),
(427,0x00,'image/jpeg','pneu_tout_terrain_235_70r16_427.jpg','/images/products/car_tire.png'),
(428,0x00,'image/jpeg','jante_4x4_18_pouces_428.jpg','/images/products/car_tire.png'),
(429,0x00,'image/jpeg','enjoliveur_15_pouces_429.jpg','/images/products/car_tire.png'),
(430,0x00,'image/jpeg','capuchon_valve_chrome_430.jpg','/images/products/car_tire.png'),
(431,0x00,'image/jpeg','bague_de_valve_431.jpg','/images/products/car_tire.png'),
(432,0x00,'image/jpeg','pneu_rechap_185_60r15_432.jpg','/images/products/car_tire.png'),
(433,0x00,'image/jpeg','jante_carbone_18p_433.jpg','/images/products/car_tire.png'),
(434,0x00,'image/jpeg','sigle_centre_jante_434.jpg','/images/products/car_tire.png'),
(435,0x00,'image/jpeg','couvre_jante_plastique_435.jpg','/images/products/car_tire.png'),
(436,0x00,'image/jpeg','cire_pneu_brillant_436.jpg','/images/products/car_tire.png'),
(437,0x00,'image/jpeg','pneu_moto_120_70_14_437.jpg','/images/products/car_tire.png'),
(438,0x00,'image/jpeg','biellette_jante_r_glable_438.jpg','/images/products/car_tire.png'),
(439,0x00,'image/jpeg','vis_tungst_ne_jante_439.jpg','/images/products/car_tire.png'),
(440,0x00,'image/jpeg','boulons_sph_riques_440.jpg','/images/products/car_tire.png'),
(441,0x00,'image/jpeg','extracteur_de_valve_441.jpg','/images/products/car_tire.png'),
(442,0x00,'image/jpeg','pince_monte_pneu_442.jpg','/images/products/car_tire.png'),
(443,0x00,'image/jpeg','d_monte_pneu_443.jpg','/images/products/car_tire.png'),
(444,0x00,'image/jpeg','colle_valve_tubeless_444.jpg','/images/products/car_tire.png'),
(445,0x00,'image/jpeg','rustine_tubeless_445.jpg','/images/products/car_tire.png'),
(446,0x00,'image/jpeg','mastic_pneu_446.jpg','/images/products/car_tire.png'),
(447,0x00,'image/jpeg','gonfleur_azote_447.jpg','/images/products/car_tire.png'),
(448,0x00,'image/jpeg','support_roue_secours_448.jpg','/images/products/car_tire.png'),
(449,0x00,'image/jpeg','verrouillage_roue_secours_449.jpg','/images/products/car_tire.png'),
(450,0x00,'image/jpeg','sac_transport_pneu_450.jpg','/images/products/car_tire.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


