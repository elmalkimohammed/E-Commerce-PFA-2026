SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 6: Transmission
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(251,'Embrayage complet','Embrayage complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,84,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(252,'Disque d''embrayage','Disque d''embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,80,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(253,'Mécanisme embrayage','Mécanisme embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,94,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(254,'Butée d''embrayage','Butée d''embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,87,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(255,'Fourchette embrayage','Fourchette embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(256,'Cylindre récepteur embrayage','Cylindre récepteur embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,73,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(257,'Cylindre émetteur embrayage','Cylindre émetteur embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,136,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(258,'Durite embrayage','Durite embrayage â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,113,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(259,'Cardan droit','Cardan droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,99,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(260,'Cardan gauche','Cardan gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,113,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(261,'Joint triode droit','Joint triode droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,10,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(262,'Joint triode gauche','Joint triode gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,94,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(263,'Soufflet de cardan','Soufflet de cardan â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,33,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(264,'Arbre de transmission','Arbre de transmission â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,86,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(265,'Différentiel avant','Différentiel avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(266,'Différentiel arrière','Différentiel arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,104,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(267,'Couronne différentiel','Couronne différentiel â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,206,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(268,'Boîtier de transfert 4x4','Boîtier de transfert 4x4 â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,49,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(269,'Croisillon de cardan','Croisillon de cardan â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,97,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(270,'Roulement de transmission','Roulement de transmission â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,14,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(271,'Palier cardan central','Palier cardan central â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,138,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(272,'Manchon de cardan','Manchon de cardan â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,53,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(273,'Boîte de vitesse manuelle','Boîte de vitesse manuelle â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,34,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(274,'Fourchette passage','Fourchette passage â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,29,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(275,'Bague de synchro','Bague de synchro â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,14,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(276,'Arbre primaire BV','Arbre primaire BV â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,184,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(277,'Arbre secondaire BV','Arbre secondaire BV â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,104,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(278,'Commande de boîte','Commande de boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,105,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(279,'Câble de sélection','Câble de sélection â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,43,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(280,'Levier de vitesse','Levier de vitesse â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,97,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(281,'Pompe BV automatique','Pompe BV automatique â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,127,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(282,'Filtre BV automatique','Filtre BV automatique â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,167,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(283,'Capteur régime BV','Capteur régime BV â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,45,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(284,'Joint BV','Joint BV â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,135,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(285,'Carter BV','Carter BV â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,37,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(286,'Pignon 1ère vitesse','Pignon 1ère vitesse â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,185,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(287,'Pignon 5ème vitesse','Pignon 5ème vitesse â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,155,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(288,'Couronne de démarreur','Couronne de démarreur â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,34,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(289,'Plateau de démarrage','Plateau de démarrage â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,126,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(290,'Butée pré-sélection','Butée pré-sélection â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,139,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(291,'Roulement boîte','Roulement boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,65,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(292,'Bague de sortie','Bague de sortie â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,175,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(293,'Soufflet cardan ext','Soufflet cardan ext â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,58,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(294,'Soufflet cardan int','Soufflet cardan int â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,61,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(295,'Circlips cardan','Circlips cardan â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,198,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(296,'Écrou cardan','Écrou cardan â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,192,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(297,'Vis de carter','Vis de carter â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,26,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(298,'Joint spi boîte','Joint spi boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,83,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(299,'Différentiel sport','Différentiel sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,24,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000'),
(300,'Huile de boîte','Huile de boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,22,'{"categorie":"Transmission","marque":"OEM","qualite":"premium"}','Transmission','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(251,0x00,'image/jpeg','embrayage_complet_251.jpg','https://picsum.photos/seed/251/600/600'),
(252,0x00,'image/jpeg','disque_d_embrayage_252.jpg','https://picsum.photos/seed/252/600/600'),
(253,0x00,'image/jpeg','m_canisme_embrayage_253.jpg','https://picsum.photos/seed/253/600/600'),
(254,0x00,'image/jpeg','but_e_d_embrayage_254.jpg','https://picsum.photos/seed/254/600/600'),
(255,0x00,'image/jpeg','fourchette_embrayage_255.jpg','https://picsum.photos/seed/255/600/600'),
(256,0x00,'image/jpeg','cylindre_r_cepteur_embrayage_256.jpg','https://picsum.photos/seed/256/600/600'),
(257,0x00,'image/jpeg','cylindre_metteur_embrayage_257.jpg','https://picsum.photos/seed/257/600/600'),
(258,0x00,'image/jpeg','durite_embrayage_258.jpg','https://picsum.photos/seed/258/600/600'),
(259,0x00,'image/jpeg','cardan_droit_259.jpg','https://picsum.photos/seed/259/600/600'),
(260,0x00,'image/jpeg','cardan_gauche_260.jpg','https://picsum.photos/seed/260/600/600'),
(261,0x00,'image/jpeg','joint_triode_droit_261.jpg','https://picsum.photos/seed/261/600/600'),
(262,0x00,'image/jpeg','joint_triode_gauche_262.jpg','https://picsum.photos/seed/262/600/600'),
(263,0x00,'image/jpeg','soufflet_de_cardan_263.jpg','https://picsum.photos/seed/263/600/600'),
(264,0x00,'image/jpeg','arbre_de_transmission_264.jpg','https://picsum.photos/seed/264/600/600'),
(265,0x00,'image/jpeg','diff_rentiel_avant_265.jpg','https://picsum.photos/seed/265/600/600'),
(266,0x00,'image/jpeg','diff_rentiel_arri_re_266.jpg','https://picsum.photos/seed/266/600/600'),
(267,0x00,'image/jpeg','couronne_diff_rentiel_267.jpg','https://picsum.photos/seed/267/600/600'),
(268,0x00,'image/jpeg','bo_tier_de_transfert_4x4_268.jpg','https://picsum.photos/seed/268/600/600'),
(269,0x00,'image/jpeg','croisillon_de_cardan_269.jpg','https://picsum.photos/seed/269/600/600'),
(270,0x00,'image/jpeg','roulement_de_transmission_270.jpg','https://picsum.photos/seed/270/600/600'),
(271,0x00,'image/jpeg','palier_cardan_central_271.jpg','https://picsum.photos/seed/271/600/600'),
(272,0x00,'image/jpeg','manchon_de_cardan_272.jpg','https://picsum.photos/seed/272/600/600'),
(273,0x00,'image/jpeg','bo_te_de_vitesse_manuelle_273.jpg','https://picsum.photos/seed/273/600/600'),
(274,0x00,'image/jpeg','fourchette_passage_274.jpg','https://picsum.photos/seed/274/600/600'),
(275,0x00,'image/jpeg','bague_de_synchro_275.jpg','https://picsum.photos/seed/275/600/600'),
(276,0x00,'image/jpeg','arbre_primaire_bv_276.jpg','https://picsum.photos/seed/276/600/600'),
(277,0x00,'image/jpeg','arbre_secondaire_bv_277.jpg','https://picsum.photos/seed/277/600/600'),
(278,0x00,'image/jpeg','commande_de_bo_te_278.jpg','https://picsum.photos/seed/278/600/600'),
(279,0x00,'image/jpeg','c_ble_de_s_lection_279.jpg','https://picsum.photos/seed/279/600/600'),
(280,0x00,'image/jpeg','levier_de_vitesse_280.jpg','https://picsum.photos/seed/280/600/600'),
(281,0x00,'image/jpeg','pompe_bv_automatique_281.jpg','https://picsum.photos/seed/281/600/600'),
(282,0x00,'image/jpeg','filtre_bv_automatique_282.jpg','https://picsum.photos/seed/282/600/600'),
(283,0x00,'image/jpeg','capteur_r_gime_bv_283.jpg','https://picsum.photos/seed/283/600/600'),
(284,0x00,'image/jpeg','joint_bv_284.jpg','https://picsum.photos/seed/284/600/600'),
(285,0x00,'image/jpeg','carter_bv_285.jpg','https://picsum.photos/seed/285/600/600'),
(286,0x00,'image/jpeg','pignon_1_re_vitesse_286.jpg','https://picsum.photos/seed/286/600/600'),
(287,0x00,'image/jpeg','pignon_5_me_vitesse_287.jpg','https://picsum.photos/seed/287/600/600'),
(288,0x00,'image/jpeg','couronne_de_d_marreur_288.jpg','https://picsum.photos/seed/288/600/600'),
(289,0x00,'image/jpeg','plateau_de_d_marrage_289.jpg','https://picsum.photos/seed/289/600/600'),
(290,0x00,'image/jpeg','but_e_pr_s_lection_290.jpg','https://picsum.photos/seed/290/600/600'),
(291,0x00,'image/jpeg','roulement_bo_te_291.jpg','https://picsum.photos/seed/291/600/600'),
(292,0x00,'image/jpeg','bague_de_sortie_292.jpg','https://picsum.photos/seed/292/600/600'),
(293,0x00,'image/jpeg','soufflet_cardan_ext_293.jpg','https://picsum.photos/seed/293/600/600'),
(294,0x00,'image/jpeg','soufflet_cardan_int_294.jpg','https://picsum.photos/seed/294/600/600'),
(295,0x00,'image/jpeg','circlips_cardan_295.jpg','https://picsum.photos/seed/295/600/600'),
(296,0x00,'image/jpeg','_crou_cardan_296.jpg','https://picsum.photos/seed/296/600/600'),
(297,0x00,'image/jpeg','vis_de_carter_297.jpg','https://picsum.photos/seed/297/600/600'),
(298,0x00,'image/jpeg','joint_spi_bo_te_298.jpg','https://picsum.photos/seed/298/600/600'),
(299,0x00,'image/jpeg','diff_rentiel_sport_299.jpg','https://picsum.photos/seed/299/600/600'),
(300,0x00,'image/jpeg','huile_de_bo_te_300.jpg','https://picsum.photos/seed/300/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


