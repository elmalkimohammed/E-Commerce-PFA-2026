SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 10: Climatisation
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(451,'Compresseur climatisation','Compresseur climatisation â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,16,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(452,'Condenseur clim','Condenseur clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,79,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(453,'Filtre déshydrateur','Filtre déshydrateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,37,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(454,'Détendeur thermostatique','Détendeur thermostatique â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,201,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(455,'Évaporateur clim','Évaporateur clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,41,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(456,'Moto-ventilateur clim','Moto-ventilateur clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,165,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(457,'Courroie compresseur','Courroie compresseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,120,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(458,'Embrayage compresseur clim','Embrayage compresseur clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,191,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(459,'Durite haute pression clim','Durite haute pression clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,70,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(460,'Durite basse pression clim','Durite basse pression clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,33,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(461,'Robinet de charge clim','Robinet de charge clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,73,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(462,'Manomètre clim bicolore','Manomètre clim bicolore â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,179,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(463,'Recharge gaz R134a','Recharge gaz R134a â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,160,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(464,'Recharge gaz R1234yf','Recharge gaz R1234yf â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,56,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(465,'Huile PAG46 250ml','Huile PAG46 250ml â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,192,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(466,'Kit O-ring étanchéité','Kit O-ring étanchéité â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,82,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(467,'Capteur pression clim','Capteur pression clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,32,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(468,'Thermostat de cabine','Thermostat de cabine â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,202,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(469,'Boîtier de clim','Boîtier de clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,105,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(470,'Filtre cabin anti-pollen','Filtre cabin anti-pollen â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,17,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(471,'Ventilateur habitacle','Ventilateur habitacle â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,117,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(472,'Résistance ventilateur','Résistance ventilateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,180,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(473,'Volet air chaud/froid','Volet air chaud/froid â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,197,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(474,'Actuateur volet mix','Actuateur volet mix â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,77,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(475,'Module régulation clim','Module régulation clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,142,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(476,'Sonde température intérieure','Sonde température intérieure â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,92,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(477,'Pressostat double basse','Pressostat double basse â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,147,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(478,'Pressostat double haute','Pressostat double haute â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,28,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(479,'Désodorisant clim','Désodorisant clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,76,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(480,'Bombe désinfectant clim','Bombe désinfectant clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,31,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(481,'Détecteur fuite UV','Détecteur fuite UV â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,181,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(482,'Colorant UV fuite','Colorant UV fuite â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,175,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(483,'Raccord rapide R134','Raccord rapide R134 â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,22,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(484,'Raccord rapide R1234yf','Raccord rapide R1234yf â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,83,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(485,'Manomètre simple basse','Manomètre simple basse â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,124,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(486,'Manomètre simple haute','Manomètre simple haute â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,11,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(487,'Joint torique inox','Joint torique inox â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,73,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(488,'Déshumidificateur coffre','Déshumidificateur coffre â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,174,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(489,'Filtre charbon actif','Filtre charbon actif â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,192,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(490,'Kit entretien clim complet','Kit entretien clim complet â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,158,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(491,'Régulateur débit clim','Régulateur débit clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,35,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(492,'Vanne thermostatique','Vanne thermostatique â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,205,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(493,'Sécheur déshydrateur','Sécheur déshydrateur â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,171,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(494,'Pressostat triphasé','Pressostat triphasé â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,86,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(495,'Pression de service jauge','Pression de service jauge â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,103,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(496,'Bouteille recharge gaz','Bouteille recharge gaz â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,193,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(497,'Vannes de service','Vannes de service â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,21,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(498,'Bague d''étanchéité','Bague d''étanchéité â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,68,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(499,'Soupape anti-retour','Soupape anti-retour â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,198,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000'),
(500,'Pompe à vide clim','Pompe à vide clim â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,184,'{"categorie":"Climatisation","marque":"OEM","qualite":"premium"}','Climatisation','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(451,0x00,'image/jpeg','compresseur_climatisation_451.jpg','https://picsum.photos/seed/451/600/600'),
(452,0x00,'image/jpeg','condenseur_clim_452.jpg','https://picsum.photos/seed/452/600/600'),
(453,0x00,'image/jpeg','filtre_d_shydrateur_453.jpg','https://picsum.photos/seed/453/600/600'),
(454,0x00,'image/jpeg','d_tendeur_thermostatique_454.jpg','https://picsum.photos/seed/454/600/600'),
(455,0x00,'image/jpeg','_vaporateur_clim_455.jpg','https://picsum.photos/seed/455/600/600'),
(456,0x00,'image/jpeg','moto_ventilateur_clim_456.jpg','https://picsum.photos/seed/456/600/600'),
(457,0x00,'image/jpeg','courroie_compresseur_457.jpg','https://picsum.photos/seed/457/600/600'),
(458,0x00,'image/jpeg','embrayage_compresseur_clim_458.jpg','https://picsum.photos/seed/458/600/600'),
(459,0x00,'image/jpeg','durite_haute_pression_clim_459.jpg','https://picsum.photos/seed/459/600/600'),
(460,0x00,'image/jpeg','durite_basse_pression_clim_460.jpg','https://picsum.photos/seed/460/600/600'),
(461,0x00,'image/jpeg','robinet_de_charge_clim_461.jpg','https://picsum.photos/seed/461/600/600'),
(462,0x00,'image/jpeg','manom_tre_clim_bicolore_462.jpg','https://picsum.photos/seed/462/600/600'),
(463,0x00,'image/jpeg','recharge_gaz_r134a_463.jpg','https://picsum.photos/seed/463/600/600'),
(464,0x00,'image/jpeg','recharge_gaz_r1234yf_464.jpg','https://picsum.photos/seed/464/600/600'),
(465,0x00,'image/jpeg','huile_pag46_250ml_465.jpg','https://picsum.photos/seed/465/600/600'),
(466,0x00,'image/jpeg','kit_o_ring_tanch_it__466.jpg','https://picsum.photos/seed/466/600/600'),
(467,0x00,'image/jpeg','capteur_pression_clim_467.jpg','https://picsum.photos/seed/467/600/600'),
(468,0x00,'image/jpeg','thermostat_de_cabine_468.jpg','https://picsum.photos/seed/468/600/600'),
(469,0x00,'image/jpeg','bo_tier_de_clim_469.jpg','https://picsum.photos/seed/469/600/600'),
(470,0x00,'image/jpeg','filtre_cabin_anti_pollen_470.jpg','https://picsum.photos/seed/470/600/600'),
(471,0x00,'image/jpeg','ventilateur_habitacle_471.jpg','https://picsum.photos/seed/471/600/600'),
(472,0x00,'image/jpeg','r_sistance_ventilateur_472.jpg','https://picsum.photos/seed/472/600/600'),
(473,0x00,'image/jpeg','volet_air_chaud_froid_473.jpg','https://picsum.photos/seed/473/600/600'),
(474,0x00,'image/jpeg','actuateur_volet_mix_474.jpg','https://picsum.photos/seed/474/600/600'),
(475,0x00,'image/jpeg','module_r_gulation_clim_475.jpg','https://picsum.photos/seed/475/600/600'),
(476,0x00,'image/jpeg','sonde_temp_rature_int_rieure_476.jpg','https://picsum.photos/seed/476/600/600'),
(477,0x00,'image/jpeg','pressostat_double_basse_477.jpg','https://picsum.photos/seed/477/600/600'),
(478,0x00,'image/jpeg','pressostat_double_haute_478.jpg','https://picsum.photos/seed/478/600/600'),
(479,0x00,'image/jpeg','d_sodorisant_clim_479.jpg','https://picsum.photos/seed/479/600/600'),
(480,0x00,'image/jpeg','bombe_d_sinfectant_clim_480.jpg','https://picsum.photos/seed/480/600/600'),
(481,0x00,'image/jpeg','d_tecteur_fuite_uv_481.jpg','https://picsum.photos/seed/481/600/600'),
(482,0x00,'image/jpeg','colorant_uv_fuite_482.jpg','https://picsum.photos/seed/482/600/600'),
(483,0x00,'image/jpeg','raccord_rapide_r134_483.jpg','https://picsum.photos/seed/483/600/600'),
(484,0x00,'image/jpeg','raccord_rapide_r1234yf_484.jpg','https://picsum.photos/seed/484/600/600'),
(485,0x00,'image/jpeg','manom_tre_simple_basse_485.jpg','https://picsum.photos/seed/485/600/600'),
(486,0x00,'image/jpeg','manom_tre_simple_haute_486.jpg','https://picsum.photos/seed/486/600/600'),
(487,0x00,'image/jpeg','joint_torique_inox_487.jpg','https://picsum.photos/seed/487/600/600'),
(488,0x00,'image/jpeg','d_shumidificateur_coffre_488.jpg','https://picsum.photos/seed/488/600/600'),
(489,0x00,'image/jpeg','filtre_charbon_actif_489.jpg','https://picsum.photos/seed/489/600/600'),
(490,0x00,'image/jpeg','kit_entretien_clim_complet_490.jpg','https://picsum.photos/seed/490/600/600'),
(491,0x00,'image/jpeg','r_gulateur_d_bit_clim_491.jpg','https://picsum.photos/seed/491/600/600'),
(492,0x00,'image/jpeg','vanne_thermostatique_492.jpg','https://picsum.photos/seed/492/600/600'),
(493,0x00,'image/jpeg','s_cheur_d_shydrateur_493.jpg','https://picsum.photos/seed/493/600/600'),
(494,0x00,'image/jpeg','pressostat_triphas__494.jpg','https://picsum.photos/seed/494/600/600'),
(495,0x00,'image/jpeg','pression_de_service_jauge_495.jpg','https://picsum.photos/seed/495/600/600'),
(496,0x00,'image/jpeg','bouteille_recharge_gaz_496.jpg','https://picsum.photos/seed/496/600/600'),
(497,0x00,'image/jpeg','vannes_de_service_497.jpg','https://picsum.photos/seed/497/600/600'),
(498,0x00,'image/jpeg','bague_d_tanch_it__498.jpg','https://picsum.photos/seed/498/600/600'),
(499,0x00,'image/jpeg','soupape_anti_retour_499.jpg','https://picsum.photos/seed/499/600/600'),
(500,0x00,'image/jpeg','pompe_vide_clim_500.jpg','https://picsum.photos/seed/500/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


