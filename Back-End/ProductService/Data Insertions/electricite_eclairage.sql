SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 5: Électricité & Éclairage
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(201,'Batterie 60Ah Varta','Batterie 60Ah Varta â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,29,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(202,'Batterie 80Ah Bosch','Batterie 80Ah Bosch â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,53,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(203,'Câble démarrage','Câble démarrage â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,108,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(204,'Projecteur avant LED','Projecteur avant LED â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,93,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(205,'Feu arrière LED','Feu arrière LED â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,71,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(206,'Ampoule H7 Xenon','Ampoule H7 Xenon â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,36,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(207,'Ampoule H4 halogène','Ampoule H4 halogène â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,14,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(208,'Kit LED intérieur','Kit LED intérieur â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,176,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(209,'Fusible boîte','Fusible boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,193,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(210,'Relais 5 broches','Relais 5 broches â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,95,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(211,'Klaxon bi-ton','Klaxon bi-ton â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,149,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(212,'Prise OBD2','Prise OBD2 â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,146,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(213,'Câble faisceau universel','Câble faisceau universel â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,35,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(214,'Alternateur','Alternateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,14,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(215,'Régulateur de tension','Régulateur de tension â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,206,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(216,'Démarreur refait','Démarreur refait â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,63,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(217,'Câble masse batterie','Câble masse batterie â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,32,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(218,'Cosse batterie positive','Cosse batterie positive â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,140,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(219,'Cosse batterie négative','Cosse batterie négative â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,122,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(220,'Fil électrique 10m','Fil électrique 10m â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,144,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(221,'Connecteur étanche','Connecteur étanche â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,181,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(222,'Autoradio Bluetooth','Autoradio Bluetooth â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,147,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(223,'Caméra recul','Caméra recul â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,46,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(224,'Radar de recul','Radar de recul â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,165,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(225,'Capteur de pluie','Capteur de pluie â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,190,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(226,'Capteur crépusculaire','Capteur crépusculaire â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,63,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(227,'Commodo essuie-glace','Commodo essuie-glace â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,129,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(228,'Lève-vitre gauche','Lève-vitre gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,191,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(229,'Lève-vitre droit','Lève-vitre droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,67,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(230,'Moteur essuie-glace','Moteur essuie-glace â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,204,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(231,'Balai essuie-glace','Balai essuie-glace â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,16,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(232,'Buse essuie-glace','Buse essuie-glace â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,56,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(233,'Pompe lave-vitre','Pompe lave-vitre â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,80,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(234,'Réservoir lave-vitre','Réservoir lave-vitre â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,88,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(235,'Tableau de bord','Tableau de bord â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,205,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(236,'Compteur vitesse','Compteur vitesse â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,127,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(237,'Thermomètre ext','Thermomètre ext â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,61,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(238,'Compte-tours','Compte-tours â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,128,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(239,'Kit xénon HID','Kit xénon HID â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,64,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(240,'Phare antibrouillard','Phare antibrouillard â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,151,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(241,'Feu de jour LED','Feu de jour LED â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,110,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(242,'Plafonnier LED','Plafonnier LED â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,204,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(243,'Clignotant LED','Clignotant LED â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,165,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(244,'Feu de recul','Feu de recul â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,94,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(245,'Module BCM','Module BCM â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,78,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(246,'Capteur angle volant','Capteur angle volant â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,154,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(247,'Contacteur frein','Contacteur frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,182,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(248,'Interrupteur stop','Interrupteur stop â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,118,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(249,'Actionneur verrouillage','Actionneur verrouillage â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,146,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000'),
(250,'Moteur essuie-glace AR','Moteur essuie-glace AR â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,26,'{"categorie":"Électricité & Éclairage","marque":"OEM","qualite":"premium"}','Électricité & Éclairage','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(201,0x00,'image/jpeg','batterie_60ah_varta_201.jpg','https://picsum.photos/seed/201/600/600'),
(202,0x00,'image/jpeg','batterie_80ah_bosch_202.jpg','https://picsum.photos/seed/202/600/600'),
(203,0x00,'image/jpeg','c_ble_d_marrage_203.jpg','https://picsum.photos/seed/203/600/600'),
(204,0x00,'image/jpeg','projecteur_avant_led_204.jpg','https://picsum.photos/seed/204/600/600'),
(205,0x00,'image/jpeg','feu_arri_re_led_205.jpg','https://picsum.photos/seed/205/600/600'),
(206,0x00,'image/jpeg','ampoule_h7_xenon_206.jpg','https://picsum.photos/seed/206/600/600'),
(207,0x00,'image/jpeg','ampoule_h4_halog_ne_207.jpg','https://picsum.photos/seed/207/600/600'),
(208,0x00,'image/jpeg','kit_led_int_rieur_208.jpg','https://picsum.photos/seed/208/600/600'),
(209,0x00,'image/jpeg','fusible_bo_te_209.jpg','https://picsum.photos/seed/209/600/600'),
(210,0x00,'image/jpeg','relais_5_broches_210.jpg','https://picsum.photos/seed/210/600/600'),
(211,0x00,'image/jpeg','klaxon_bi_ton_211.jpg','https://picsum.photos/seed/211/600/600'),
(212,0x00,'image/jpeg','prise_obd2_212.jpg','https://picsum.photos/seed/212/600/600'),
(213,0x00,'image/jpeg','c_ble_faisceau_universel_213.jpg','https://picsum.photos/seed/213/600/600'),
(214,0x00,'image/jpeg','alternateur_214.jpg','https://picsum.photos/seed/214/600/600'),
(215,0x00,'image/jpeg','r_gulateur_de_tension_215.jpg','https://picsum.photos/seed/215/600/600'),
(216,0x00,'image/jpeg','d_marreur_refait_216.jpg','https://picsum.photos/seed/216/600/600'),
(217,0x00,'image/jpeg','c_ble_masse_batterie_217.jpg','https://picsum.photos/seed/217/600/600'),
(218,0x00,'image/jpeg','cosse_batterie_positive_218.jpg','https://picsum.photos/seed/218/600/600'),
(219,0x00,'image/jpeg','cosse_batterie_n_gative_219.jpg','https://picsum.photos/seed/219/600/600'),
(220,0x00,'image/jpeg','fil_lectrique_10m_220.jpg','https://picsum.photos/seed/220/600/600'),
(221,0x00,'image/jpeg','connecteur_tanche_221.jpg','https://picsum.photos/seed/221/600/600'),
(222,0x00,'image/jpeg','autoradio_bluetooth_222.jpg','https://picsum.photos/seed/222/600/600'),
(223,0x00,'image/jpeg','cam_ra_recul_223.jpg','https://picsum.photos/seed/223/600/600'),
(224,0x00,'image/jpeg','radar_de_recul_224.jpg','https://picsum.photos/seed/224/600/600'),
(225,0x00,'image/jpeg','capteur_de_pluie_225.jpg','https://picsum.photos/seed/225/600/600'),
(226,0x00,'image/jpeg','capteur_cr_pusculaire_226.jpg','https://picsum.photos/seed/226/600/600'),
(227,0x00,'image/jpeg','commodo_essuie_glace_227.jpg','https://picsum.photos/seed/227/600/600'),
(228,0x00,'image/jpeg','l_ve_vitre_gauche_228.jpg','https://picsum.photos/seed/228/600/600'),
(229,0x00,'image/jpeg','l_ve_vitre_droit_229.jpg','https://picsum.photos/seed/229/600/600'),
(230,0x00,'image/jpeg','moteur_essuie_glace_230.jpg','https://picsum.photos/seed/230/600/600'),
(231,0x00,'image/jpeg','balai_essuie_glace_231.jpg','https://picsum.photos/seed/231/600/600'),
(232,0x00,'image/jpeg','buse_essuie_glace_232.jpg','https://picsum.photos/seed/232/600/600'),
(233,0x00,'image/jpeg','pompe_lave_vitre_233.jpg','https://picsum.photos/seed/233/600/600'),
(234,0x00,'image/jpeg','r_servoir_lave_vitre_234.jpg','https://picsum.photos/seed/234/600/600'),
(235,0x00,'image/jpeg','tableau_de_bord_235.jpg','https://picsum.photos/seed/235/600/600'),
(236,0x00,'image/jpeg','compteur_vitesse_236.jpg','https://picsum.photos/seed/236/600/600'),
(237,0x00,'image/jpeg','thermom_tre_ext_237.jpg','https://picsum.photos/seed/237/600/600'),
(238,0x00,'image/jpeg','compte_tours_238.jpg','https://picsum.photos/seed/238/600/600'),
(239,0x00,'image/jpeg','kit_x_non_hid_239.jpg','https://picsum.photos/seed/239/600/600'),
(240,0x00,'image/jpeg','phare_antibrouillard_240.jpg','https://picsum.photos/seed/240/600/600'),
(241,0x00,'image/jpeg','feu_de_jour_led_241.jpg','https://picsum.photos/seed/241/600/600'),
(242,0x00,'image/jpeg','plafonnier_led_242.jpg','https://picsum.photos/seed/242/600/600'),
(243,0x00,'image/jpeg','clignotant_led_243.jpg','https://picsum.photos/seed/243/600/600'),
(244,0x00,'image/jpeg','feu_de_recul_244.jpg','https://picsum.photos/seed/244/600/600'),
(245,0x00,'image/jpeg','module_bcm_245.jpg','https://picsum.photos/seed/245/600/600'),
(246,0x00,'image/jpeg','capteur_angle_volant_246.jpg','https://picsum.photos/seed/246/600/600'),
(247,0x00,'image/jpeg','contacteur_frein_247.jpg','https://picsum.photos/seed/247/600/600'),
(248,0x00,'image/jpeg','interrupteur_stop_248.jpg','https://picsum.photos/seed/248/600/600'),
(249,0x00,'image/jpeg','actionneur_verrouillage_249.jpg','https://picsum.photos/seed/249/600/600'),
(250,0x00,'image/jpeg','moteur_essuie_glace_ar_250.jpg','https://picsum.photos/seed/250/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


