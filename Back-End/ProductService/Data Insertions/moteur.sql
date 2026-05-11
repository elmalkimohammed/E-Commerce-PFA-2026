SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 3: Moteur
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(101,'Kit de distribution pour Renault Clio','Pièce de rechange de haute qualité : Kit de distribution pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,51,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(102,'Pompe à eau pour Renault Clio','Pièce de rechange de haute qualité : Pompe à eau pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,70,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(103,'Joint de culasse pour Renault Clio','Pièce de rechange de haute qualité : Joint de culasse pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,150,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(104,'Support moteur pour Renault Clio','Pièce de rechange de haute qualité : Support moteur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,86,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(105,'Courroie d''accessoire pour Renault Clio','Pièce de rechange de haute qualité : Courroie d''accessoire pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,17,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(106,'Kit de distribution pour Peugeot 208','Pièce de rechange de haute qualité : Kit de distribution pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,184,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(107,'Pompe à eau pour Peugeot 208','Pièce de rechange de haute qualité : Pompe à eau pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,141,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(108,'Joint de culasse pour Peugeot 208','Pièce de rechange de haute qualité : Joint de culasse pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,130,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(109,'Support moteur pour Peugeot 208','Pièce de rechange de haute qualité : Support moteur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,57,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(110,'Courroie d''accessoire pour Peugeot 208','Pièce de rechange de haute qualité : Courroie d''accessoire pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,85,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(111,'Kit de distribution pour Volkswagen Golf','Pièce de rechange de haute qualité : Kit de distribution pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,127,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(112,'Pompe à eau pour Volkswagen Golf','Pièce de rechange de haute qualité : Pompe à eau pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,51,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(113,'Joint de culasse pour Volkswagen Golf','Pièce de rechange de haute qualité : Joint de culasse pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,190,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(114,'Support moteur pour Volkswagen Golf','Pièce de rechange de haute qualité : Support moteur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,71,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(115,'Courroie d''accessoire pour Volkswagen Golf','Pièce de rechange de haute qualité : Courroie d''accessoire pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,75,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(116,'Kit de distribution pour BMW Série 3','Pièce de rechange de haute qualité : Kit de distribution pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,130,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(117,'Pompe à eau pour BMW Série 3','Pièce de rechange de haute qualité : Pompe à eau pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,91,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(118,'Joint de culasse pour BMW Série 3','Pièce de rechange de haute qualité : Joint de culasse pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,26,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(119,'Support moteur pour BMW Série 3','Pièce de rechange de haute qualité : Support moteur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,74,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(120,'Courroie d''accessoire pour BMW Série 3','Pièce de rechange de haute qualité : Courroie d''accessoire pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,186,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(121,'Kit de distribution pour Mercedes Classe C','Pièce de rechange de haute qualité : Kit de distribution pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,146,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(122,'Pompe à eau pour Mercedes Classe C','Pièce de rechange de haute qualité : Pompe à eau pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,61,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(123,'Joint de culasse pour Mercedes Classe C','Pièce de rechange de haute qualité : Joint de culasse pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,167,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(124,'Support moteur pour Mercedes Classe C','Pièce de rechange de haute qualité : Support moteur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,204,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(125,'Courroie d''accessoire pour Mercedes Classe C','Pièce de rechange de haute qualité : Courroie d''accessoire pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,93,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(126,'Kit de distribution pour Audi A4','Pièce de rechange de haute qualité : Kit de distribution pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,101,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(127,'Pompe à eau pour Audi A4','Pièce de rechange de haute qualité : Pompe à eau pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,90,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(128,'Joint de culasse pour Audi A4','Pièce de rechange de haute qualité : Joint de culasse pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,170,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(129,'Support moteur pour Audi A4','Pièce de rechange de haute qualité : Support moteur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,206,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(130,'Courroie d''accessoire pour Audi A4','Pièce de rechange de haute qualité : Courroie d''accessoire pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,35,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(131,'Kit de distribution pour Toyota Yaris','Pièce de rechange de haute qualité : Kit de distribution pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,121,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(132,'Pompe à eau pour Toyota Yaris','Pièce de rechange de haute qualité : Pompe à eau pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,166,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(133,'Joint de culasse pour Toyota Yaris','Pièce de rechange de haute qualité : Joint de culasse pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,119,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(134,'Support moteur pour Toyota Yaris','Pièce de rechange de haute qualité : Support moteur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,128,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(135,'Courroie d''accessoire pour Toyota Yaris','Pièce de rechange de haute qualité : Courroie d''accessoire pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,111,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(136,'Kit de distribution pour Ford Fiesta','Pièce de rechange de haute qualité : Kit de distribution pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,58,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(137,'Pompe à eau pour Ford Fiesta','Pièce de rechange de haute qualité : Pompe à eau pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,20,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(138,'Joint de culasse pour Ford Fiesta','Pièce de rechange de haute qualité : Joint de culasse pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,198,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(139,'Support moteur pour Ford Fiesta','Pièce de rechange de haute qualité : Support moteur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,18,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(140,'Courroie d''accessoire pour Ford Fiesta','Pièce de rechange de haute qualité : Courroie d''accessoire pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,72,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(141,'Kit de distribution pour Citroën C3','Pièce de rechange de haute qualité : Kit de distribution pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,26,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(142,'Pompe à eau pour Citroën C3','Pièce de rechange de haute qualité : Pompe à eau pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,70,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(143,'Joint de culasse pour Citroën C3','Pièce de rechange de haute qualité : Joint de culasse pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,75,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(144,'Support moteur pour Citroën C3','Pièce de rechange de haute qualité : Support moteur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,162,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(145,'Courroie d''accessoire pour Citroën C3','Pièce de rechange de haute qualité : Courroie d''accessoire pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,21,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(146,'Kit de distribution pour Fiat 500','Pièce de rechange de haute qualité : Kit de distribution pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,56,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(147,'Pompe à eau pour Fiat 500','Pièce de rechange de haute qualité : Pompe à eau pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,111,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(148,'Joint de culasse pour Fiat 500','Pièce de rechange de haute qualité : Joint de culasse pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,103,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(149,'Support moteur pour Fiat 500','Pièce de rechange de haute qualité : Support moteur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,128,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000'),
(150,'Courroie d''accessoire pour Fiat 500','Pièce de rechange de haute qualité : Courroie d''accessoire pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,14,'{"categorie":"Moteur","marque":"OEM","qualite":"premium"}','Moteur','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(101,0x00,'image/jpeg','joint_de_culasse_101.jpg','/images/products/kit_de_distribution.png'),
(102,0x00,'image/jpeg','segment_piston_102.jpg','/images/products/pompe_a_eau.png'),
(103,0x00,'image/jpeg','soupape_admission_103.jpg','/images/products/joint_de_culasse.png'),
(104,0x00,'image/jpeg','soupape_chappement_104.jpg','/images/products/support_moteur.png'),
(105,0x00,'image/jpeg','poulie_vilebrequin_105.jpg','/images/products/courroie_accessoire.png'),
(106,0x00,'image/jpeg','arbre_cames_106.jpg','/images/products/kit_de_distribution.png'),
(107,0x00,'image/jpeg','cha_ne_distribution_107.jpg','/images/products/pompe_a_eau.png'),
(108,0x00,'image/jpeg','kit_distribution_complet_108.jpg','/images/products/joint_de_culasse.png'),
(109,0x00,'image/jpeg','tendeur_cha_ne_109.jpg','/images/products/support_moteur.png'),
(110,0x00,'image/jpeg','pompe_huile_110.jpg','/images/products/courroie_accessoire.png'),
(111,0x00,'image/jpeg','vilebrequin_111.jpg','/images/products/kit_de_distribution.png'),
(112,0x00,'image/jpeg','bielle_moteur_112.jpg','/images/products/pompe_a_eau.png'),
(113,0x00,'image/jpeg','piston_complet_113.jpg','/images/products/joint_de_culasse.png'),
(114,0x00,'image/jpeg','cache_culbuteurs_114.jpg','/images/products/support_moteur.png'),
(115,0x00,'image/jpeg','joint_cache_culasse_115.jpg','/images/products/courroie_accessoire.png'),
(116,0x00,'image/jpeg','bougie_allumage_ngk_116.jpg','/images/products/kit_de_distribution.png'),
(117,0x00,'image/jpeg','bougie_pr_chauffage_117.jpg','/images/products/pompe_a_eau.png'),
(118,0x00,'image/jpeg','bobine_allumage_118.jpg','/images/products/joint_de_culasse.png'),
(119,0x00,'image/jpeg','coil_pack_complet_119.jpg','/images/products/support_moteur.png'),
(120,0x00,'image/jpeg','alternateur_120.jpg','/images/products/courroie_accessoire.png'),
(121,0x00,'image/jpeg','d_marreur_moteur_121.jpg','/images/products/kit_de_distribution.png'),
(122,0x00,'image/jpeg','courroie_accessoires_122.jpg','/images/products/pompe_a_eau.png'),
(123,0x00,'image/jpeg','tendeur_courroie_123.jpg','/images/products/joint_de_culasse.png'),
(124,0x00,'image/jpeg','galet_enrouleur_124.jpg','/images/products/support_moteur.png'),
(125,0x00,'image/jpeg','pompe_injection_diesel_125.jpg','/images/products/courroie_accessoire.png'),
(126,0x00,'image/jpeg','injecteur_diesel_bosch_126.jpg','/images/products/kit_de_distribution.png'),
(127,0x00,'image/jpeg','r_gulateur_pression_carburant_127.jpg','/images/products/pompe_a_eau.png'),
(128,0x00,'image/jpeg','sonde_lambda_128.jpg','/images/products/joint_de_culasse.png'),
(129,0x00,'image/jpeg','sonde_temp_rature_129.jpg','/images/products/support_moteur.png'),
(130,0x00,'image/jpeg','capteur_pmh_130.jpg','/images/products/courroie_accessoire.png'),
(131,0x00,'image/jpeg','vilebrequin_sport_131.jpg','/images/products/kit_de_distribution.png'),
(132,0x00,'image/jpeg','carter_huile_aluminium_132.jpg','/images/products/pompe_a_eau.png'),
(133,0x00,'image/jpeg','bouchon_carter_133.jpg','/images/products/joint_de_culasse.png'),
(134,0x00,'image/jpeg','support_moteur_134.jpg','/images/products/support_moteur.png'),
(135,0x00,'image/jpeg','durite_d_eau_sup_rieure_135.jpg','/images/products/courroie_accessoire.png'),
(136,0x00,'image/jpeg','durite_d_eau_inf_rieure_136.jpg','/images/products/kit_de_distribution.png'),
(137,0x00,'image/jpeg','thermostat_moteur_137.jpg','/images/products/pompe_a_eau.png'),
(138,0x00,'image/jpeg','bo_tier_thermostat_138.jpg','/images/products/joint_de_culasse.png'),
(139,0x00,'image/jpeg','rampe_injection_139.jpg','/images/products/support_moteur.png'),
(140,0x00,'image/jpeg','d_bitm_tre_air_140.jpg','/images/products/courroie_accessoire.png'),
(141,0x00,'image/jpeg','collecteur_admission_141.jpg','/images/products/kit_de_distribution.png'),
(142,0x00,'image/jpeg','collecteur_chappement_142.jpg','/images/products/pompe_a_eau.png'),
(143,0x00,'image/jpeg','turbocompresseur_143.jpg','/images/products/joint_de_culasse.png'),
(144,0x00,'image/jpeg','wastegate_turbo_144.jpg','/images/products/support_moteur.png'),
(145,0x00,'image/jpeg','intercooler_145.jpg','/images/products/courroie_accessoire.png'),
(146,0x00,'image/jpeg','valve_egr_146.jpg','/images/products/kit_de_distribution.png'),
(147,0x00,'image/jpeg','capteur_position_papillon_147.jpg','/images/products/pompe_a_eau.png'),
(148,0x00,'image/jpeg','corps_papillon_148.jpg','/images/products/joint_de_culasse.png'),
(149,0x00,'image/jpeg','injecteur_essence_149.jpg','/images/products/support_moteur.png'),
(150,0x00,'image/jpeg','pompe_essence_150.jpg','/images/products/courroie_accessoire.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


