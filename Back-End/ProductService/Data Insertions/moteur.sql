SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 3: Moteur
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(101,'Joint de culasse','Joint de culasse â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,51,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(102,'Segment piston','Segment piston â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,70,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(103,'Soupape admission','Soupape admission â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,150,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(104,'Soupape échappement','Soupape échappement â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,86,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(105,'Poulie vilebrequin','Poulie vilebrequin â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,17,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(106,'Arbre à cames','Arbre à cames â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,184,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(107,'Chaîne distribution','Chaîne distribution â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,141,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(108,'Kit distribution complet','Kit distribution complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,130,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(109,'Tendeur chaîne','Tendeur chaîne â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,57,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(110,'Pompe à huile','Pompe à huile â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,85,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(111,'Vilebrequin','Vilebrequin â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,127,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(112,'Bielle moteur','Bielle moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,51,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(113,'Piston complet','Piston complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,190,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(114,'Cache culbuteurs','Cache culbuteurs â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,71,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(115,'Joint cache culasse','Joint cache culasse â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,75,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(116,'Bougie allumage NGK','Bougie allumage NGK â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,130,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(117,'Bougie préchauffage','Bougie préchauffage â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,91,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(118,'Bobine allumage','Bobine allumage â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,26,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(119,'Coil pack complet','Coil pack complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,74,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(120,'Alternateur','Alternateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,186,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(121,'Démarreur moteur','Démarreur moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,146,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(122,'Courroie accessoires','Courroie accessoires â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,61,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(123,'Tendeur courroie','Tendeur courroie â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,167,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(124,'Galet enrouleur','Galet enrouleur â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,204,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(125,'Pompe injection diesel','Pompe injection diesel â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,93,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(126,'Injecteur diesel Bosch','Injecteur diesel Bosch â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,101,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(127,'Régulateur pression carburant','Régulateur pression carburant â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,90,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(128,'Sonde lambda','Sonde lambda â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,170,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(129,'Sonde température','Sonde température â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,206,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(130,'Capteur PMH','Capteur PMH â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,35,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(131,'Vilebrequin Sport','Vilebrequin Sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,121,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(132,'Carter huile aluminium','Carter huile aluminium â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,166,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(133,'Bouchon carter','Bouchon carter â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,119,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(134,'Support moteur','Support moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,128,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(135,'Durite d''eau supérieure','Durite d''eau supérieure â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,111,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(136,'Durite d''eau inférieure','Durite d''eau inférieure â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,58,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(137,'Thermostat moteur','Thermostat moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,20,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(138,'Boîtier thermostat','Boîtier thermostat â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,198,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(139,'Rampe injection','Rampe injection â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,18,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(140,'Débitmètre air','Débitmètre air â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,72,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(141,'Collecteur admission','Collecteur admission â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,26,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(142,'Collecteur échappement','Collecteur échappement â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,70,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(143,'Turbocompresseur','Turbocompresseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,75,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(144,'Wastegate turbo','Wastegate turbo â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,162,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(145,'Intercooler','Intercooler â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,21,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(146,'Valve EGR','Valve EGR â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,56,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(147,'Capteur position papillon','Capteur position papillon â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,111,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(148,'Corps papillon','Corps papillon â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,103,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(149,'Injecteur essence','Injecteur essence â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,128,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(150,'Pompe à essence','Pompe à essence â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,14,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(101,0x00,'image/jpeg','joint_de_culasse_101.jpg','https://picsum.photos/seed/101/600/600'),
(102,0x00,'image/jpeg','segment_piston_102.jpg','https://picsum.photos/seed/102/600/600'),
(103,0x00,'image/jpeg','soupape_admission_103.jpg','https://picsum.photos/seed/103/600/600'),
(104,0x00,'image/jpeg','soupape_chappement_104.jpg','https://picsum.photos/seed/104/600/600'),
(105,0x00,'image/jpeg','poulie_vilebrequin_105.jpg','https://picsum.photos/seed/105/600/600'),
(106,0x00,'image/jpeg','arbre_cames_106.jpg','https://picsum.photos/seed/106/600/600'),
(107,0x00,'image/jpeg','cha_ne_distribution_107.jpg','https://picsum.photos/seed/107/600/600'),
(108,0x00,'image/jpeg','kit_distribution_complet_108.jpg','https://picsum.photos/seed/108/600/600'),
(109,0x00,'image/jpeg','tendeur_cha_ne_109.jpg','https://picsum.photos/seed/109/600/600'),
(110,0x00,'image/jpeg','pompe_huile_110.jpg','https://picsum.photos/seed/110/600/600'),
(111,0x00,'image/jpeg','vilebrequin_111.jpg','https://picsum.photos/seed/111/600/600'),
(112,0x00,'image/jpeg','bielle_moteur_112.jpg','https://picsum.photos/seed/112/600/600'),
(113,0x00,'image/jpeg','piston_complet_113.jpg','https://picsum.photos/seed/113/600/600'),
(114,0x00,'image/jpeg','cache_culbuteurs_114.jpg','https://picsum.photos/seed/114/600/600'),
(115,0x00,'image/jpeg','joint_cache_culasse_115.jpg','https://picsum.photos/seed/115/600/600'),
(116,0x00,'image/jpeg','bougie_allumage_ngk_116.jpg','https://picsum.photos/seed/116/600/600'),
(117,0x00,'image/jpeg','bougie_pr_chauffage_117.jpg','https://picsum.photos/seed/117/600/600'),
(118,0x00,'image/jpeg','bobine_allumage_118.jpg','https://picsum.photos/seed/118/600/600'),
(119,0x00,'image/jpeg','coil_pack_complet_119.jpg','https://picsum.photos/seed/119/600/600'),
(120,0x00,'image/jpeg','alternateur_120.jpg','https://picsum.photos/seed/120/600/600'),
(121,0x00,'image/jpeg','d_marreur_moteur_121.jpg','https://picsum.photos/seed/121/600/600'),
(122,0x00,'image/jpeg','courroie_accessoires_122.jpg','https://picsum.photos/seed/122/600/600'),
(123,0x00,'image/jpeg','tendeur_courroie_123.jpg','https://picsum.photos/seed/123/600/600'),
(124,0x00,'image/jpeg','galet_enrouleur_124.jpg','https://picsum.photos/seed/124/600/600'),
(125,0x00,'image/jpeg','pompe_injection_diesel_125.jpg','https://picsum.photos/seed/125/600/600'),
(126,0x00,'image/jpeg','injecteur_diesel_bosch_126.jpg','https://picsum.photos/seed/126/600/600'),
(127,0x00,'image/jpeg','r_gulateur_pression_carburant_127.jpg','https://picsum.photos/seed/127/600/600'),
(128,0x00,'image/jpeg','sonde_lambda_128.jpg','https://picsum.photos/seed/128/600/600'),
(129,0x00,'image/jpeg','sonde_temp_rature_129.jpg','https://picsum.photos/seed/129/600/600'),
(130,0x00,'image/jpeg','capteur_pmh_130.jpg','https://picsum.photos/seed/130/600/600'),
(131,0x00,'image/jpeg','vilebrequin_sport_131.jpg','https://picsum.photos/seed/131/600/600'),
(132,0x00,'image/jpeg','carter_huile_aluminium_132.jpg','https://picsum.photos/seed/132/600/600'),
(133,0x00,'image/jpeg','bouchon_carter_133.jpg','https://picsum.photos/seed/133/600/600'),
(134,0x00,'image/jpeg','support_moteur_134.jpg','https://picsum.photos/seed/134/600/600'),
(135,0x00,'image/jpeg','durite_d_eau_sup_rieure_135.jpg','https://picsum.photos/seed/135/600/600'),
(136,0x00,'image/jpeg','durite_d_eau_inf_rieure_136.jpg','https://picsum.photos/seed/136/600/600'),
(137,0x00,'image/jpeg','thermostat_moteur_137.jpg','https://picsum.photos/seed/137/600/600'),
(138,0x00,'image/jpeg','bo_tier_thermostat_138.jpg','https://picsum.photos/seed/138/600/600'),
(139,0x00,'image/jpeg','rampe_injection_139.jpg','https://picsum.photos/seed/139/600/600'),
(140,0x00,'image/jpeg','d_bitm_tre_air_140.jpg','https://picsum.photos/seed/140/600/600'),
(141,0x00,'image/jpeg','collecteur_admission_141.jpg','https://picsum.photos/seed/141/600/600'),
(142,0x00,'image/jpeg','collecteur_chappement_142.jpg','https://picsum.photos/seed/142/600/600'),
(143,0x00,'image/jpeg','turbocompresseur_143.jpg','https://picsum.photos/seed/143/600/600'),
(144,0x00,'image/jpeg','wastegate_turbo_144.jpg','https://picsum.photos/seed/144/600/600'),
(145,0x00,'image/jpeg','intercooler_145.jpg','https://picsum.photos/seed/145/600/600'),
(146,0x00,'image/jpeg','valve_egr_146.jpg','https://picsum.photos/seed/146/600/600'),
(147,0x00,'image/jpeg','capteur_position_papillon_147.jpg','https://picsum.photos/seed/147/600/600'),
(148,0x00,'image/jpeg','corps_papillon_148.jpg','https://picsum.photos/seed/148/600/600'),
(149,0x00,'image/jpeg','injecteur_essence_149.jpg','https://picsum.photos/seed/149/600/600'),
(150,0x00,'image/jpeg','pompe_essence_150.jpg','https://picsum.photos/seed/150/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


