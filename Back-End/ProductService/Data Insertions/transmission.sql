SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 6: Transmission
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(251,'Kit d''embrayage pour Renault Clio','Pièce de rechange de haute qualité : Kit d''embrayage pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,84,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(252,'Volant moteur pour Renault Clio','Pièce de rechange de haute qualité : Volant moteur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,80,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(253,'Cardan de transmission pour Renault Clio','Pièce de rechange de haute qualité : Cardan de transmission pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,94,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(254,'Soufflet de cardan pour Renault Clio','Pièce de rechange de haute qualité : Soufflet de cardan pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,87,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(255,'Huile de boîte de vitesse pour Renault Clio','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(256,'Kit d''embrayage pour Peugeot 208','Pièce de rechange de haute qualité : Kit d''embrayage pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,73,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(257,'Volant moteur pour Peugeot 208','Pièce de rechange de haute qualité : Volant moteur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,136,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(258,'Cardan de transmission pour Peugeot 208','Pièce de rechange de haute qualité : Cardan de transmission pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,113,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(259,'Soufflet de cardan pour Peugeot 208','Pièce de rechange de haute qualité : Soufflet de cardan pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,99,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(260,'Huile de boîte de vitesse pour Peugeot 208','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,113,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(261,'Kit d''embrayage pour Volkswagen Golf','Pièce de rechange de haute qualité : Kit d''embrayage pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,10,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(262,'Volant moteur pour Volkswagen Golf','Pièce de rechange de haute qualité : Volant moteur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,94,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(263,'Cardan de transmission pour Volkswagen Golf','Pièce de rechange de haute qualité : Cardan de transmission pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,33,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(264,'Soufflet de cardan pour Volkswagen Golf','Pièce de rechange de haute qualité : Soufflet de cardan pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,86,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(265,'Huile de boîte de vitesse pour Volkswagen Golf','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(266,'Kit d''embrayage pour BMW Série 3','Pièce de rechange de haute qualité : Kit d''embrayage pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,104,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(267,'Volant moteur pour BMW Série 3','Pièce de rechange de haute qualité : Volant moteur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,206,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(268,'Cardan de transmission pour BMW Série 3','Pièce de rechange de haute qualité : Cardan de transmission pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,49,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(269,'Soufflet de cardan pour BMW Série 3','Pièce de rechange de haute qualité : Soufflet de cardan pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,97,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(270,'Huile de boîte de vitesse pour BMW Série 3','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,14,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(271,'Kit d''embrayage pour Mercedes Classe C','Pièce de rechange de haute qualité : Kit d''embrayage pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,138,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(272,'Volant moteur pour Mercedes Classe C','Pièce de rechange de haute qualité : Volant moteur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,53,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(273,'Cardan de transmission pour Mercedes Classe C','Pièce de rechange de haute qualité : Cardan de transmission pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,34,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(274,'Soufflet de cardan pour Mercedes Classe C','Pièce de rechange de haute qualité : Soufflet de cardan pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,29,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(275,'Huile de boîte de vitesse pour Mercedes Classe C','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,14,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(276,'Kit d''embrayage pour Audi A4','Pièce de rechange de haute qualité : Kit d''embrayage pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,184,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(277,'Volant moteur pour Audi A4','Pièce de rechange de haute qualité : Volant moteur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,104,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(278,'Cardan de transmission pour Audi A4','Pièce de rechange de haute qualité : Cardan de transmission pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,105,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(279,'Soufflet de cardan pour Audi A4','Pièce de rechange de haute qualité : Soufflet de cardan pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,43,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(280,'Huile de boîte de vitesse pour Audi A4','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,97,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(281,'Kit d''embrayage pour Toyota Yaris','Pièce de rechange de haute qualité : Kit d''embrayage pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,127,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(282,'Volant moteur pour Toyota Yaris','Pièce de rechange de haute qualité : Volant moteur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,167,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(283,'Cardan de transmission pour Toyota Yaris','Pièce de rechange de haute qualité : Cardan de transmission pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,45,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(284,'Soufflet de cardan pour Toyota Yaris','Pièce de rechange de haute qualité : Soufflet de cardan pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,135,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(285,'Huile de boîte de vitesse pour Toyota Yaris','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,37,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(286,'Kit d''embrayage pour Ford Fiesta','Pièce de rechange de haute qualité : Kit d''embrayage pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,185,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(287,'Volant moteur pour Ford Fiesta','Pièce de rechange de haute qualité : Volant moteur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,155,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(288,'Cardan de transmission pour Ford Fiesta','Pièce de rechange de haute qualité : Cardan de transmission pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,34,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(289,'Soufflet de cardan pour Ford Fiesta','Pièce de rechange de haute qualité : Soufflet de cardan pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,126,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(290,'Huile de boîte de vitesse pour Ford Fiesta','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,139,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(291,'Kit d''embrayage pour Citroën C3','Pièce de rechange de haute qualité : Kit d''embrayage pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,65,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(292,'Volant moteur pour Citroën C3','Pièce de rechange de haute qualité : Volant moteur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,175,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(293,'Cardan de transmission pour Citroën C3','Pièce de rechange de haute qualité : Cardan de transmission pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(294,'Soufflet de cardan pour Citroën C3','Pièce de rechange de haute qualité : Soufflet de cardan pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,61,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(295,'Huile de boîte de vitesse pour Citroën C3','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,198,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(296,'Kit d''embrayage pour Fiat 500','Pièce de rechange de haute qualité : Kit d''embrayage pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,192,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(297,'Volant moteur pour Fiat 500','Pièce de rechange de haute qualité : Volant moteur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,26,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(298,'Cardan de transmission pour Fiat 500','Pièce de rechange de haute qualité : Cardan de transmission pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,83,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(299,'Soufflet de cardan pour Fiat 500','Pièce de rechange de haute qualité : Soufflet de cardan pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,24,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(300,'Huile de boîte de vitesse pour Fiat 500','Pièce de rechange de haute qualité : Huile de boîte de vitesse pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,22,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(251,0x00,'image/jpeg','embrayage_complet_251.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=251'),
(252,0x00,'image/jpeg','disque_d_embrayage_252.jpg','https://loremflickr.com/600/600/car,flywheel?lock=252'),
(253,0x00,'image/jpeg','m_canisme_embrayage_253.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=253'),
(254,0x00,'image/jpeg','but_e_d_embrayage_254.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=254'),
(255,0x00,'image/jpeg','fourchette_embrayage_255.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=255'),
(256,0x00,'image/jpeg','cylindre_r_cepteur_embrayage_256.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=256'),
(257,0x00,'image/jpeg','cylindre_metteur_embrayage_257.jpg','https://loremflickr.com/600/600/car,flywheel?lock=257'),
(258,0x00,'image/jpeg','durite_embrayage_258.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=258'),
(259,0x00,'image/jpeg','cardan_droit_259.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=259'),
(260,0x00,'image/jpeg','cardan_gauche_260.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=260'),
(261,0x00,'image/jpeg','joint_triode_droit_261.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=261'),
(262,0x00,'image/jpeg','joint_triode_gauche_262.jpg','https://loremflickr.com/600/600/car,flywheel?lock=262'),
(263,0x00,'image/jpeg','soufflet_de_cardan_263.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=263'),
(264,0x00,'image/jpeg','arbre_de_transmission_264.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=264'),
(265,0x00,'image/jpeg','diff_rentiel_avant_265.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=265'),
(266,0x00,'image/jpeg','diff_rentiel_arri_re_266.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=266'),
(267,0x00,'image/jpeg','couronne_diff_rentiel_267.jpg','https://loremflickr.com/600/600/car,flywheel?lock=267'),
(268,0x00,'image/jpeg','bo_tier_de_transfert_4x4_268.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=268'),
(269,0x00,'image/jpeg','croisillon_de_cardan_269.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=269'),
(270,0x00,'image/jpeg','roulement_de_transmission_270.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=270'),
(271,0x00,'image/jpeg','palier_cardan_central_271.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=271'),
(272,0x00,'image/jpeg','manchon_de_cardan_272.jpg','https://loremflickr.com/600/600/car,flywheel?lock=272'),
(273,0x00,'image/jpeg','bo_te_de_vitesse_manuelle_273.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=273'),
(274,0x00,'image/jpeg','fourchette_passage_274.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=274'),
(275,0x00,'image/jpeg','bague_de_synchro_275.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=275'),
(276,0x00,'image/jpeg','arbre_primaire_bv_276.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=276'),
(277,0x00,'image/jpeg','arbre_secondaire_bv_277.jpg','https://loremflickr.com/600/600/car,flywheel?lock=277'),
(278,0x00,'image/jpeg','commande_de_bo_te_278.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=278'),
(279,0x00,'image/jpeg','c_ble_de_s_lection_279.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=279'),
(280,0x00,'image/jpeg','levier_de_vitesse_280.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=280'),
(281,0x00,'image/jpeg','pompe_bv_automatique_281.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=281'),
(282,0x00,'image/jpeg','filtre_bv_automatique_282.jpg','https://loremflickr.com/600/600/car,flywheel?lock=282'),
(283,0x00,'image/jpeg','capteur_r_gime_bv_283.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=283'),
(284,0x00,'image/jpeg','joint_bv_284.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=284'),
(285,0x00,'image/jpeg','carter_bv_285.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=285'),
(286,0x00,'image/jpeg','pignon_1_re_vitesse_286.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=286'),
(287,0x00,'image/jpeg','pignon_5_me_vitesse_287.jpg','https://loremflickr.com/600/600/car,flywheel?lock=287'),
(288,0x00,'image/jpeg','couronne_de_d_marreur_288.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=288'),
(289,0x00,'image/jpeg','plateau_de_d_marrage_289.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=289'),
(290,0x00,'image/jpeg','but_e_pr_s_lection_290.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=290'),
(291,0x00,'image/jpeg','roulement_bo_te_291.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=291'),
(292,0x00,'image/jpeg','bague_de_sortie_292.jpg','https://loremflickr.com/600/600/car,flywheel?lock=292'),
(293,0x00,'image/jpeg','soufflet_cardan_ext_293.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=293'),
(294,0x00,'image/jpeg','soufflet_cardan_int_294.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=294'),
(295,0x00,'image/jpeg','circlips_cardan_295.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=295'),
(296,0x00,'image/jpeg','_crou_cardan_296.jpg','https://loremflickr.com/600/600/car,clutch,kit?lock=296'),
(297,0x00,'image/jpeg','vis_de_carter_297.jpg','https://loremflickr.com/600/600/car,flywheel?lock=297'),
(298,0x00,'image/jpeg','joint_spi_bo_te_298.jpg','https://loremflickr.com/600/600/car,drive,shaft?lock=298'),
(299,0x00,'image/jpeg','diff_rentiel_sport_299.jpg','https://loremflickr.com/600/600/car,cv,boot?lock=299'),
(300,0x00,'image/jpeg','huile_de_bo_te_300.jpg','https://loremflickr.com/600/600/car,gearbox,oil?lock=300');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


