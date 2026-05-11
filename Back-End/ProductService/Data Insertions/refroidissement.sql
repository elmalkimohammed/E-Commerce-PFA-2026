SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 7: Refroidissement
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(301,'Radiateur de refroidissement pour Renault Clio','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',536,47,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(302,'Thermostat pour Renault Clio','Pièce de rechange de haute qualité : Thermostat pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',111,154,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(303,'Ventilateur moteur pour Renault Clio','Pièce de rechange de haute qualité : Ventilateur moteur pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',537,60,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(304,'Sonde de température pour Renault Clio','Pièce de rechange de haute qualité : Sonde de température pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',144,70,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(305,'Vase d''expansion pour Renault Clio','Pièce de rechange de haute qualité : Vase d''expansion pour Renault Clio. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',75,96,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(306,'Radiateur de refroidissement pour Peugeot 208','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',672,80,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(307,'Thermostat pour Peugeot 208','Pièce de rechange de haute qualité : Thermostat pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',425,138,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(308,'Ventilateur moteur pour Peugeot 208','Pièce de rechange de haute qualité : Ventilateur moteur pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',420,165,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(309,'Sonde de température pour Peugeot 208','Pièce de rechange de haute qualité : Sonde de température pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',633,202,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(310,'Vase d''expansion pour Peugeot 208','Pièce de rechange de haute qualité : Vase d''expansion pour Peugeot 208. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',677,39,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(311,'Radiateur de refroidissement pour Volkswagen Golf','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',723,108,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(312,'Thermostat pour Volkswagen Golf','Pièce de rechange de haute qualité : Thermostat pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',486,133,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(313,'Ventilateur moteur pour Volkswagen Golf','Pièce de rechange de haute qualité : Ventilateur moteur pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,174,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(314,'Sonde de température pour Volkswagen Golf','Pièce de rechange de haute qualité : Sonde de température pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',783,195,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(315,'Vase d''expansion pour Volkswagen Golf','Pièce de rechange de haute qualité : Vase d''expansion pour Volkswagen Golf. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,28,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(316,'Radiateur de refroidissement pour BMW Série 3','Pièce de rechange de haute qualité : Radiateur de refroidissement pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',314,205,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(317,'Thermostat pour BMW Série 3','Pièce de rechange de haute qualité : Thermostat pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',750,174,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(318,'Ventilateur moteur pour BMW Série 3','Pièce de rechange de haute qualité : Ventilateur moteur pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',388,15,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(319,'Sonde de température pour BMW Série 3','Pièce de rechange de haute qualité : Sonde de température pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',451,146,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(320,'Vase d''expansion pour BMW Série 3','Pièce de rechange de haute qualité : Vase d''expansion pour BMW Série 3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',559,74,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(321,'Radiateur de refroidissement pour Mercedes Classe C','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',110,10,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(322,'Thermostat pour Mercedes Classe C','Pièce de rechange de haute qualité : Thermostat pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',194,112,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(323,'Ventilateur moteur pour Mercedes Classe C','Pièce de rechange de haute qualité : Ventilateur moteur pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',630,17,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(324,'Sonde de température pour Mercedes Classe C','Pièce de rechange de haute qualité : Sonde de température pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',815,81,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(325,'Vase d''expansion pour Mercedes Classe C','Pièce de rechange de haute qualité : Vase d''expansion pour Mercedes Classe C. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',623,58,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(326,'Radiateur de refroidissement pour Audi A4','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',136,83,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(327,'Thermostat pour Audi A4','Pièce de rechange de haute qualité : Thermostat pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',229,42,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(328,'Ventilateur moteur pour Audi A4','Pièce de rechange de haute qualité : Ventilateur moteur pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',216,29,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(329,'Sonde de température pour Audi A4','Pièce de rechange de haute qualité : Sonde de température pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',193,166,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(330,'Vase d''expansion pour Audi A4','Pièce de rechange de haute qualité : Vase d''expansion pour Audi A4. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',301,34,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(331,'Radiateur de refroidissement pour Toyota Yaris','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',83,126,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(332,'Thermostat pour Toyota Yaris','Pièce de rechange de haute qualité : Thermostat pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',368,167,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(333,'Ventilateur moteur pour Toyota Yaris','Pièce de rechange de haute qualité : Ventilateur moteur pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',174,191,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(334,'Sonde de température pour Toyota Yaris','Pièce de rechange de haute qualité : Sonde de température pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',561,195,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(335,'Vase d''expansion pour Toyota Yaris','Pièce de rechange de haute qualité : Vase d''expansion pour Toyota Yaris. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',204,199,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(336,'Radiateur de refroidissement pour Ford Fiesta','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',121,106,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(337,'Thermostat pour Ford Fiesta','Pièce de rechange de haute qualité : Thermostat pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',68,46,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(338,'Ventilateur moteur pour Ford Fiesta','Pièce de rechange de haute qualité : Ventilateur moteur pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',696,209,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(339,'Sonde de température pour Ford Fiesta','Pièce de rechange de haute qualité : Sonde de température pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',713,78,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(340,'Vase d''expansion pour Ford Fiesta','Pièce de rechange de haute qualité : Vase d''expansion pour Ford Fiesta. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',794,134,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(341,'Radiateur de refroidissement pour Citroën C3','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',521,11,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(342,'Thermostat pour Citroën C3','Pièce de rechange de haute qualité : Thermostat pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',596,25,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(343,'Ventilateur moteur pour Citroën C3','Pièce de rechange de haute qualité : Ventilateur moteur pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',583,178,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(344,'Sonde de température pour Citroën C3','Pièce de rechange de haute qualité : Sonde de température pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',225,11,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(345,'Vase d''expansion pour Citroën C3','Pièce de rechange de haute qualité : Vase d''expansion pour Citroën C3. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',810,197,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(346,'Radiateur de refroidissement pour Fiat 500','Pièce de rechange de haute qualité : Radiateur de refroidissement pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',115,209,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(347,'Thermostat pour Fiat 500','Pièce de rechange de haute qualité : Thermostat pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',766,185,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(348,'Ventilateur moteur pour Fiat 500','Pièce de rechange de haute qualité : Ventilateur moteur pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',381,166,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(349,'Sonde de température pour Fiat 500','Pièce de rechange de haute qualité : Sonde de température pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',249,173,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(350,'Vase d''expansion pour Fiat 500','Pièce de rechange de haute qualité : Vase d''expansion pour Fiat 500. Conçu pour offrir une performance optimale et une durabilité exceptionnelle pour votre véhicule.',764,51,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(301,0x00,'image/jpeg','radiateur_eau_complet_301.jpg','https://loremflickr.com/600/600/car,radiator?lock=301'),
(302,0x00,'image/jpeg','ventilateur_lectrique_302.jpg','https://loremflickr.com/600/600/car,thermostat?lock=302'),
(303,0x00,'image/jpeg','moto_ventilateur_303.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=303'),
(304,0x00,'image/jpeg','calandre_de_radiateur_304.jpg','https://loremflickr.com/600/600/car,sensor?lock=304'),
(305,0x00,'image/jpeg','durite_sup_rieure_305.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=305'),
(306,0x00,'image/jpeg','durite_inf_rieure_306.jpg','https://loremflickr.com/600/600/car,radiator?lock=306'),
(307,0x00,'image/jpeg','durite_de_d_gazage_307.jpg','https://loremflickr.com/600/600/car,thermostat?lock=307'),
(308,0x00,'image/jpeg','vase_d_expansion_308.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=308'),
(309,0x00,'image/jpeg','bouchon_vase_expansion_309.jpg','https://loremflickr.com/600/600/car,sensor?lock=309'),
(310,0x00,'image/jpeg','thermostat_complet_310.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=310'),
(311,0x00,'image/jpeg','bo_tier_eau_thermostat_311.jpg','https://loremflickr.com/600/600/car,radiator?lock=311'),
(312,0x00,'image/jpeg','pompe_eau_compl_te_312.jpg','https://loremflickr.com/600/600/car,thermostat?lock=312'),
(313,0x00,'image/jpeg','joint_pompe_eau_313.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=313'),
(314,0x00,'image/jpeg','radiateur_chauffage_hab_314.jpg','https://loremflickr.com/600/600/car,sensor?lock=314'),
(315,0x00,'image/jpeg','moteur_volet_chauffage_315.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=315'),
(316,0x00,'image/jpeg','sonde_temp_rature_eau_316.jpg','https://loremflickr.com/600/600/car,radiator?lock=316'),
(317,0x00,'image/jpeg','pressostat_liquide_refroid_317.jpg','https://loremflickr.com/600/600/car,thermostat?lock=317'),
(318,0x00,'image/jpeg','collier_durite_inox_318.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=318'),
(319,0x00,'image/jpeg','liquide_refroidissement_5l_319.jpg','https://loremflickr.com/600/600/car,sensor?lock=319'),
(320,0x00,'image/jpeg','kit_entretien_refroid_320.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=320'),
(321,0x00,'image/jpeg','_changeur_huile_eau_321.jpg','https://loremflickr.com/600/600/car,radiator?lock=321'),
(322,0x00,'image/jpeg','refroidisseur_egr_322.jpg','https://loremflickr.com/600/600/car,thermostat?lock=322'),
(323,0x00,'image/jpeg','thermoplongeur_323.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=323'),
(324,0x00,'image/jpeg','radiateur_intercooler_324.jpg','https://loremflickr.com/600/600/car,sensor?lock=324'),
(325,0x00,'image/jpeg','durite_intercooler_325.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=325'),
(326,0x00,'image/jpeg','radiateur_huile_bo_te_326.jpg','https://loremflickr.com/600/600/car,radiator?lock=326'),
(327,0x00,'image/jpeg','radiateur_clim_condenseur_327.jpg','https://loremflickr.com/600/600/car,thermostat?lock=327'),
(328,0x00,'image/jpeg','capuchon_bidon_eau_328.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=328'),
(329,0x00,'image/jpeg','bouchon_radiateur_1_3bar_329.jpg','https://loremflickr.com/600/600/car,sensor?lock=329'),
(330,0x00,'image/jpeg','r_servoir_d_gazage_330.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=330'),
(331,0x00,'image/jpeg','capteur_surchauffe_331.jpg','https://loremflickr.com/600/600/car,radiator?lock=331'),
(332,0x00,'image/jpeg','protection_antigel_40_c_332.jpg','https://loremflickr.com/600/600/car,thermostat?lock=332'),
(333,0x00,'image/jpeg','tuyau_raidisseur_333.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=333'),
(334,0x00,'image/jpeg','klips_durite_334.jpg','https://loremflickr.com/600/600/car,sensor?lock=334'),
(335,0x00,'image/jpeg','manchon_r_duction_durite_335.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=335'),
(336,0x00,'image/jpeg','cuvette_de_remplissage_336.jpg','https://loremflickr.com/600/600/car,radiator?lock=336'),
(337,0x00,'image/jpeg','d_bitm_tre_eau_337.jpg','https://loremflickr.com/600/600/car,thermostat?lock=337'),
(338,0x00,'image/jpeg','bride_de_durite_338.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=338'),
(339,0x00,'image/jpeg','support_radiateur_339.jpg','https://loremflickr.com/600/600/car,sensor?lock=339'),
(340,0x00,'image/jpeg','d_tartrant_circuit_refroid_340.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=340'),
(341,0x00,'image/jpeg','thermostat_sport_341.jpg','https://loremflickr.com/600/600/car,radiator?lock=341'),
(342,0x00,'image/jpeg','ventilateur_m_canique_342.jpg','https://loremflickr.com/600/600/car,thermostat?lock=342'),
(343,0x00,'image/jpeg','courroie_ventilateur_343.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=343'),
(344,0x00,'image/jpeg','viscorecoupleur_344.jpg','https://loremflickr.com/600/600/car,sensor?lock=344'),
(345,0x00,'image/jpeg','calandre_plastique_345.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=345'),
(346,0x00,'image/jpeg','d_flecteur_air_346.jpg','https://loremflickr.com/600/600/car,radiator?lock=346'),
(347,0x00,'image/jpeg','bouchon_remplissage_347.jpg','https://loremflickr.com/600/600/car,thermostat?lock=347'),
(348,0x00,'image/jpeg','purge_d_air_radiateur_348.jpg','https://loremflickr.com/600/600/car,engine,fan?lock=348'),
(349,0x00,'image/jpeg','s_parateur_huile_eau_349.jpg','https://loremflickr.com/600/600/car,sensor?lock=349'),
(350,0x00,'image/jpeg','sonde_pression_eau_350.jpg','https://loremflickr.com/600/600/car,coolant,tank?lock=350');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


