SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 10: Climatisation
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(451,'Compresseur de clim pour Renault Clio','Pièce de rechange de haute qualité : Compresseur de clim pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,16,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(452,'Condenseur de clim pour Renault Clio','Pièce de rechange de haute qualité : Condenseur de clim pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,79,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(453,'Filtre déshydratant pour Renault Clio','Pièce de rechange de haute qualité : Filtre déshydratant pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,37,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(454,'Pressostat de climatisation pour Renault Clio','Pièce de rechange de haute qualité : Pressostat de climatisation pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,201,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(455,'Détendeur de climatisation pour Renault Clio','Pièce de rechange de haute qualité : Détendeur de climatisation pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,41,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(456,'Compresseur de clim pour Peugeot 208','Pièce de rechange de haute qualité : Compresseur de clim pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,165,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(457,'Condenseur de clim pour Peugeot 208','Pièce de rechange de haute qualité : Condenseur de clim pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,120,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(458,'Filtre déshydratant pour Peugeot 208','Pièce de rechange de haute qualité : Filtre déshydratant pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,191,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(459,'Pressostat de climatisation pour Peugeot 208','Pièce de rechange de haute qualité : Pressostat de climatisation pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,70,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(460,'Détendeur de climatisation pour Peugeot 208','Pièce de rechange de haute qualité : Détendeur de climatisation pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,33,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(461,'Compresseur de clim pour Volkswagen Golf','Pièce de rechange de haute qualité : Compresseur de clim pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,73,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(462,'Condenseur de clim pour Volkswagen Golf','Pièce de rechange de haute qualité : Condenseur de clim pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,179,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(463,'Filtre déshydratant pour Volkswagen Golf','Pièce de rechange de haute qualité : Filtre déshydratant pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,160,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(464,'Pressostat de climatisation pour Volkswagen Golf','Pièce de rechange de haute qualité : Pressostat de climatisation pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,56,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(465,'Détendeur de climatisation pour Volkswagen Golf','Pièce de rechange de haute qualité : Détendeur de climatisation pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,192,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(466,'Compresseur de clim pour BMW Série 3','Pièce de rechange de haute qualité : Compresseur de clim pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,82,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(467,'Condenseur de clim pour BMW Série 3','Pièce de rechange de haute qualité : Condenseur de clim pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,32,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(468,'Filtre déshydratant pour BMW Série 3','Pièce de rechange de haute qualité : Filtre déshydratant pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,202,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(469,'Pressostat de climatisation pour BMW Série 3','Pièce de rechange de haute qualité : Pressostat de climatisation pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,105,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(470,'Détendeur de climatisation pour BMW Série 3','Pièce de rechange de haute qualité : Détendeur de climatisation pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,17,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(471,'Compresseur de clim pour Mercedes Classe C','Pièce de rechange de haute qualité : Compresseur de clim pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,117,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(472,'Condenseur de clim pour Mercedes Classe C','Pièce de rechange de haute qualité : Condenseur de clim pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,180,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(473,'Filtre déshydratant pour Mercedes Classe C','Pièce de rechange de haute qualité : Filtre déshydratant pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,197,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(474,'Pressostat de climatisation pour Mercedes Classe C','Pièce de rechange de haute qualité : Pressostat de climatisation pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,77,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(475,'Détendeur de climatisation pour Mercedes Classe C','Pièce de rechange de haute qualité : Détendeur de climatisation pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,142,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(476,'Compresseur de clim pour Audi A4','Pièce de rechange de haute qualité : Compresseur de clim pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,92,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(477,'Condenseur de clim pour Audi A4','Pièce de rechange de haute qualité : Condenseur de clim pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,147,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(478,'Filtre déshydratant pour Audi A4','Pièce de rechange de haute qualité : Filtre déshydratant pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,28,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(479,'Pressostat de climatisation pour Audi A4','Pièce de rechange de haute qualité : Pressostat de climatisation pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,76,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(480,'Détendeur de climatisation pour Audi A4','Pièce de rechange de haute qualité : Détendeur de climatisation pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,31,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(481,'Compresseur de clim pour Toyota Yaris','Pièce de rechange de haute qualité : Compresseur de clim pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,181,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(482,'Condenseur de clim pour Toyota Yaris','Pièce de rechange de haute qualité : Condenseur de clim pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,175,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(483,'Filtre déshydratant pour Toyota Yaris','Pièce de rechange de haute qualité : Filtre déshydratant pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,22,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(484,'Pressostat de climatisation pour Toyota Yaris','Pièce de rechange de haute qualité : Pressostat de climatisation pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,83,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(485,'Détendeur de climatisation pour Toyota Yaris','Pièce de rechange de haute qualité : Détendeur de climatisation pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,124,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(486,'Compresseur de clim pour Ford Fiesta','Pièce de rechange de haute qualité : Compresseur de clim pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,11,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(487,'Condenseur de clim pour Ford Fiesta','Pièce de rechange de haute qualité : Condenseur de clim pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,73,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(488,'Filtre déshydratant pour Ford Fiesta','Pièce de rechange de haute qualité : Filtre déshydratant pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,174,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(489,'Pressostat de climatisation pour Ford Fiesta','Pièce de rechange de haute qualité : Pressostat de climatisation pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,192,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(490,'Détendeur de climatisation pour Ford Fiesta','Pièce de rechange de haute qualité : Détendeur de climatisation pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,158,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(491,'Compresseur de clim pour Citroën C3','Pièce de rechange de haute qualité : Compresseur de clim pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,35,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(492,'Condenseur de clim pour Citroën C3','Pièce de rechange de haute qualité : Condenseur de clim pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,205,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(493,'Filtre déshydratant pour Citroën C3','Pièce de rechange de haute qualité : Filtre déshydratant pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,171,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(494,'Pressostat de climatisation pour Citroën C3','Pièce de rechange de haute qualité : Pressostat de climatisation pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,86,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(495,'Détendeur de climatisation pour Citroën C3','Pièce de rechange de haute qualité : Détendeur de climatisation pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,103,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(496,'Compresseur de clim pour Fiat 500','Pièce de rechange de haute qualité : Compresseur de clim pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,193,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(497,'Condenseur de clim pour Fiat 500','Pièce de rechange de haute qualité : Condenseur de clim pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,21,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(498,'Filtre déshydratant pour Fiat 500','Pièce de rechange de haute qualité : Filtre déshydratant pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,68,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(499,'Pressostat de climatisation pour Fiat 500','Pièce de rechange de haute qualité : Pressostat de climatisation pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,198,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(500,'Détendeur de climatisation pour Fiat 500','Pièce de rechange de haute qualité : Détendeur de climatisation pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,184,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(451,0x00,'image/jpeg','compresseur_climatisation_451.jpg','/images/products/car_exhaust.png'),
(452,0x00,'image/jpeg','condenseur_clim_452.jpg','/images/products/car_exhaust.png'),
(453,0x00,'image/jpeg','filtre_d_shydrateur_453.jpg','/images/products/car_exhaust.png'),
(454,0x00,'image/jpeg','d_tendeur_thermostatique_454.jpg','/images/products/car_exhaust.png'),
(455,0x00,'image/jpeg','_vaporateur_clim_455.jpg','/images/products/car_exhaust.png'),
(456,0x00,'image/jpeg','moto_ventilateur_clim_456.jpg','/images/products/car_exhaust.png'),
(457,0x00,'image/jpeg','courroie_compresseur_457.jpg','/images/products/car_exhaust.png'),
(458,0x00,'image/jpeg','embrayage_compresseur_clim_458.jpg','/images/products/car_exhaust.png'),
(459,0x00,'image/jpeg','durite_haute_pression_clim_459.jpg','/images/products/car_exhaust.png'),
(460,0x00,'image/jpeg','durite_basse_pression_clim_460.jpg','/images/products/car_exhaust.png'),
(461,0x00,'image/jpeg','robinet_de_charge_clim_461.jpg','/images/products/car_exhaust.png'),
(462,0x00,'image/jpeg','manom_tre_clim_bicolore_462.jpg','/images/products/car_exhaust.png'),
(463,0x00,'image/jpeg','recharge_gaz_r134a_463.jpg','/images/products/car_exhaust.png'),
(464,0x00,'image/jpeg','recharge_gaz_r1234yf_464.jpg','/images/products/car_exhaust.png'),
(465,0x00,'image/jpeg','huile_pag46_250ml_465.jpg','/images/products/car_exhaust.png'),
(466,0x00,'image/jpeg','kit_o_ring_tanch_it__466.jpg','/images/products/car_exhaust.png'),
(467,0x00,'image/jpeg','capteur_pression_clim_467.jpg','/images/products/car_exhaust.png'),
(468,0x00,'image/jpeg','thermostat_de_cabine_468.jpg','/images/products/car_exhaust.png'),
(469,0x00,'image/jpeg','bo_tier_de_clim_469.jpg','/images/products/car_exhaust.png'),
(470,0x00,'image/jpeg','filtre_cabin_anti_pollen_470.jpg','/images/products/car_exhaust.png'),
(471,0x00,'image/jpeg','ventilateur_habitacle_471.jpg','/images/products/car_exhaust.png'),
(472,0x00,'image/jpeg','r_sistance_ventilateur_472.jpg','/images/products/car_exhaust.png'),
(473,0x00,'image/jpeg','volet_air_chaud_froid_473.jpg','/images/products/car_exhaust.png'),
(474,0x00,'image/jpeg','actuateur_volet_mix_474.jpg','/images/products/car_exhaust.png'),
(475,0x00,'image/jpeg','module_r_gulation_clim_475.jpg','/images/products/car_exhaust.png'),
(476,0x00,'image/jpeg','sonde_temp_rature_int_rieure_476.jpg','/images/products/car_exhaust.png'),
(477,0x00,'image/jpeg','pressostat_double_basse_477.jpg','/images/products/car_exhaust.png'),
(478,0x00,'image/jpeg','pressostat_double_haute_478.jpg','/images/products/car_exhaust.png'),
(479,0x00,'image/jpeg','d_sodorisant_clim_479.jpg','/images/products/car_exhaust.png'),
(480,0x00,'image/jpeg','bombe_d_sinfectant_clim_480.jpg','/images/products/car_exhaust.png'),
(481,0x00,'image/jpeg','d_tecteur_fuite_uv_481.jpg','/images/products/car_exhaust.png'),
(482,0x00,'image/jpeg','colorant_uv_fuite_482.jpg','/images/products/car_exhaust.png'),
(483,0x00,'image/jpeg','raccord_rapide_r134_483.jpg','/images/products/car_exhaust.png'),
(484,0x00,'image/jpeg','raccord_rapide_r1234yf_484.jpg','/images/products/car_exhaust.png'),
(485,0x00,'image/jpeg','manom_tre_simple_basse_485.jpg','/images/products/car_exhaust.png'),
(486,0x00,'image/jpeg','manom_tre_simple_haute_486.jpg','/images/products/car_exhaust.png'),
(487,0x00,'image/jpeg','joint_torique_inox_487.jpg','/images/products/car_exhaust.png'),
(488,0x00,'image/jpeg','d_shumidificateur_coffre_488.jpg','/images/products/car_exhaust.png'),
(489,0x00,'image/jpeg','filtre_charbon_actif_489.jpg','/images/products/car_exhaust.png'),
(490,0x00,'image/jpeg','kit_entretien_clim_complet_490.jpg','/images/products/car_exhaust.png'),
(491,0x00,'image/jpeg','r_gulateur_d_bit_clim_491.jpg','/images/products/car_exhaust.png'),
(492,0x00,'image/jpeg','vanne_thermostatique_492.jpg','/images/products/car_exhaust.png'),
(493,0x00,'image/jpeg','s_cheur_d_shydrateur_493.jpg','/images/products/car_exhaust.png'),
(494,0x00,'image/jpeg','pressostat_triphas__494.jpg','/images/products/car_exhaust.png'),
(495,0x00,'image/jpeg','pression_de_service_jauge_495.jpg','/images/products/car_exhaust.png'),
(496,0x00,'image/jpeg','bouteille_recharge_gaz_496.jpg','/images/products/car_exhaust.png'),
(497,0x00,'image/jpeg','vannes_de_service_497.jpg','/images/products/car_exhaust.png'),
(498,0x00,'image/jpeg','bague_d_tanch_it__498.jpg','/images/products/car_exhaust.png'),
(499,0x00,'image/jpeg','soupape_anti_retour_499.jpg','/images/products/car_exhaust.png'),
(500,0x00,'image/jpeg','pompe_vide_clim_500.jpg','/images/products/car_exhaust.png');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


