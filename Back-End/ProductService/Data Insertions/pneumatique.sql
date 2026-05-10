SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 9: Pneumatiques & Jantes
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(401,'Pneu été 205/55R16','Pneu été 205/55R16 â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,209,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(402,'Pneu hiver 205/55R16','Pneu hiver 205/55R16 â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,69,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(403,'Pneu 4 saisons 195/65R15','Pneu 4 saisons 195/65R15 â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,161,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(404,'Pneu sport 225/45R17','Pneu sport 225/45R17 â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,197,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(405,'Jante alliage 16 pouces','Jante alliage 16 pouces â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,178,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(406,'Jante acier 15 pouces','Jante acier 15 pouces â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,173,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(407,'Jante sport 17 pouces','Jante sport 17 pouces â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,111,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(408,'Kit jante + pneu été','Kit jante + pneu été â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,205,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(409,'Valve de gonflage','Valve de gonflage â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,109,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(410,'Capteur TPMS','Capteur TPMS â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,27,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(411,'Kit réparation crevaison','Kit réparation crevaison â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,19,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(412,'Cric télescopique','Cric télescopique â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,102,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(413,'Clé à chocs 1/2','Clé à chocs 1/2 â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,194,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(414,'Douille 17mm','Douille 17mm â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,198,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(415,'Écrou antivol','Écrou antivol â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,174,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(416,'Boulons roue M12x1.5','Boulons roue M12x1.5 â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,188,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(417,'Adaptateur de jante','Adaptateur de jante â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,10,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(418,'Bague de centrage','Bague de centrage â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,133,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(419,'Cale de roue','Cale de roue â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,145,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(420,'Gonfleur compresseur','Gonfleur compresseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,98,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(421,'Jauge pression pneu','Jauge pression pneu â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,179,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(422,'Balance roue','Balance roue â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,52,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(423,'Pneu rechapé 175/65R14','Pneu rechapé 175/65R14 â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,163,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(424,'Pneu run flat 225/50R17','Pneu run flat 225/50R17 â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,148,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(425,'Mousse anti-crevaison','Mousse anti-crevaison â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,56,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(426,'Kit équilibrage','Kit équilibrage â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,184,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(427,'Pneu tout terrain 235/70R16','Pneu tout terrain 235/70R16 â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,117,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(428,'Jante 4x4 18 pouces','Jante 4x4 18 pouces â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,74,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(429,'Enjoliveur 15 pouces','Enjoliveur 15 pouces â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,22,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(430,'Capuchon valve chrome','Capuchon valve chrome â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,176,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(431,'Bague de valve','Bague de valve â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,84,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(432,'Pneu rechapé 185/60R15','Pneu rechapé 185/60R15 â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,58,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(433,'Jante carbone 18p','Jante carbone 18p â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,36,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(434,'Sigle centre jante','Sigle centre jante â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,46,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(435,'Couvre-jante plastique','Couvre-jante plastique â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,66,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(436,'Cire pneu brillant','Cire pneu brillant â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,131,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(437,'Pneu moto 120/70-14','Pneu moto 120/70-14 â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,140,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(438,'Biellette jante réglable','Biellette jante réglable â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,188,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(439,'Vis tungstène jante','Vis tungstène jante â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,142,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(440,'Boulons sphériques','Boulons sphériques â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,54,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(441,'Extracteur de valve','Extracteur de valve â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,138,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(442,'Pince monte-pneu','Pince monte-pneu â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,130,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(443,'Démonte-pneu','Démonte-pneu â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,51,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(444,'Colle valve tubeless','Colle valve tubeless â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,31,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(445,'Rustine tubeless','Rustine tubeless â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,83,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(446,'Mastic pneu','Mastic pneu â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,59,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(447,'Gonfleur azote','Gonfleur azote â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,171,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(448,'Support roue secours','Support roue secours â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,30,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(449,'Verrouillage roue secours','Verrouillage roue secours â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,132,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000'),
(450,'Sac transport pneu','Sac transport pneu â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,200,'{"categorie":"Pneumatiques & Jantes","marque":"OEM","qualite":"premium"}','Pneumatiques & Jantes','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(401,0x00,'image/jpeg','pneu_t_205_55r16_401.jpg','https://picsum.photos/seed/401/600/600'),
(402,0x00,'image/jpeg','pneu_hiver_205_55r16_402.jpg','https://picsum.photos/seed/402/600/600'),
(403,0x00,'image/jpeg','pneu_4_saisons_195_65r15_403.jpg','https://picsum.photos/seed/403/600/600'),
(404,0x00,'image/jpeg','pneu_sport_225_45r17_404.jpg','https://picsum.photos/seed/404/600/600'),
(405,0x00,'image/jpeg','jante_alliage_16_pouces_405.jpg','https://picsum.photos/seed/405/600/600'),
(406,0x00,'image/jpeg','jante_acier_15_pouces_406.jpg','https://picsum.photos/seed/406/600/600'),
(407,0x00,'image/jpeg','jante_sport_17_pouces_407.jpg','https://picsum.photos/seed/407/600/600'),
(408,0x00,'image/jpeg','kit_jante_pneu_t__408.jpg','https://picsum.photos/seed/408/600/600'),
(409,0x00,'image/jpeg','valve_de_gonflage_409.jpg','https://picsum.photos/seed/409/600/600'),
(410,0x00,'image/jpeg','capteur_tpms_410.jpg','https://picsum.photos/seed/410/600/600'),
(411,0x00,'image/jpeg','kit_r_paration_crevaison_411.jpg','https://picsum.photos/seed/411/600/600'),
(412,0x00,'image/jpeg','cric_t_lescopique_412.jpg','https://picsum.photos/seed/412/600/600'),
(413,0x00,'image/jpeg','cl_chocs_1_2_413.jpg','https://picsum.photos/seed/413/600/600'),
(414,0x00,'image/jpeg','douille_17mm_414.jpg','https://picsum.photos/seed/414/600/600'),
(415,0x00,'image/jpeg','_crou_antivol_415.jpg','https://picsum.photos/seed/415/600/600'),
(416,0x00,'image/jpeg','boulons_roue_m12x1_5_416.jpg','https://picsum.photos/seed/416/600/600'),
(417,0x00,'image/jpeg','adaptateur_de_jante_417.jpg','https://picsum.photos/seed/417/600/600'),
(418,0x00,'image/jpeg','bague_de_centrage_418.jpg','https://picsum.photos/seed/418/600/600'),
(419,0x00,'image/jpeg','cale_de_roue_419.jpg','https://picsum.photos/seed/419/600/600'),
(420,0x00,'image/jpeg','gonfleur_compresseur_420.jpg','https://picsum.photos/seed/420/600/600'),
(421,0x00,'image/jpeg','jauge_pression_pneu_421.jpg','https://picsum.photos/seed/421/600/600'),
(422,0x00,'image/jpeg','balance_roue_422.jpg','https://picsum.photos/seed/422/600/600'),
(423,0x00,'image/jpeg','pneu_rechap_175_65r14_423.jpg','https://picsum.photos/seed/423/600/600'),
(424,0x00,'image/jpeg','pneu_run_flat_225_50r17_424.jpg','https://picsum.photos/seed/424/600/600'),
(425,0x00,'image/jpeg','mousse_anti_crevaison_425.jpg','https://picsum.photos/seed/425/600/600'),
(426,0x00,'image/jpeg','kit_quilibrage_426.jpg','https://picsum.photos/seed/426/600/600'),
(427,0x00,'image/jpeg','pneu_tout_terrain_235_70r16_427.jpg','https://picsum.photos/seed/427/600/600'),
(428,0x00,'image/jpeg','jante_4x4_18_pouces_428.jpg','https://picsum.photos/seed/428/600/600'),
(429,0x00,'image/jpeg','enjoliveur_15_pouces_429.jpg','https://picsum.photos/seed/429/600/600'),
(430,0x00,'image/jpeg','capuchon_valve_chrome_430.jpg','https://picsum.photos/seed/430/600/600'),
(431,0x00,'image/jpeg','bague_de_valve_431.jpg','https://picsum.photos/seed/431/600/600'),
(432,0x00,'image/jpeg','pneu_rechap_185_60r15_432.jpg','https://picsum.photos/seed/432/600/600'),
(433,0x00,'image/jpeg','jante_carbone_18p_433.jpg','https://picsum.photos/seed/433/600/600'),
(434,0x00,'image/jpeg','sigle_centre_jante_434.jpg','https://picsum.photos/seed/434/600/600'),
(435,0x00,'image/jpeg','couvre_jante_plastique_435.jpg','https://picsum.photos/seed/435/600/600'),
(436,0x00,'image/jpeg','cire_pneu_brillant_436.jpg','https://picsum.photos/seed/436/600/600'),
(437,0x00,'image/jpeg','pneu_moto_120_70_14_437.jpg','https://picsum.photos/seed/437/600/600'),
(438,0x00,'image/jpeg','biellette_jante_r_glable_438.jpg','https://picsum.photos/seed/438/600/600'),
(439,0x00,'image/jpeg','vis_tungst_ne_jante_439.jpg','https://picsum.photos/seed/439/600/600'),
(440,0x00,'image/jpeg','boulons_sph_riques_440.jpg','https://picsum.photos/seed/440/600/600'),
(441,0x00,'image/jpeg','extracteur_de_valve_441.jpg','https://picsum.photos/seed/441/600/600'),
(442,0x00,'image/jpeg','pince_monte_pneu_442.jpg','https://picsum.photos/seed/442/600/600'),
(443,0x00,'image/jpeg','d_monte_pneu_443.jpg','https://picsum.photos/seed/443/600/600'),
(444,0x00,'image/jpeg','colle_valve_tubeless_444.jpg','https://picsum.photos/seed/444/600/600'),
(445,0x00,'image/jpeg','rustine_tubeless_445.jpg','https://picsum.photos/seed/445/600/600'),
(446,0x00,'image/jpeg','mastic_pneu_446.jpg','https://picsum.photos/seed/446/600/600'),
(447,0x00,'image/jpeg','gonfleur_azote_447.jpg','https://picsum.photos/seed/447/600/600'),
(448,0x00,'image/jpeg','support_roue_secours_448.jpg','https://picsum.photos/seed/448/600/600'),
(449,0x00,'image/jpeg','verrouillage_roue_secours_449.jpg','https://picsum.photos/seed/449/600/600'),
(450,0x00,'image/jpeg','sac_transport_pneu_450.jpg','https://picsum.photos/seed/450/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


