SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 8: Carrosserie & Extérieur
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(351,'Rétroviseur extérieur pour Renault Clio','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,81,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(352,'Phare avant LED pour Renault Clio','Pièce de rechange de haute qualité : Phare avant LED pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,73,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(353,'Pare-chocs avant pour Renault Clio','Pièce de rechange de haute qualité : Pare-chocs avant pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,35,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(354,'Balai d''essuie-glace pour Renault Clio','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,149,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(355,'Vérin de hayon pour Renault Clio','Pièce de rechange de haute qualité : Vérin de hayon pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,199,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(356,'Rétroviseur extérieur pour Peugeot 208','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,102,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(357,'Phare avant LED pour Peugeot 208','Pièce de rechange de haute qualité : Phare avant LED pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,51,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(358,'Pare-chocs avant pour Peugeot 208','Pièce de rechange de haute qualité : Pare-chocs avant pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,138,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(359,'Balai d''essuie-glace pour Peugeot 208','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,11,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(360,'Vérin de hayon pour Peugeot 208','Pièce de rechange de haute qualité : Vérin de hayon pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,14,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(361,'Rétroviseur extérieur pour Volkswagen Golf','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,151,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(362,'Phare avant LED pour Volkswagen Golf','Pièce de rechange de haute qualité : Phare avant LED pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,37,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(363,'Pare-chocs avant pour Volkswagen Golf','Pièce de rechange de haute qualité : Pare-chocs avant pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,39,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(364,'Balai d''essuie-glace pour Volkswagen Golf','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,179,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(365,'Vérin de hayon pour Volkswagen Golf','Pièce de rechange de haute qualité : Vérin de hayon pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,17,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(366,'Rétroviseur extérieur pour BMW Série 3','Pièce de rechange de haute qualité : Rétroviseur extérieur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,19,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(367,'Phare avant LED pour BMW Série 3','Pièce de rechange de haute qualité : Phare avant LED pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,188,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(368,'Pare-chocs avant pour BMW Série 3','Pièce de rechange de haute qualité : Pare-chocs avant pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,154,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(369,'Balai d''essuie-glace pour BMW Série 3','Pièce de rechange de haute qualité : Balai d''essuie-glace pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,92,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(370,'Vérin de hayon pour BMW Série 3','Pièce de rechange de haute qualité : Vérin de hayon pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,71,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(371,'Rétroviseur extérieur pour Mercedes Classe C','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,183,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(372,'Phare avant LED pour Mercedes Classe C','Pièce de rechange de haute qualité : Phare avant LED pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,80,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(373,'Pare-chocs avant pour Mercedes Classe C','Pièce de rechange de haute qualité : Pare-chocs avant pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,165,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(374,'Balai d''essuie-glace pour Mercedes Classe C','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,34,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(375,'Vérin de hayon pour Mercedes Classe C','Pièce de rechange de haute qualité : Vérin de hayon pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,25,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(376,'Rétroviseur extérieur pour Audi A4','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,15,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(377,'Phare avant LED pour Audi A4','Pièce de rechange de haute qualité : Phare avant LED pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,43,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(378,'Pare-chocs avant pour Audi A4','Pièce de rechange de haute qualité : Pare-chocs avant pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,78,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(379,'Balai d''essuie-glace pour Audi A4','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,134,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(380,'Vérin de hayon pour Audi A4','Pièce de rechange de haute qualité : Vérin de hayon pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,71,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(381,'Rétroviseur extérieur pour Toyota Yaris','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,97,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(382,'Phare avant LED pour Toyota Yaris','Pièce de rechange de haute qualité : Phare avant LED pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,85,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(383,'Pare-chocs avant pour Toyota Yaris','Pièce de rechange de haute qualité : Pare-chocs avant pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,197,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(384,'Balai d''essuie-glace pour Toyota Yaris','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,20,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(385,'Vérin de hayon pour Toyota Yaris','Pièce de rechange de haute qualité : Vérin de hayon pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,156,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(386,'Rétroviseur extérieur pour Ford Fiesta','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,31,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(387,'Phare avant LED pour Ford Fiesta','Pièce de rechange de haute qualité : Phare avant LED pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,48,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(388,'Pare-chocs avant pour Ford Fiesta','Pièce de rechange de haute qualité : Pare-chocs avant pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,40,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(389,'Balai d''essuie-glace pour Ford Fiesta','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,65,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(390,'Vérin de hayon pour Ford Fiesta','Pièce de rechange de haute qualité : Vérin de hayon pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,109,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(391,'Rétroviseur extérieur pour Citroën C3','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,112,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(392,'Phare avant LED pour Citroën C3','Pièce de rechange de haute qualité : Phare avant LED pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,52,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(393,'Pare-chocs avant pour Citroën C3','Pièce de rechange de haute qualité : Pare-chocs avant pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,91,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(394,'Balai d''essuie-glace pour Citroën C3','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,44,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(395,'Vérin de hayon pour Citroën C3','Pièce de rechange de haute qualité : Vérin de hayon pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,192,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(396,'Rétroviseur extérieur pour Fiat 500','Pièce de rechange de haute qualité : Rétroviseur extérieur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,55,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(397,'Phare avant LED pour Fiat 500','Pièce de rechange de haute qualité : Phare avant LED pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,202,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(398,'Pare-chocs avant pour Fiat 500','Pièce de rechange de haute qualité : Pare-chocs avant pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,120,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(399,'Balai d''essuie-glace pour Fiat 500','Pièce de rechange de haute qualité : Balai d''essuie-glace pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,180,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(400,'Vérin de hayon pour Fiat 500','Pièce de rechange de haute qualité : Vérin de hayon pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,56,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(351,0x00,'image/jpeg','pare_choc_avant_universel_351.jpg','https://loremflickr.com/600/600/car,mirror?lock=351'),
(352,0x00,'image/jpeg','pare_choc_arri_re_352.jpg','https://loremflickr.com/600/600/car,headlight?lock=352'),
(353,0x00,'image/jpeg','capot_aluminium_353.jpg','https://loremflickr.com/600/600/car,bumper?lock=353'),
(354,0x00,'image/jpeg','aile_avant_gauche_354.jpg','https://loremflickr.com/600/600/car,wiper?lock=354'),
(355,0x00,'image/jpeg','aile_avant_droit_355.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=355'),
(356,0x00,'image/jpeg','porti_re_compl_te_356.jpg','https://loremflickr.com/600/600/car,mirror?lock=356'),
(357,0x00,'image/jpeg','r_troviseur_gauche_357.jpg','https://loremflickr.com/600/600/car,headlight?lock=357'),
(358,0x00,'image/jpeg','r_troviseur_droit_358.jpg','https://loremflickr.com/600/600/car,bumper?lock=358'),
(359,0x00,'image/jpeg','poign_e_de_porte_ext_359.jpg','https://loremflickr.com/600/600/car,wiper?lock=359'),
(360,0x00,'image/jpeg','moulure_de_porte_360.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=360'),
(361,0x00,'image/jpeg','baguette_lat_rale_361.jpg','https://loremflickr.com/600/600/car,mirror?lock=361'),
(362,0x00,'image/jpeg','phare_avant_gauche_362.jpg','https://loremflickr.com/600/600/car,headlight?lock=362'),
(363,0x00,'image/jpeg','phare_avant_droit_363.jpg','https://loremflickr.com/600/600/car,bumper?lock=363'),
(364,0x00,'image/jpeg','feu_arri_re_gauche_364.jpg','https://loremflickr.com/600/600/car,wiper?lock=364'),
(365,0x00,'image/jpeg','feu_arri_re_droit_365.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=365'),
(366,0x00,'image/jpeg','calandre_sportive_366.jpg','https://loremflickr.com/600/600/car,mirror?lock=366'),
(367,0x00,'image/jpeg','spoiler_arri_re_367.jpg','https://loremflickr.com/600/600/car,headlight?lock=367'),
(368,0x00,'image/jpeg','jupe_lat_rale_368.jpg','https://loremflickr.com/600/600/car,bumper?lock=368'),
(369,0x00,'image/jpeg','becquet_de_toit_369.jpg','https://loremflickr.com/600/600/car,wiper?lock=369'),
(370,0x00,'image/jpeg','diffuseur_arri_re_370.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=370'),
(371,0x00,'image/jpeg','joint_de_porte_371.jpg','https://loremflickr.com/600/600/car,mirror?lock=371'),
(372,0x00,'image/jpeg','joint_de_coffre_372.jpg','https://loremflickr.com/600/600/car,headlight?lock=372'),
(373,0x00,'image/jpeg','l_che_vitre_porte_373.jpg','https://loremflickr.com/600/600/car,bumper?lock=373'),
(374,0x00,'image/jpeg','vitrage_porte_lat_rale_374.jpg','https://loremflickr.com/600/600/car,wiper?lock=374'),
(375,0x00,'image/jpeg','pare_brise_375.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=375'),
(376,0x00,'image/jpeg','lunette_arri_re_376.jpg','https://loremflickr.com/600/600/car,mirror?lock=376'),
(377,0x00,'image/jpeg','r_troviseur_int_rieur_377.jpg','https://loremflickr.com/600/600/car,headlight?lock=377'),
(378,0x00,'image/jpeg','essuie_glace_arri_re_378.jpg','https://loremflickr.com/600/600/car,bumper?lock=378'),
(379,0x00,'image/jpeg','antenne_de_toit_379.jpg','https://loremflickr.com/600/600/car,wiper?lock=379'),
(380,0x00,'image/jpeg','baguette_chromo_380.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=380'),
(381,0x00,'image/jpeg','couvre_roue_plastique_381.jpg','https://loremflickr.com/600/600/car,mirror?lock=381'),
(382,0x00,'image/jpeg','cache_prise_recharge_382.jpg','https://loremflickr.com/600/600/car,headlight?lock=382'),
(383,0x00,'image/jpeg','grille_calandre_383.jpg','https://loremflickr.com/600/600/car,bumper?lock=383'),
(384,0x00,'image/jpeg','prise_d_air_capot_384.jpg','https://loremflickr.com/600/600/car,wiper?lock=384'),
(385,0x00,'image/jpeg','marchepied_lat_ral_385.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=385'),
(386,0x00,'image/jpeg','becquet_rallye_386.jpg','https://loremflickr.com/600/600/car,mirror?lock=386'),
(387,0x00,'image/jpeg','lame_de_pare_choc_387.jpg','https://loremflickr.com/600/600/car,headlight?lock=387'),
(388,0x00,'image/jpeg','_cusson_sigle_marque_388.jpg','https://loremflickr.com/600/600/car,bumper?lock=388'),
(389,0x00,'image/jpeg','cache_vis_roue_389.jpg','https://loremflickr.com/600/600/car,wiper?lock=389'),
(390,0x00,'image/jpeg','support_de_plaque_390.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=390'),
(391,0x00,'image/jpeg','enjoliveur_de_porte_391.jpg','https://loremflickr.com/600/600/car,mirror?lock=391'),
(392,0x00,'image/jpeg','prot_ge_bas_de_caisse_392.jpg','https://loremflickr.com/600/600/car,headlight?lock=392'),
(393,0x00,'image/jpeg','renforts_de_seuil_393.jpg','https://loremflickr.com/600/600/car,bumper?lock=393'),
(394,0x00,'image/jpeg','baguette_de_toit_394.jpg','https://loremflickr.com/600/600/car,wiper?lock=394'),
(395,0x00,'image/jpeg','a_rateur_capot_395.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=395'),
(396,0x00,'image/jpeg','d_flecteur_capot_396.jpg','https://loremflickr.com/600/600/car,mirror?lock=396'),
(397,0x00,'image/jpeg','protection_de_vitre_397.jpg','https://loremflickr.com/600/600/car,headlight?lock=397'),
(398,0x00,'image/jpeg','cordon_tanch_it__398.jpg','https://loremflickr.com/600/600/car,bumper?lock=398'),
(399,0x00,'image/jpeg','joint_de_hayon_399.jpg','https://loremflickr.com/600/600/car,wiper?lock=399'),
(400,0x00,'image/jpeg','lame_de_seuil_400.jpg','https://loremflickr.com/600/600/car,gas,strut?lock=400');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


