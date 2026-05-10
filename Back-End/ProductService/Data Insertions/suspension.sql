SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 4: Suspension
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(151,'Amortisseur avant gauche','Amortisseur avant gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,167,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(152,'Amortisseur avant droit','Amortisseur avant droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,81,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(153,'Amortisseur arrière gauche','Amortisseur arrière gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,38,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(154,'Amortisseur arrière droit','Amortisseur arrière droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,99,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(155,'Ressort hélicoÃ¯dal avant','Ressort hélicoÃ¯dal avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,35,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(156,'Ressort hélicoÃ¯dal arrière','Ressort hélicoÃ¯dal arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,67,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(157,'Kit amortisseurs réglables','Kit amortisseurs réglables â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,175,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(158,'Silent bloc bras','Silent bloc bras â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,37,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(159,'Triangle inférieur gauche','Triangle inférieur gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,104,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(160,'Triangle inférieur droit','Triangle inférieur droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,172,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(161,'Rotule de direction','Rotule de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,132,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(162,'Biellette de direction','Biellette de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,21,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(163,'Crémaillère direction','Crémaillère direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,94,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(164,'Pompe direction assistée','Pompe direction assistée â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(165,'Colonne de direction','Colonne de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,50,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(166,'Barre stabilisatrice AV','Barre stabilisatrice AV â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,190,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(167,'Barre stabilisatrice AR','Barre stabilisatrice AR â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,116,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(168,'Silent bloc de barre stab','Silent bloc de barre stab â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,182,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(169,'Butée de suspension','Butée de suspension â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,199,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(170,'Coupelle d''amortisseur','Coupelle d''amortisseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,209,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(171,'Roulement de roue avant','Roulement de roue avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,114,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(172,'Roulement de roue arrière','Roulement de roue arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,95,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(173,'Moyeu de roue avant','Moyeu de roue avant â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,35,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(174,'Fusée d''essieu','Fusée d''essieu â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,45,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(175,'Rotule de suspension','Rotule de suspension â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,42,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(176,'Kit bras de suspension','Kit bras de suspension â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,121,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(177,'Tirant de réglage','Tirant de réglage â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,115,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(178,'Biellette antirollbar','Biellette antirollbar â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,106,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(179,'Kit ressorts sport','Kit ressorts sport â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,39,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(180,'Amortisseur à gaz','Amortisseur à gaz â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,182,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(181,'Combiné fileté street','Combiné fileté street â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,47,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(182,'Kit rehausse','Kit rehausse â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,66,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(183,'Cric rouleur','Cric rouleur â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,55,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(184,'Béquille de levage','Béquille de levage â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,50,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(185,'Rondelle de cale ressort','Rondelle de cale ressort â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,26,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(186,'Chape de ressort','Chape de ressort â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,191,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(187,'Ancrage ressort','Ancrage ressort â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,52,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(188,'Tube amortisseur','Tube amortisseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,171,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(189,'Joint spy amortisseur','Joint spy amortisseur â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,165,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(190,'Bague de suspension','Bague de suspension â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,157,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(191,'Rotule axiale','Rotule axiale â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(192,'Rotule radiale','Rotule radiale â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,17,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(193,'Palier de direction','Palier de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,10,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(194,'Pivot de direction','Pivot de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,94,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(195,'Tirant de carrossage','Tirant de carrossage â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,169,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(196,'Bielle de direction','Bielle de direction â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,28,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(197,'Kit géométrie','Kit géométrie â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,71,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(198,'Silentbloc moteur','Silentbloc moteur â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,123,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(199,'Silentbloc boite','Silentbloc boite â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,162,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000'),
(200,'Cale de suspension','Cale de suspension â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,151,'{"categorie":"Suspension","marque":"OEM","qualite":"premium"}','Suspension','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(151,0x00,'image/jpeg','amortisseur_avant_gauche_151.jpg','https://picsum.photos/seed/151/600/600'),
(152,0x00,'image/jpeg','amortisseur_avant_droit_152.jpg','https://picsum.photos/seed/152/600/600'),
(153,0x00,'image/jpeg','amortisseur_arri_re_gauche_153.jpg','https://picsum.photos/seed/153/600/600'),
(154,0x00,'image/jpeg','amortisseur_arri_re_droit_154.jpg','https://picsum.photos/seed/154/600/600'),
(155,0x00,'image/jpeg','ressort_h_lico_dal_avant_155.jpg','https://picsum.photos/seed/155/600/600'),
(156,0x00,'image/jpeg','ressort_h_lico_dal_arri_re_156.jpg','https://picsum.photos/seed/156/600/600'),
(157,0x00,'image/jpeg','kit_amortisseurs_r_glables_157.jpg','https://picsum.photos/seed/157/600/600'),
(158,0x00,'image/jpeg','silent_bloc_bras_158.jpg','https://picsum.photos/seed/158/600/600'),
(159,0x00,'image/jpeg','triangle_inf_rieur_gauche_159.jpg','https://picsum.photos/seed/159/600/600'),
(160,0x00,'image/jpeg','triangle_inf_rieur_droit_160.jpg','https://picsum.photos/seed/160/600/600'),
(161,0x00,'image/jpeg','rotule_de_direction_161.jpg','https://picsum.photos/seed/161/600/600'),
(162,0x00,'image/jpeg','biellette_de_direction_162.jpg','https://picsum.photos/seed/162/600/600'),
(163,0x00,'image/jpeg','cr_maill_re_direction_163.jpg','https://picsum.photos/seed/163/600/600'),
(164,0x00,'image/jpeg','pompe_direction_assist_e_164.jpg','https://picsum.photos/seed/164/600/600'),
(165,0x00,'image/jpeg','colonne_de_direction_165.jpg','https://picsum.photos/seed/165/600/600'),
(166,0x00,'image/jpeg','barre_stabilisatrice_av_166.jpg','https://picsum.photos/seed/166/600/600'),
(167,0x00,'image/jpeg','barre_stabilisatrice_ar_167.jpg','https://picsum.photos/seed/167/600/600'),
(168,0x00,'image/jpeg','silent_bloc_de_barre_stab_168.jpg','https://picsum.photos/seed/168/600/600'),
(169,0x00,'image/jpeg','but_e_de_suspension_169.jpg','https://picsum.photos/seed/169/600/600'),
(170,0x00,'image/jpeg','coupelle_d_amortisseur_170.jpg','https://picsum.photos/seed/170/600/600'),
(171,0x00,'image/jpeg','roulement_de_roue_avant_171.jpg','https://picsum.photos/seed/171/600/600'),
(172,0x00,'image/jpeg','roulement_de_roue_arri_re_172.jpg','https://picsum.photos/seed/172/600/600'),
(173,0x00,'image/jpeg','moyeu_de_roue_avant_173.jpg','https://picsum.photos/seed/173/600/600'),
(174,0x00,'image/jpeg','fus_e_d_essieu_174.jpg','https://picsum.photos/seed/174/600/600'),
(175,0x00,'image/jpeg','rotule_de_suspension_175.jpg','https://picsum.photos/seed/175/600/600'),
(176,0x00,'image/jpeg','kit_bras_de_suspension_176.jpg','https://picsum.photos/seed/176/600/600'),
(177,0x00,'image/jpeg','tirant_de_r_glage_177.jpg','https://picsum.photos/seed/177/600/600'),
(178,0x00,'image/jpeg','biellette_antirollbar_178.jpg','https://picsum.photos/seed/178/600/600'),
(179,0x00,'image/jpeg','kit_ressorts_sport_179.jpg','https://picsum.photos/seed/179/600/600'),
(180,0x00,'image/jpeg','amortisseur_gaz_180.jpg','https://picsum.photos/seed/180/600/600'),
(181,0x00,'image/jpeg','combin_filet_street_181.jpg','https://picsum.photos/seed/181/600/600'),
(182,0x00,'image/jpeg','kit_rehausse_182.jpg','https://picsum.photos/seed/182/600/600'),
(183,0x00,'image/jpeg','cric_rouleur_183.jpg','https://picsum.photos/seed/183/600/600'),
(184,0x00,'image/jpeg','b_quille_de_levage_184.jpg','https://picsum.photos/seed/184/600/600'),
(185,0x00,'image/jpeg','rondelle_de_cale_ressort_185.jpg','https://picsum.photos/seed/185/600/600'),
(186,0x00,'image/jpeg','chape_de_ressort_186.jpg','https://picsum.photos/seed/186/600/600'),
(187,0x00,'image/jpeg','ancrage_ressort_187.jpg','https://picsum.photos/seed/187/600/600'),
(188,0x00,'image/jpeg','tube_amortisseur_188.jpg','https://picsum.photos/seed/188/600/600'),
(189,0x00,'image/jpeg','joint_spy_amortisseur_189.jpg','https://picsum.photos/seed/189/600/600'),
(190,0x00,'image/jpeg','bague_de_suspension_190.jpg','https://picsum.photos/seed/190/600/600'),
(191,0x00,'image/jpeg','rotule_axiale_191.jpg','https://picsum.photos/seed/191/600/600'),
(192,0x00,'image/jpeg','rotule_radiale_192.jpg','https://picsum.photos/seed/192/600/600'),
(193,0x00,'image/jpeg','palier_de_direction_193.jpg','https://picsum.photos/seed/193/600/600'),
(194,0x00,'image/jpeg','pivot_de_direction_194.jpg','https://picsum.photos/seed/194/600/600'),
(195,0x00,'image/jpeg','tirant_de_carrossage_195.jpg','https://picsum.photos/seed/195/600/600'),
(196,0x00,'image/jpeg','bielle_de_direction_196.jpg','https://picsum.photos/seed/196/600/600'),
(197,0x00,'image/jpeg','kit_g_om_trie_197.jpg','https://picsum.photos/seed/197/600/600'),
(198,0x00,'image/jpeg','silentbloc_moteur_198.jpg','https://picsum.photos/seed/198/600/600'),
(199,0x00,'image/jpeg','silentbloc_boite_199.jpg','https://picsum.photos/seed/199/600/600'),
(200,0x00,'image/jpeg','cale_de_suspension_200.jpg','https://picsum.photos/seed/200/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


