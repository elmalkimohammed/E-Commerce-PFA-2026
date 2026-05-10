SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 1: Filtres & Huiles
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(1,'Filtre à huile Bosch','Filtre à huile Bosch â€” pièce automobile de qualité OEM pour véhicules toutes marques',85,175,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(2,'Filtre à air Mann','Filtre à air Mann â€” pièce automobile de qualité OEM pour véhicules toutes marques',65,173,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(3,'Filtre à carburant Purflux','Filtre à carburant Purflux â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(4,'Huile moteur Castrol 5W40','Huile moteur Castrol 5W40 â€” pièce automobile de qualité OEM pour véhicules toutes marques',320,144,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(5,'Huile Motul 10W40 4L','Huile Motul 10W40 4L â€” pièce automobile de qualité OEM pour véhicules toutes marques',280,81,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(6,'Filtre à huile Mahle','Filtre à huile Mahle â€” pièce automobile de qualité OEM pour véhicules toutes marques',90,78,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(7,'Kit vidange complet','Kit vidange complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',450,77,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(8,'Huile de boîte de vitesses','Huile de boîte de vitesses â€” pièce automobile de qualité OEM pour véhicules toutes marques',200,36,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(9,'Filtre d''habitacle','Filtre d''habitacle â€” pièce automobile de qualité OEM pour véhicules toutes marques',55,142,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(10,'Huile de frein DOT4','Huile de frein DOT4 â€” pièce automobile de qualité OEM pour véhicules toutes marques',80,64,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(11,'Filtre à air sport K&N','Filtre à air sport K&N â€” pièce automobile de qualité OEM pour véhicules toutes marques',350,47,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(12,'Huile Mobil 1 5W30','Huile Mobil 1 5W30 â€” pièce automobile de qualité OEM pour véhicules toutes marques',380,71,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(13,'Filtre à huile champion','Filtre à huile champion â€” pièce automobile de qualité OEM pour véhicules toutes marques',45,75,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(14,'Additif huile moteur','Additif huile moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',120,102,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(15,'Huile de direction assistée','Huile de direction assistée â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,95,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(16,'Kit entretien complet','Kit entretien complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',650,46,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(17,'Filtre huile longue durée','Filtre huile longue durée â€” pièce automobile de qualité OEM pour véhicules toutes marques',130,18,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(18,'Huile 2 temps','Huile 2 temps â€” pièce automobile de qualité OEM pour véhicules toutes marques',85,120,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(19,'Graisse multifonction','Graisse multifonction â€” pièce automobile de qualité OEM pour véhicules toutes marques',60,21,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(20,'Filtre diesel Delphi','Filtre diesel Delphi â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,155,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(21,'Huile boîte auto ATF','Huile boîte auto ATF â€” pièce automobile de qualité OEM pour véhicules toutes marques',180,145,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(22,'Nettoyant injecteurs diesel','Nettoyant injecteurs diesel â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,118,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(23,'Filtre air conique universel','Filtre air conique universel â€” pièce automobile de qualité OEM pour véhicules toutes marques',220,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(24,'Huile atf pour CVT','Huile atf pour CVT â€” pièce automobile de qualité OEM pour véhicules toutes marques',195,86,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(25,'Jauge huile universelle','Jauge huile universelle â€” pièce automobile de qualité OEM pour véhicules toutes marques',35,140,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(26,'Filtre carburant essence','Filtre carburant essence â€” pièce automobile de qualité OEM pour véhicules toutes marques',70,150,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(27,'Huile de pont arrière','Huile de pont arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',160,57,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(28,'Spray nettoyant filtre','Spray nettoyant filtre â€” pièce automobile de qualité OEM pour véhicules toutes marques',90,150,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(29,'Filtre à huile Fram','Filtre à huile Fram â€” pièce automobile de qualité OEM pour véhicules toutes marques',40,131,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(30,'Pack huile + filtre BMW','Pack huile + filtre BMW â€” pièce automobile de qualité OEM pour véhicules toutes marques',520,28,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(31,'Huile pour compresseur clim','Huile pour compresseur clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',140,167,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(32,'Filtre de reniflard','Filtre de reniflard â€” pièce automobile de qualité OEM pour véhicules toutes marques',180,144,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(33,'Huile Total Quartz 7000','Huile Total Quartz 7000 â€” pièce automobile de qualité OEM pour véhicules toutes marques',210,203,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(34,'Kit filtre air + huile Audi','Kit filtre air + huile Audi â€” pièce automobile de qualité OEM pour véhicules toutes marques',480,132,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(35,'Nettoyant carburant essence','Nettoyant carburant essence â€” pièce automobile de qualité OEM pour véhicules toutes marques',80,47,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(36,'Filtre hydraulique','Filtre hydraulique â€” pièce automobile de qualité OEM pour véhicules toutes marques',150,208,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(37,'Huile de refroidissement','Huile de refroidissement â€” pièce automobile de qualité OEM pour véhicules toutes marques',90,202,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(38,'Filtre séparateur eau diesel','Filtre séparateur eau diesel â€” pièce automobile de qualité OEM pour véhicules toutes marques',200,132,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(39,'Huile Elf Sporti 7','Huile Elf Sporti 7 â€” pièce automobile de qualité OEM pour véhicules toutes marques',300,29,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(40,'Filtre à huile magnétique','Filtre à huile magnétique â€” pièce automobile de qualité OEM pour véhicules toutes marques',160,175,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(41,'Additif économie carburant','Additif économie carburant â€” pièce automobile de qualité OEM pour véhicules toutes marques',95,19,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(42,'Kit révision Toyota','Kit révision Toyota â€” pièce automobile de qualité OEM pour véhicules toutes marques',490,173,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(43,'Filtre huile Bosch District','Filtre huile Bosch District â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,38,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(44,'Huile 75W85 boîte DSG','Huile 75W85 boîte DSG â€” pièce automobile de qualité OEM pour véhicules toutes marques',230,156,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(45,'Pack entretien Renault','Pack entretien Renault â€” pièce automobile de qualité OEM pour véhicules toutes marques',510,136,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(46,'Bidon huile vide 5L','Bidon huile vide 5L â€” pièce automobile de qualité OEM pour véhicules toutes marques',25,209,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(47,'Filtre à huile racing','Filtre à huile racing â€” pièce automobile de qualité OEM pour véhicules toutes marques',250,102,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(48,'Huile de transmission AWD','Huile de transmission AWD â€” pièce automobile de qualité OEM pour véhicules toutes marques',290,77,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(49,'Nettoyant moteur','Nettoyant moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',70,106,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000'),
(50,'Huile Shell Helix Ultra','Huile Shell Helix Ultra â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,98,'{"categorie":"Filtres & Huiles","marque":"OEM","qualite":"premium"}','Filtres & Huiles','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(1,0x00,'image/jpeg','filtre_huile_bosch_1.jpg','https://picsum.photos/seed/1/600/600'),
(2,0x00,'image/jpeg','filtre_air_mann_2.jpg','https://picsum.photos/seed/2/600/600'),
(3,0x00,'image/jpeg','filtre_carburant_purflux_3.jpg','https://picsum.photos/seed/3/600/600'),
(4,0x00,'image/jpeg','huile_moteur_castrol_5w40_4.jpg','https://picsum.photos/seed/4/600/600'),
(5,0x00,'image/jpeg','huile_motul_10w40_4l_5.jpg','https://picsum.photos/seed/5/600/600'),
(6,0x00,'image/jpeg','filtre_huile_mahle_6.jpg','https://picsum.photos/seed/6/600/600'),
(7,0x00,'image/jpeg','kit_vidange_complet_7.jpg','https://picsum.photos/seed/7/600/600'),
(8,0x00,'image/jpeg','huile_de_bo_te_de_vitesses_8.jpg','https://picsum.photos/seed/8/600/600'),
(9,0x00,'image/jpeg','filtre_d_habitacle_9.jpg','https://picsum.photos/seed/9/600/600'),
(10,0x00,'image/jpeg','huile_de_frein_dot4_10.jpg','https://picsum.photos/seed/10/600/600'),
(11,0x00,'image/jpeg','filtre_air_sport_k_n_11.jpg','https://picsum.photos/seed/11/600/600'),
(12,0x00,'image/jpeg','huile_mobil_1_5w30_12.jpg','https://picsum.photos/seed/12/600/600'),
(13,0x00,'image/jpeg','filtre_huile_champion_13.jpg','https://picsum.photos/seed/13/600/600'),
(14,0x00,'image/jpeg','additif_huile_moteur_14.jpg','https://picsum.photos/seed/14/600/600'),
(15,0x00,'image/jpeg','huile_de_direction_assist_e_15.jpg','https://picsum.photos/seed/15/600/600'),
(16,0x00,'image/jpeg','kit_entretien_complet_16.jpg','https://picsum.photos/seed/16/600/600'),
(17,0x00,'image/jpeg','filtre_huile_longue_dur_e_17.jpg','https://picsum.photos/seed/17/600/600'),
(18,0x00,'image/jpeg','huile_2_temps_18.jpg','https://picsum.photos/seed/18/600/600'),
(19,0x00,'image/jpeg','graisse_multifonction_19.jpg','https://picsum.photos/seed/19/600/600'),
(20,0x00,'image/jpeg','filtre_diesel_delphi_20.jpg','https://picsum.photos/seed/20/600/600'),
(21,0x00,'image/jpeg','huile_bo_te_auto_atf_21.jpg','https://picsum.photos/seed/21/600/600'),
(22,0x00,'image/jpeg','nettoyant_injecteurs_diesel_22.jpg','https://picsum.photos/seed/22/600/600'),
(23,0x00,'image/jpeg','filtre_air_conique_universel_23.jpg','https://picsum.photos/seed/23/600/600'),
(24,0x00,'image/jpeg','huile_atf_pour_cvt_24.jpg','https://picsum.photos/seed/24/600/600'),
(25,0x00,'image/jpeg','jauge_huile_universelle_25.jpg','https://picsum.photos/seed/25/600/600'),
(26,0x00,'image/jpeg','filtre_carburant_essence_26.jpg','https://picsum.photos/seed/26/600/600'),
(27,0x00,'image/jpeg','huile_de_pont_arri_re_27.jpg','https://picsum.photos/seed/27/600/600'),
(28,0x00,'image/jpeg','spray_nettoyant_filtre_28.jpg','https://picsum.photos/seed/28/600/600'),
(29,0x00,'image/jpeg','filtre_huile_fram_29.jpg','https://picsum.photos/seed/29/600/600'),
(30,0x00,'image/jpeg','pack_huile_filtre_bmw_30.jpg','https://picsum.photos/seed/30/600/600'),
(31,0x00,'image/jpeg','huile_pour_compresseur_clim_31.jpg','https://picsum.photos/seed/31/600/600'),
(32,0x00,'image/jpeg','filtre_de_reniflard_32.jpg','https://picsum.photos/seed/32/600/600'),
(33,0x00,'image/jpeg','huile_total_quartz_7000_33.jpg','https://picsum.photos/seed/33/600/600'),
(34,0x00,'image/jpeg','kit_filtre_air_huile_audi_34.jpg','https://picsum.photos/seed/34/600/600'),
(35,0x00,'image/jpeg','nettoyant_carburant_essence_35.jpg','https://picsum.photos/seed/35/600/600'),
(36,0x00,'image/jpeg','filtre_hydraulique_36.jpg','https://picsum.photos/seed/36/600/600'),
(37,0x00,'image/jpeg','huile_de_refroidissement_37.jpg','https://picsum.photos/seed/37/600/600'),
(38,0x00,'image/jpeg','filtre_s_parateur_eau_diesel_38.jpg','https://picsum.photos/seed/38/600/600'),
(39,0x00,'image/jpeg','huile_elf_sporti_7_39.jpg','https://picsum.photos/seed/39/600/600'),
(40,0x00,'image/jpeg','filtre_huile_magn_tique_40.jpg','https://picsum.photos/seed/40/600/600'),
(41,0x00,'image/jpeg','additif_conomie_carburant_41.jpg','https://picsum.photos/seed/41/600/600'),
(42,0x00,'image/jpeg','kit_r_vision_toyota_42.jpg','https://picsum.photos/seed/42/600/600'),
(43,0x00,'image/jpeg','filtre_huile_bosch_district_43.jpg','https://picsum.photos/seed/43/600/600'),
(44,0x00,'image/jpeg','huile_75w85_bo_te_dsg_44.jpg','https://picsum.photos/seed/44/600/600'),
(45,0x00,'image/jpeg','pack_entretien_renault_45.jpg','https://picsum.photos/seed/45/600/600'),
(46,0x00,'image/jpeg','bidon_huile_vide_5l_46.jpg','https://picsum.photos/seed/46/600/600'),
(47,0x00,'image/jpeg','filtre_huile_racing_47.jpg','https://picsum.photos/seed/47/600/600'),
(48,0x00,'image/jpeg','huile_de_transmission_awd_48.jpg','https://picsum.photos/seed/48/600/600'),
(49,0x00,'image/jpeg','nettoyant_moteur_49.jpg','https://picsum.photos/seed/49/600/600'),
(50,0x00,'image/jpeg','huile_shell_helix_ultra_50.jpg','https://picsum.photos/seed/50/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


