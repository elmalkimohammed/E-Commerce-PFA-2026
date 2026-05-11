SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 1: Filtres & Huiles
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(1,'Filtre à huile pour Renault Clio','Pièce de rechange de haute qualité : Filtre à huile pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',85,175,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(2,'Filtre à air pour Renault Clio','Pièce de rechange de haute qualité : Filtre à air pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',65,173,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(3,'Filtre d''habitacle pour Renault Clio','Pièce de rechange de haute qualité : Filtre d''habitacle pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(4,'Filtre à carburant pour Renault Clio','Pièce de rechange de haute qualité : Filtre à carburant pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',320,144,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(5,'Huile moteur 5W30 (5L) (Compatible Renault Clio)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Renault Clio). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',280,81,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(6,'Filtre à huile pour Peugeot 208','Pièce de rechange de haute qualité : Filtre à huile pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',90,78,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(7,'Filtre à air pour Peugeot 208','Pièce de rechange de haute qualité : Filtre à air pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',450,77,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(8,'Filtre d''habitacle pour Peugeot 208','Pièce de rechange de haute qualité : Filtre d''habitacle pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',200,36,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(9,'Filtre à carburant pour Peugeot 208','Pièce de rechange de haute qualité : Filtre à carburant pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',55,142,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(10,'Huile moteur 5W30 (5L) (Compatible Peugeot 208)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Peugeot 208). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',80,64,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(11,'Filtre à huile pour Volkswagen Golf','Pièce de rechange de haute qualité : Filtre à huile pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',350,47,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(12,'Filtre à air pour Volkswagen Golf','Pièce de rechange de haute qualité : Filtre à air pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',380,71,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(13,'Filtre d''habitacle pour Volkswagen Golf','Pièce de rechange de haute qualité : Filtre d''habitacle pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',45,75,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(14,'Filtre à carburant pour Volkswagen Golf','Pièce de rechange de haute qualité : Filtre à carburant pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',120,102,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(15,'Huile moteur 5W30 (5L) (Compatible Volkswagen Golf)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Volkswagen Golf). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,95,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(16,'Filtre à huile pour BMW Série 3','Pièce de rechange de haute qualité : Filtre à huile pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',650,46,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(17,'Filtre à air pour BMW Série 3','Pièce de rechange de haute qualité : Filtre à air pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',130,18,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(18,'Filtre d''habitacle pour BMW Série 3','Pièce de rechange de haute qualité : Filtre d''habitacle pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',85,120,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(19,'Filtre à carburant pour BMW Série 3','Pièce de rechange de haute qualité : Filtre à carburant pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',60,21,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(20,'Huile moteur 5W30 (5L) (Compatible BMW Série 3)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible BMW Série 3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,155,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(21,'Filtre à huile pour Mercedes Classe C','Pièce de rechange de haute qualité : Filtre à huile pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',180,145,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(22,'Filtre à air pour Mercedes Classe C','Pièce de rechange de haute qualité : Filtre à air pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,118,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(23,'Filtre d''habitacle pour Mercedes Classe C','Pièce de rechange de haute qualité : Filtre d''habitacle pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',220,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(24,'Filtre à carburant pour Mercedes Classe C','Pièce de rechange de haute qualité : Filtre à carburant pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',195,86,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(25,'Huile moteur 5W30 (5L) (Compatible Mercedes Classe C)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Mercedes Classe C). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',35,140,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(26,'Filtre à huile pour Audi A4','Pièce de rechange de haute qualité : Filtre à huile pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',70,150,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(27,'Filtre à air pour Audi A4','Pièce de rechange de haute qualité : Filtre à air pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',160,57,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(28,'Filtre d''habitacle pour Audi A4','Pièce de rechange de haute qualité : Filtre d''habitacle pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',90,150,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(29,'Filtre à carburant pour Audi A4','Pièce de rechange de haute qualité : Filtre à carburant pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',40,131,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(30,'Huile moteur 5W30 (5L) (Compatible Audi A4)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Audi A4). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',520,28,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(31,'Filtre à huile pour Toyota Yaris','Pièce de rechange de haute qualité : Filtre à huile pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',140,167,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(32,'Filtre à air pour Toyota Yaris','Pièce de rechange de haute qualité : Filtre à air pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',180,144,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(33,'Filtre d''habitacle pour Toyota Yaris','Pièce de rechange de haute qualité : Filtre d''habitacle pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',210,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(34,'Filtre à carburant pour Toyota Yaris','Pièce de rechange de haute qualité : Filtre à carburant pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',480,132,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(35,'Huile moteur 5W30 (5L) (Compatible Toyota Yaris)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Toyota Yaris). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',80,47,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(36,'Filtre à huile pour Ford Fiesta','Pièce de rechange de haute qualité : Filtre à huile pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',150,208,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(37,'Filtre à air pour Ford Fiesta','Pièce de rechange de haute qualité : Filtre à air pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',90,202,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(38,'Filtre d''habitacle pour Ford Fiesta','Pièce de rechange de haute qualité : Filtre d''habitacle pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',200,132,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(39,'Filtre à carburant pour Ford Fiesta','Pièce de rechange de haute qualité : Filtre à carburant pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',300,29,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(40,'Huile moteur 5W30 (5L) (Compatible Ford Fiesta)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Ford Fiesta). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',160,175,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(41,'Filtre à huile pour Citroën C3','Pièce de rechange de haute qualité : Filtre à huile pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',95,19,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(42,'Filtre à air pour Citroën C3','Pièce de rechange de haute qualité : Filtre à air pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',490,173,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(43,'Filtre d''habitacle pour Citroën C3','Pièce de rechange de haute qualité : Filtre d''habitacle pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,38,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(44,'Filtre à carburant pour Citroën C3','Pièce de rechange de haute qualité : Filtre à carburant pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',230,156,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(45,'Huile moteur 5W30 (5L) (Compatible Citroën C3)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Citroën C3). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',510,136,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(46,'Filtre à huile pour Fiat 500','Pièce de rechange de haute qualité : Filtre à huile pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',25,209,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(47,'Filtre à air pour Fiat 500','Pièce de rechange de haute qualité : Filtre à air pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',250,102,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(48,'Filtre d''habitacle pour Fiat 500','Pièce de rechange de haute qualité : Filtre d''habitacle pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',290,77,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(49,'Filtre à carburant pour Fiat 500','Pièce de rechange de haute qualité : Filtre à carburant pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',70,106,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(50,'Huile moteur 5W30 (5L) (Compatible Fiat 500)','Pièce de rechange de haute qualité : Huile moteur 5W30 (5L) (Compatible Fiat 500). Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,98,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(1,0x00,'image/jpeg','filtre_huile_bosch_1.jpg','/images/products/car_oil_filter.png'),
(2,0x00,'image/jpeg','filtre_air_mann_2.jpg','/images/products/car_oil_filter.png'),
(3,0x00,'image/jpeg','filtre_carburant_purflux_3.jpg','/images/products/car_oil_filter.png'),
(4,0x00,'image/jpeg','huile_moteur_castrol_5w40_4.jpg','/images/products/car_oil_filter.png'),
(5,0x00,'image/jpeg','huile_motul_10w40_4l_5.jpg','/images/products/car_oil_filter.png'),
(6,0x00,'image/jpeg','filtre_huile_mahle_6.jpg','/images/products/car_oil_filter.png'),
(7,0x00,'image/jpeg','kit_vidange_complet_7.jpg','/images/products/car_oil_filter.png'),
(8,0x00,'image/jpeg','huile_de_bo_te_de_vitesses_8.jpg','/images/products/car_oil_filter.png'),
(9,0x00,'image/jpeg','filtre_d_habitacle_9.jpg','/images/products/car_oil_filter.png'),
(10,0x00,'image/jpeg','huile_de_frein_dot4_10.jpg','/images/products/car_oil_filter.png'),
(11,0x00,'image/jpeg','filtre_air_sport_k_n_11.jpg','/images/products/car_oil_filter.png'),
(12,0x00,'image/jpeg','huile_mobil_1_5w30_12.jpg','/images/products/car_oil_filter.png'),
(13,0x00,'image/jpeg','filtre_huile_champion_13.jpg','/images/products/car_oil_filter.png'),
(14,0x00,'image/jpeg','additif_huile_moteur_14.jpg','/images/products/car_oil_filter.png'),
(15,0x00,'image/jpeg','huile_de_direction_assist_e_15.jpg','/images/products/car_oil_filter.png'),
(16,0x00,'image/jpeg','kit_entretien_complet_16.jpg','/images/products/car_oil_filter.png'),
(17,0x00,'image/jpeg','filtre_huile_longue_dur_e_17.jpg','/images/products/car_oil_filter.png'),
(18,0x00,'image/jpeg','huile_2_temps_18.jpg','/images/products/car_oil_filter.png'),
(19,0x00,'image/jpeg','graisse_multifonction_19.jpg','/images/products/car_oil_filter.png'),
(20,0x00,'image/jpeg','filtre_diesel_delphi_20.jpg','/images/products/car_oil_filter.png'),
(21,0x00,'image/jpeg','huile_bo_te_auto_atf_21.jpg','/images/products/car_oil_filter.png'),
(22,0x00,'image/jpeg','nettoyant_injecteurs_diesel_22.jpg','/images/products/car_oil_filter.png'),
(23,0x00,'image/jpeg','filtre_air_conique_universel_23.jpg','/images/products/car_oil_filter.png'),
(24,0x00,'image/jpeg','huile_atf_pour_cvt_24.jpg','/images/products/car_oil_filter.png'),
(25,0x00,'image/jpeg','jauge_huile_universelle_25.jpg','/images/products/car_oil_filter.png'),
(26,0x00,'image/jpeg','filtre_carburant_essence_26.jpg','/images/products/car_oil_filter.png'),
(27,0x00,'image/jpeg','huile_de_pont_arri_re_27.jpg','/images/products/car_oil_filter.png'),
(28,0x00,'image/jpeg','spray_nettoyant_filtre_28.jpg','/images/products/car_oil_filter.png'),
(29,0x00,'image/jpeg','filtre_huile_fram_29.jpg','/images/products/car_oil_filter.png'),
(30,0x00,'image/jpeg','pack_huile_filtre_bmw_30.jpg','/images/products/car_oil_filter.png'),
(31,0x00,'image/jpeg','huile_pour_compresseur_clim_31.jpg','/images/products/car_oil_filter.png'),
(32,0x00,'image/jpeg','filtre_de_reniflard_32.jpg','/images/products/car_oil_filter.png'),
(33,0x00,'image/jpeg','huile_total_quartz_7000_33.jpg','/images/products/car_oil_filter.png'),
(34,0x00,'image/jpeg','kit_filtre_air_huile_audi_34.jpg','/images/products/car_oil_filter.png'),
(35,0x00,'image/jpeg','nettoyant_carburant_essence_35.jpg','/images/products/car_oil_filter.png'),
(36,0x00,'image/jpeg','filtre_hydraulique_36.jpg','/images/products/car_oil_filter.png'),
(37,0x00,'image/jpeg','huile_de_refroidissement_37.jpg','/images/products/car_oil_filter.png'),
(38,0x00,'image/jpeg','filtre_s_parateur_eau_diesel_38.jpg','/images/products/car_oil_filter.png'),
(39,0x00,'image/jpeg','huile_elf_sporti_7_39.jpg','/images/products/car_oil_filter.png'),
(40,0x00,'image/jpeg','filtre_huile_magn_tique_40.jpg','/images/products/car_oil_filter.png'),
(41,0x00,'image/jpeg','additif_conomie_carburant_41.jpg','/images/products/car_oil_filter.png'),
(42,0x00,'image/jpeg','kit_r_vision_toyota_42.jpg','/images/products/car_oil_filter.png'),
(43,0x00,'image/jpeg','filtre_huile_bosch_district_43.jpg','/images/products/car_oil_filter.png'),
(44,0x00,'image/jpeg','huile_75w85_bo_te_dsg_44.jpg','/images/products/car_oil_filter.png'),
(45,0x00,'image/jpeg','pack_entretien_renault_45.jpg','/images/products/car_oil_filter.png'),
(46,0x00,'image/jpeg','bidon_huile_vide_5l_46.jpg','/images/products/car_oil_filter.png'),
(47,0x00,'image/jpeg','filtre_huile_racing_47.jpg','/images/products/car_oil_filter.png'),
(48,0x00,'image/jpeg','huile_de_transmission_awd_48.jpg','/images/products/car_oil_filter.png'),
(49,0x00,'image/jpeg','nettoyant_moteur_49.jpg','/images/products/car_oil_filter.png'),
(50,0x00,'image/jpeg','huile_shell_helix_ultra_50.jpg','/images/products/car_oil_filter.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


