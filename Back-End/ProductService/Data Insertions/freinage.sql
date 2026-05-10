SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 2: Freinage
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(51,'Plaquettes Brembo avant','Plaquettes Brembo avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',280,68,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(52,'Plaquettes Ferodo arrière','Plaquettes Ferodo arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',210,39,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(53,'Disque frein avant ventilé','Disque frein avant ventilé â€” pièce automobile de qualité OEM pour véhicules toutes marques',350,142,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(54,'Disque plein arrière','Disque plein arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',290,193,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(55,'Étrier de frein AV gauche','Étrier de frein AV gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',620,200,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(56,'Kit freinage complet avant','Kit freinage complet avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,115,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(57,'Liquide de frein DOT5.1','Liquide de frein DOT5.1 â€” pièce automobile de qualité OEM pour véhicules toutes marques',120,40,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(58,'Plaquettes EBC Greenstuff','Plaquettes EBC Greenstuff â€” pièce automobile de qualité OEM pour véhicules toutes marques',320,114,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(59,'Câble frein à main gauche','Câble frein à main gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,120,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(60,'Câble frein à main droit','Câble frein à main droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,111,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(61,'Mâchoires de frein arrière','Mâchoires de frein arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',180,103,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(62,'Tambour de frein','Tambour de frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',230,143,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(63,'Cylindre récepteur frein','Cylindre récepteur frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,183,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(64,'Maître-cylindre frein','Maître-cylindre frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',480,116,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(65,'Tuyau flexible frein AV','Tuyau flexible frein AV â€” pièce automobile de qualité OEM pour véhicules toutes marques',85,48,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(66,'Tuyau flexible frein AR','Tuyau flexible frein AR â€” pièce automobile de qualité OEM pour véhicules toutes marques',85,204,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(67,'Kit réparation étrier','Kit réparation étrier â€” pièce automobile de qualité OEM pour véhicules toutes marques',65,71,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(68,'Disques percés sport','Disques percés sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',520,164,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(69,'Plaquettes Pagid sport','Plaquettes Pagid sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',480,103,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(70,'Servo frein','Servo frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',780,59,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(71,'Purge frein kit','Purge frein kit â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,10,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(72,'Durites aviation freins','Durites aviation freins â€” pièce automobile de qualité OEM pour véhicules toutes marques',280,197,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(73,'Capteur usure plaquettes','Capteur usure plaquettes â€” pièce automobile de qualité OEM pour véhicules toutes marques',45,75,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(74,'Disque frein rainuré','Disque frein rainuré â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,32,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(75,'Anti-bruit plaquettes','Anti-bruit plaquettes â€” pièce automobile de qualité OEM pour véhicules toutes marques',35,18,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(76,'Étrier Brembo 4 pistons','Étrier Brembo 4 pistons â€” pièce automobile de qualité OEM pour véhicules toutes marques',2800,204,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(77,'Kit frein arrière complet','Kit frein arrière complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',480,134,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(78,'Frein à main électrique','Frein à main électrique â€” pièce automobile de qualité OEM pour véhicules toutes marques',950,156,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(79,'Plaquettes Textar arrière','Plaquettes Textar arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',190,60,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(80,'Disque 312mm avant','Disque 312mm avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',380,34,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(81,'Visserie étrier','Visserie étrier â€” pièce automobile de qualité OEM pour véhicules toutes marques',45,158,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(82,'Bidon liquide frein 1L','Bidon liquide frein 1L â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,44,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(83,'Disque 266mm arrière','Disque 266mm arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',250,39,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(84,'Frein à tambour kit','Frein à tambour kit â€” pièce automobile de qualité OEM pour véhicules toutes marques',220,158,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(85,'Capteur ABS avant','Capteur ABS avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',180,79,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(86,'Capteur ABS arrière','Capteur ABS arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',170,202,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(87,'Disque frein Zimmermann','Disque frein Zimmermann â€” pièce automobile de qualité OEM pour véhicules toutes marques',400,25,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(88,'Plaquettes TRW avant','Plaquettes TRW avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',195,29,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(89,'Bocal liquide frein','Bocal liquide frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',85,102,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(90,'Pédale de frein renforcée','Pédale de frein renforcée â€” pièce automobile de qualité OEM pour véhicules toutes marques',120,63,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(91,'Disques Brembo percés avant','Disques Brembo percés avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',890,130,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(92,'Plaquettes carbone céramique','Plaquettes carbone céramique â€” pièce automobile de qualité OEM pour véhicules toutes marques',650,56,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(93,'Kit réparation frein main','Kit réparation frein main â€” pièce automobile de qualité OEM pour véhicules toutes marques',130,97,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(94,'Bouchon bocal frein','Bouchon bocal frein â€” pièce automobile de qualité OEM pour véhicules toutes marques',15,141,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(95,'Ressort de rappel mâchoire','Ressort de rappel mâchoire â€” pièce automobile de qualité OEM pour véhicules toutes marques',25,107,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(96,'Vis de purge étrier','Vis de purge étrier â€” pièce automobile de qualité OEM pour véhicules toutes marques',12,168,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(97,'Plaquettes ATE avant','Plaquettes ATE avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',230,18,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(98,'Frein parking câble','Frein parking câble â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,57,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(99,'Disque fonte grise','Disque fonte grise â€” pièce automobile de qualité OEM pour véhicules toutes marques',280,149,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000'),
(100,'Purgeur frein automatique','Purgeur frein automatique â€” pièce automobile de qualité OEM pour véhicules toutes marques',550,141,'{"categorie":"Freinage","marque":"OEM","qualite":"premium"}','Freinage','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(51,0x00,'image/jpeg','plaquettes_brembo_avant_51.jpg','https://picsum.photos/seed/51/600/600'),
(52,0x00,'image/jpeg','plaquettes_ferodo_arri_re_52.jpg','https://picsum.photos/seed/52/600/600'),
(53,0x00,'image/jpeg','disque_frein_avant_ventil__53.jpg','https://picsum.photos/seed/53/600/600'),
(54,0x00,'image/jpeg','disque_plein_arri_re_54.jpg','https://picsum.photos/seed/54/600/600'),
(55,0x00,'image/jpeg','_trier_de_frein_av_gauche_55.jpg','https://picsum.photos/seed/55/600/600'),
(56,0x00,'image/jpeg','kit_freinage_complet_avant_56.jpg','https://picsum.photos/seed/56/600/600'),
(57,0x00,'image/jpeg','liquide_de_frein_dot5_1_57.jpg','https://picsum.photos/seed/57/600/600'),
(58,0x00,'image/jpeg','plaquettes_ebc_greenstuff_58.jpg','https://picsum.photos/seed/58/600/600'),
(59,0x00,'image/jpeg','c_ble_frein_main_gauche_59.jpg','https://picsum.photos/seed/59/600/600'),
(60,0x00,'image/jpeg','c_ble_frein_main_droit_60.jpg','https://picsum.photos/seed/60/600/600'),
(61,0x00,'image/jpeg','m_choires_de_frein_arri_re_61.jpg','https://picsum.photos/seed/61/600/600'),
(62,0x00,'image/jpeg','tambour_de_frein_62.jpg','https://picsum.photos/seed/62/600/600'),
(63,0x00,'image/jpeg','cylindre_r_cepteur_frein_63.jpg','https://picsum.photos/seed/63/600/600'),
(64,0x00,'image/jpeg','ma_tre_cylindre_frein_64.jpg','https://picsum.photos/seed/64/600/600'),
(65,0x00,'image/jpeg','tuyau_flexible_frein_av_65.jpg','https://picsum.photos/seed/65/600/600'),
(66,0x00,'image/jpeg','tuyau_flexible_frein_ar_66.jpg','https://picsum.photos/seed/66/600/600'),
(67,0x00,'image/jpeg','kit_r_paration_trier_67.jpg','https://picsum.photos/seed/67/600/600'),
(68,0x00,'image/jpeg','disques_perc_s_sport_68.jpg','https://picsum.photos/seed/68/600/600'),
(69,0x00,'image/jpeg','plaquettes_pagid_sport_69.jpg','https://picsum.photos/seed/69/600/600'),
(70,0x00,'image/jpeg','servo_frein_70.jpg','https://picsum.photos/seed/70/600/600'),
(71,0x00,'image/jpeg','purge_frein_kit_71.jpg','https://picsum.photos/seed/71/600/600'),
(72,0x00,'image/jpeg','durites_aviation_freins_72.jpg','https://picsum.photos/seed/72/600/600'),
(73,0x00,'image/jpeg','capteur_usure_plaquettes_73.jpg','https://picsum.photos/seed/73/600/600'),
(74,0x00,'image/jpeg','disque_frein_rainur__74.jpg','https://picsum.photos/seed/74/600/600'),
(75,0x00,'image/jpeg','anti_bruit_plaquettes_75.jpg','https://picsum.photos/seed/75/600/600'),
(76,0x00,'image/jpeg','_trier_brembo_4_pistons_76.jpg','https://picsum.photos/seed/76/600/600'),
(77,0x00,'image/jpeg','kit_frein_arri_re_complet_77.jpg','https://picsum.photos/seed/77/600/600'),
(78,0x00,'image/jpeg','frein_main_lectrique_78.jpg','https://picsum.photos/seed/78/600/600'),
(79,0x00,'image/jpeg','plaquettes_textar_arri_re_79.jpg','https://picsum.photos/seed/79/600/600'),
(80,0x00,'image/jpeg','disque_312mm_avant_80.jpg','https://picsum.photos/seed/80/600/600'),
(81,0x00,'image/jpeg','visserie_trier_81.jpg','https://picsum.photos/seed/81/600/600'),
(82,0x00,'image/jpeg','bidon_liquide_frein_1l_82.jpg','https://picsum.photos/seed/82/600/600'),
(83,0x00,'image/jpeg','disque_266mm_arri_re_83.jpg','https://picsum.photos/seed/83/600/600'),
(84,0x00,'image/jpeg','frein_tambour_kit_84.jpg','https://picsum.photos/seed/84/600/600'),
(85,0x00,'image/jpeg','capteur_abs_avant_85.jpg','https://picsum.photos/seed/85/600/600'),
(86,0x00,'image/jpeg','capteur_abs_arri_re_86.jpg','https://picsum.photos/seed/86/600/600'),
(87,0x00,'image/jpeg','disque_frein_zimmermann_87.jpg','https://picsum.photos/seed/87/600/600'),
(88,0x00,'image/jpeg','plaquettes_trw_avant_88.jpg','https://picsum.photos/seed/88/600/600'),
(89,0x00,'image/jpeg','bocal_liquide_frein_89.jpg','https://picsum.photos/seed/89/600/600'),
(90,0x00,'image/jpeg','p_dale_de_frein_renforc_e_90.jpg','https://picsum.photos/seed/90/600/600'),
(91,0x00,'image/jpeg','disques_brembo_perc_s_avant_91.jpg','https://picsum.photos/seed/91/600/600'),
(92,0x00,'image/jpeg','plaquettes_carbone_c_ramique_92.jpg','https://picsum.photos/seed/92/600/600'),
(93,0x00,'image/jpeg','kit_r_paration_frein_main_93.jpg','https://picsum.photos/seed/93/600/600'),
(94,0x00,'image/jpeg','bouchon_bocal_frein_94.jpg','https://picsum.photos/seed/94/600/600'),
(95,0x00,'image/jpeg','ressort_de_rappel_m_choire_95.jpg','https://picsum.photos/seed/95/600/600'),
(96,0x00,'image/jpeg','vis_de_purge_trier_96.jpg','https://picsum.photos/seed/96/600/600'),
(97,0x00,'image/jpeg','plaquettes_ate_avant_97.jpg','https://picsum.photos/seed/97/600/600'),
(98,0x00,'image/jpeg','frein_parking_c_ble_98.jpg','https://picsum.photos/seed/98/600/600'),
(99,0x00,'image/jpeg','disque_fonte_grise_99.jpg','https://picsum.photos/seed/99/600/600'),
(100,0x00,'image/jpeg','purgeur_frein_automatique_100.jpg','https://picsum.photos/seed/100/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


