SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 7: Refroidissement
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(301,'Radiateur eau complet','Radiateur eau complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,47,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(302,'Ventilateur électrique','Ventilateur électrique â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,154,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(303,'Moto-ventilateur','Moto-ventilateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,60,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(304,'Calandre de radiateur','Calandre de radiateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,70,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(305,'Durite supérieure','Durite supérieure â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,96,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(306,'Durite inférieure','Durite inférieure â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,80,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(307,'Durite de dégazage','Durite de dégazage â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,138,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(308,'Vase d''expansion','Vase d''expansion â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,165,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(309,'Bouchon vase expansion','Bouchon vase expansion â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,202,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(310,'Thermostat complet','Thermostat complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,39,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(311,'Boîtier eau thermostat','Boîtier eau thermostat â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,108,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(312,'Pompe à eau complète','Pompe à eau complète â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,133,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(313,'Joint pompe à eau','Joint pompe à eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,174,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(314,'Radiateur chauffage hab','Radiateur chauffage hab â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,195,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(315,'Moteur volet chauffage','Moteur volet chauffage â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,28,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(316,'Sonde température eau','Sonde température eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,205,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(317,'Pressostat liquide refroid','Pressostat liquide refroid â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,174,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(318,'Collier durite inox','Collier durite inox â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,15,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(319,'Liquide refroidissement 5L','Liquide refroidissement 5L â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,146,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(320,'Kit entretien refroid','Kit entretien refroid â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,74,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(321,'Échangeur huile/eau','Échangeur huile/eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,10,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(322,'Refroidisseur EGR','Refroidisseur EGR â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,112,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(323,'Thermoplongeur','Thermoplongeur â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,17,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(324,'Radiateur intercooler','Radiateur intercooler â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,81,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(325,'Durite intercooler','Durite intercooler â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,58,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(326,'Radiateur huile boîte','Radiateur huile boîte â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,83,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(327,'Radiateur clim condenseur','Radiateur clim condenseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,42,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(328,'Capuchon bidon eau','Capuchon bidon eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,29,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(329,'Bouchon radiateur 1.3bar','Bouchon radiateur 1.3bar â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,166,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(330,'Réservoir dégazage','Réservoir dégazage â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,34,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(331,'Capteur surchauffe','Capteur surchauffe â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,126,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(332,'Protection antigel -40Â°C','Protection antigel -40Â°C â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,167,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(333,'Tuyau raidisseur','Tuyau raidisseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,191,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(334,'Klips durite','Klips durite â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,195,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(335,'Manchon réduction durite','Manchon réduction durite â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,199,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(336,'Cuvette de remplissage','Cuvette de remplissage â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,106,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(337,'Débitmètre eau','Débitmètre eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,46,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(338,'Bride de durite','Bride de durite â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,209,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(339,'Support radiateur','Support radiateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,78,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(340,'Détartrant circuit refroid','Détartrant circuit refroid â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,134,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(341,'Thermostat sport','Thermostat sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,11,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(342,'Ventilateur mécanique','Ventilateur mécanique â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,25,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(343,'Courroie ventilateur','Courroie ventilateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,178,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(344,'Viscorecoupleur','Viscorecoupleur â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,11,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(345,'Calandre plastique','Calandre plastique â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,197,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(346,'Déflecteur air','Déflecteur air â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,209,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(347,'Bouchon remplissage','Bouchon remplissage â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,185,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(348,'Purge d''air radiateur','Purge d''air radiateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,166,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(349,'Séparateur huile/eau','Séparateur huile/eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,173,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000'),
(350,'Sonde pression eau','Sonde pression eau â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,51,'{"categorie":"Refroidissement","marque":"OEM","qualite":"premium"}','Refroidissement','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(301,0x00,'image/jpeg','radiateur_eau_complet_301.jpg','https://picsum.photos/seed/301/600/600'),
(302,0x00,'image/jpeg','ventilateur_lectrique_302.jpg','https://picsum.photos/seed/302/600/600'),
(303,0x00,'image/jpeg','moto_ventilateur_303.jpg','https://picsum.photos/seed/303/600/600'),
(304,0x00,'image/jpeg','calandre_de_radiateur_304.jpg','https://picsum.photos/seed/304/600/600'),
(305,0x00,'image/jpeg','durite_sup_rieure_305.jpg','https://picsum.photos/seed/305/600/600'),
(306,0x00,'image/jpeg','durite_inf_rieure_306.jpg','https://picsum.photos/seed/306/600/600'),
(307,0x00,'image/jpeg','durite_de_d_gazage_307.jpg','https://picsum.photos/seed/307/600/600'),
(308,0x00,'image/jpeg','vase_d_expansion_308.jpg','https://picsum.photos/seed/308/600/600'),
(309,0x00,'image/jpeg','bouchon_vase_expansion_309.jpg','https://picsum.photos/seed/309/600/600'),
(310,0x00,'image/jpeg','thermostat_complet_310.jpg','https://picsum.photos/seed/310/600/600'),
(311,0x00,'image/jpeg','bo_tier_eau_thermostat_311.jpg','https://picsum.photos/seed/311/600/600'),
(312,0x00,'image/jpeg','pompe_eau_compl_te_312.jpg','https://picsum.photos/seed/312/600/600'),
(313,0x00,'image/jpeg','joint_pompe_eau_313.jpg','https://picsum.photos/seed/313/600/600'),
(314,0x00,'image/jpeg','radiateur_chauffage_hab_314.jpg','https://picsum.photos/seed/314/600/600'),
(315,0x00,'image/jpeg','moteur_volet_chauffage_315.jpg','https://picsum.photos/seed/315/600/600'),
(316,0x00,'image/jpeg','sonde_temp_rature_eau_316.jpg','https://picsum.photos/seed/316/600/600'),
(317,0x00,'image/jpeg','pressostat_liquide_refroid_317.jpg','https://picsum.photos/seed/317/600/600'),
(318,0x00,'image/jpeg','collier_durite_inox_318.jpg','https://picsum.photos/seed/318/600/600'),
(319,0x00,'image/jpeg','liquide_refroidissement_5l_319.jpg','https://picsum.photos/seed/319/600/600'),
(320,0x00,'image/jpeg','kit_entretien_refroid_320.jpg','https://picsum.photos/seed/320/600/600'),
(321,0x00,'image/jpeg','_changeur_huile_eau_321.jpg','https://picsum.photos/seed/321/600/600'),
(322,0x00,'image/jpeg','refroidisseur_egr_322.jpg','https://picsum.photos/seed/322/600/600'),
(323,0x00,'image/jpeg','thermoplongeur_323.jpg','https://picsum.photos/seed/323/600/600'),
(324,0x00,'image/jpeg','radiateur_intercooler_324.jpg','https://picsum.photos/seed/324/600/600'),
(325,0x00,'image/jpeg','durite_intercooler_325.jpg','https://picsum.photos/seed/325/600/600'),
(326,0x00,'image/jpeg','radiateur_huile_bo_te_326.jpg','https://picsum.photos/seed/326/600/600'),
(327,0x00,'image/jpeg','radiateur_clim_condenseur_327.jpg','https://picsum.photos/seed/327/600/600'),
(328,0x00,'image/jpeg','capuchon_bidon_eau_328.jpg','https://picsum.photos/seed/328/600/600'),
(329,0x00,'image/jpeg','bouchon_radiateur_1_3bar_329.jpg','https://picsum.photos/seed/329/600/600'),
(330,0x00,'image/jpeg','r_servoir_d_gazage_330.jpg','https://picsum.photos/seed/330/600/600'),
(331,0x00,'image/jpeg','capteur_surchauffe_331.jpg','https://picsum.photos/seed/331/600/600'),
(332,0x00,'image/jpeg','protection_antigel_40_c_332.jpg','https://picsum.photos/seed/332/600/600'),
(333,0x00,'image/jpeg','tuyau_raidisseur_333.jpg','https://picsum.photos/seed/333/600/600'),
(334,0x00,'image/jpeg','klips_durite_334.jpg','https://picsum.photos/seed/334/600/600'),
(335,0x00,'image/jpeg','manchon_r_duction_durite_335.jpg','https://picsum.photos/seed/335/600/600'),
(336,0x00,'image/jpeg','cuvette_de_remplissage_336.jpg','https://picsum.photos/seed/336/600/600'),
(337,0x00,'image/jpeg','d_bitm_tre_eau_337.jpg','https://picsum.photos/seed/337/600/600'),
(338,0x00,'image/jpeg','bride_de_durite_338.jpg','https://picsum.photos/seed/338/600/600'),
(339,0x00,'image/jpeg','support_radiateur_339.jpg','https://picsum.photos/seed/339/600/600'),
(340,0x00,'image/jpeg','d_tartrant_circuit_refroid_340.jpg','https://picsum.photos/seed/340/600/600'),
(341,0x00,'image/jpeg','thermostat_sport_341.jpg','https://picsum.photos/seed/341/600/600'),
(342,0x00,'image/jpeg','ventilateur_m_canique_342.jpg','https://picsum.photos/seed/342/600/600'),
(343,0x00,'image/jpeg','courroie_ventilateur_343.jpg','https://picsum.photos/seed/343/600/600'),
(344,0x00,'image/jpeg','viscorecoupleur_344.jpg','https://picsum.photos/seed/344/600/600'),
(345,0x00,'image/jpeg','calandre_plastique_345.jpg','https://picsum.photos/seed/345/600/600'),
(346,0x00,'image/jpeg','d_flecteur_air_346.jpg','https://picsum.photos/seed/346/600/600'),
(347,0x00,'image/jpeg','bouchon_remplissage_347.jpg','https://picsum.photos/seed/347/600/600'),
(348,0x00,'image/jpeg','purge_d_air_radiateur_348.jpg','https://picsum.photos/seed/348/600/600'),
(349,0x00,'image/jpeg','s_parateur_huile_eau_349.jpg','https://picsum.photos/seed/349/600/600'),
(350,0x00,'image/jpeg','sonde_pression_eau_350.jpg','https://picsum.photos/seed/350/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


