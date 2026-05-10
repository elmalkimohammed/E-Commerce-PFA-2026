SET NAMES utf8mb4;
-- ================================================================
-- AUTONOVA â€” Catégorie 8: Carrosserie & Extérieur
-- Mode URL : images chargées depuis Unsplash (libres de droits)
-- PRÉREQUIS : ALTER TABLE productsImage ADD COLUMN image_url VARCHAR(500);
-- ================================================================

START TRANSACTION;

-- Produits
INSERT INTO `product` (`Id`,`Name`,`Description`,`price`,`Stock`,`Attributes`,`Category`,`UserId`) VALUES
(351,'Pare-choc avant universel','Pare-choc avant universel â€” pièce automobile de qualité OEM pour véhicules toutes marques',536,81,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(352,'Pare-choc arrière','Pare-choc arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',111,73,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(353,'Capot aluminium','Capot aluminium â€” pièce automobile de qualité OEM pour véhicules toutes marques',537,35,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(354,'Aile avant gauche','Aile avant gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',144,149,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(355,'Aile avant droit','Aile avant droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',75,199,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(356,'Portière complète','Portière complète â€” pièce automobile de qualité OEM pour véhicules toutes marques',672,102,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(357,'Rétroviseur gauche','Rétroviseur gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',425,51,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(358,'Rétroviseur droit','Rétroviseur droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',420,138,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(359,'Poignée de porte ext','Poignée de porte ext â€” pièce automobile de qualité OEM pour véhicules toutes marques',633,11,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(360,'Moulure de porte','Moulure de porte â€” pièce automobile de qualité OEM pour véhicules toutes marques',677,14,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(361,'Baguette latérale','Baguette latérale â€” pièce automobile de qualité OEM pour véhicules toutes marques',723,151,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(362,'Phare avant gauche','Phare avant gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',486,37,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(363,'Phare avant droit','Phare avant droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,39,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(364,'Feu arrière gauche','Feu arrière gauche â€” pièce automobile de qualité OEM pour véhicules toutes marques',783,179,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(365,'Feu arrière droit','Feu arrière droit â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,17,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(366,'Calandre sportive','Calandre sportive â€” pièce automobile de qualité OEM pour véhicules toutes marques',314,19,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(367,'Spoiler arrière','Spoiler arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',750,188,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(368,'Jupe latérale','Jupe latérale â€” pièce automobile de qualité OEM pour véhicules toutes marques',388,154,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(369,'Becquet de toit','Becquet de toit â€” pièce automobile de qualité OEM pour véhicules toutes marques',451,92,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(370,'Diffuseur arrière','Diffuseur arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',559,71,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(371,'Joint de porte','Joint de porte â€” pièce automobile de qualité OEM pour véhicules toutes marques',110,183,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(372,'Joint de coffre','Joint de coffre â€” pièce automobile de qualité OEM pour véhicules toutes marques',194,80,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(373,'Lèche-vitre porte','Lèche-vitre porte â€” pièce automobile de qualité OEM pour véhicules toutes marques',630,165,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(374,'Vitrage porte latérale','Vitrage porte latérale â€” pièce automobile de qualité OEM pour véhicules toutes marques',815,34,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(375,'Pare-brise','Pare-brise â€” pièce automobile de qualité OEM pour véhicules toutes marques',623,25,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(376,'Lunette arrière','Lunette arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',136,15,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(377,'Rétroviseur intérieur','Rétroviseur intérieur â€” pièce automobile de qualité OEM pour véhicules toutes marques',229,43,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(378,'Essuie-glace arrière','Essuie-glace arrière â€” pièce automobile de qualité OEM pour véhicules toutes marques',216,78,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(379,'Antenne de toit','Antenne de toit â€” pièce automobile de qualité OEM pour véhicules toutes marques',193,134,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(380,'Baguette chromo','Baguette chromo â€” pièce automobile de qualité OEM pour véhicules toutes marques',301,71,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(381,'Couvre-roue plastique','Couvre-roue plastique â€” pièce automobile de qualité OEM pour véhicules toutes marques',83,97,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(382,'Cache prise recharge','Cache prise recharge â€” pièce automobile de qualité OEM pour véhicules toutes marques',368,85,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(383,'Grille calandre','Grille calandre â€” pièce automobile de qualité OEM pour véhicules toutes marques',174,197,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(384,'Prise d''air capot','Prise d''air capot â€” pièce automobile de qualité OEM pour véhicules toutes marques',561,20,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(385,'Marchepied latéral','Marchepied latéral â€” pièce automobile de qualité OEM pour véhicules toutes marques',204,156,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(386,'Becquet rallye','Becquet rallye â€” pièce automobile de qualité OEM pour véhicules toutes marques',121,31,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(387,'Lame de pare-choc','Lame de pare-choc â€” pièce automobile de qualité OEM pour véhicules toutes marques',68,48,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(388,'Écusson sigle marque','Écusson sigle marque â€” pièce automobile de qualité OEM pour véhicules toutes marques',696,40,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(389,'Cache vis roue','Cache vis roue â€” pièce automobile de qualité OEM pour véhicules toutes marques',713,65,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(390,'Support de plaque','Support de plaque â€” pièce automobile de qualité OEM pour véhicules toutes marques',794,109,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(391,'Enjoliveur de porte','Enjoliveur de porte â€” pièce automobile de qualité OEM pour véhicules toutes marques',521,112,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(392,'Protège-bas de caisse','Protège-bas de caisse â€” pièce automobile de qualité OEM pour véhicules toutes marques',596,52,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(393,'Renforts de seuil','Renforts de seuil â€” pièce automobile de qualité OEM pour véhicules toutes marques',583,91,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(394,'Baguette de toit','Baguette de toit â€” pièce automobile de qualité OEM pour véhicules toutes marques',225,44,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(395,'Aérateur capot','Aérateur capot â€” pièce automobile de qualité OEM pour véhicules toutes marques',810,192,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(396,'Déflecteur capot','Déflecteur capot â€” pièce automobile de qualité OEM pour véhicules toutes marques',115,55,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(397,'Protection de vitre','Protection de vitre â€” pièce automobile de qualité OEM pour véhicules toutes marques',766,202,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(398,'Cordon étanchéité','Cordon étanchéité â€” pièce automobile de qualité OEM pour véhicules toutes marques',381,120,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(399,'Joint de hayon','Joint de hayon â€” pièce automobile de qualité OEM pour véhicules toutes marques',249,180,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000'),
(400,'Lame de seuil','Lame de seuil â€” pièce automobile de qualité OEM pour véhicules toutes marques',764,56,'{"categorie":"Carrosserie & Extérieur","marque":"OEM","qualite":"premium"}','Carrosserie & Extérieur','00000000-0000-0000-0000-000000000000');

-- Images : colonne image_url stocke l'URL Unsplash
INSERT INTO `productsImage` (`Product_Id`,`image`,`Mimetype`,`Filename`,`image_url`) VALUES
(351,0x00,'image/jpeg','pare_choc_avant_universel_351.jpg','https://picsum.photos/seed/351/600/600'),
(352,0x00,'image/jpeg','pare_choc_arri_re_352.jpg','https://picsum.photos/seed/352/600/600'),
(353,0x00,'image/jpeg','capot_aluminium_353.jpg','https://picsum.photos/seed/353/600/600'),
(354,0x00,'image/jpeg','aile_avant_gauche_354.jpg','https://picsum.photos/seed/354/600/600'),
(355,0x00,'image/jpeg','aile_avant_droit_355.jpg','https://picsum.photos/seed/355/600/600'),
(356,0x00,'image/jpeg','porti_re_compl_te_356.jpg','https://picsum.photos/seed/356/600/600'),
(357,0x00,'image/jpeg','r_troviseur_gauche_357.jpg','https://picsum.photos/seed/357/600/600'),
(358,0x00,'image/jpeg','r_troviseur_droit_358.jpg','https://picsum.photos/seed/358/600/600'),
(359,0x00,'image/jpeg','poign_e_de_porte_ext_359.jpg','https://picsum.photos/seed/359/600/600'),
(360,0x00,'image/jpeg','moulure_de_porte_360.jpg','https://picsum.photos/seed/360/600/600'),
(361,0x00,'image/jpeg','baguette_lat_rale_361.jpg','https://picsum.photos/seed/361/600/600'),
(362,0x00,'image/jpeg','phare_avant_gauche_362.jpg','https://picsum.photos/seed/362/600/600'),
(363,0x00,'image/jpeg','phare_avant_droit_363.jpg','https://picsum.photos/seed/363/600/600'),
(364,0x00,'image/jpeg','feu_arri_re_gauche_364.jpg','https://picsum.photos/seed/364/600/600'),
(365,0x00,'image/jpeg','feu_arri_re_droit_365.jpg','https://picsum.photos/seed/365/600/600'),
(366,0x00,'image/jpeg','calandre_sportive_366.jpg','https://picsum.photos/seed/366/600/600'),
(367,0x00,'image/jpeg','spoiler_arri_re_367.jpg','https://picsum.photos/seed/367/600/600'),
(368,0x00,'image/jpeg','jupe_lat_rale_368.jpg','https://picsum.photos/seed/368/600/600'),
(369,0x00,'image/jpeg','becquet_de_toit_369.jpg','https://picsum.photos/seed/369/600/600'),
(370,0x00,'image/jpeg','diffuseur_arri_re_370.jpg','https://picsum.photos/seed/370/600/600'),
(371,0x00,'image/jpeg','joint_de_porte_371.jpg','https://picsum.photos/seed/371/600/600'),
(372,0x00,'image/jpeg','joint_de_coffre_372.jpg','https://picsum.photos/seed/372/600/600'),
(373,0x00,'image/jpeg','l_che_vitre_porte_373.jpg','https://picsum.photos/seed/373/600/600'),
(374,0x00,'image/jpeg','vitrage_porte_lat_rale_374.jpg','https://picsum.photos/seed/374/600/600'),
(375,0x00,'image/jpeg','pare_brise_375.jpg','https://picsum.photos/seed/375/600/600'),
(376,0x00,'image/jpeg','lunette_arri_re_376.jpg','https://picsum.photos/seed/376/600/600'),
(377,0x00,'image/jpeg','r_troviseur_int_rieur_377.jpg','https://picsum.photos/seed/377/600/600'),
(378,0x00,'image/jpeg','essuie_glace_arri_re_378.jpg','https://picsum.photos/seed/378/600/600'),
(379,0x00,'image/jpeg','antenne_de_toit_379.jpg','https://picsum.photos/seed/379/600/600'),
(380,0x00,'image/jpeg','baguette_chromo_380.jpg','https://picsum.photos/seed/380/600/600'),
(381,0x00,'image/jpeg','couvre_roue_plastique_381.jpg','https://picsum.photos/seed/381/600/600'),
(382,0x00,'image/jpeg','cache_prise_recharge_382.jpg','https://picsum.photos/seed/382/600/600'),
(383,0x00,'image/jpeg','grille_calandre_383.jpg','https://picsum.photos/seed/383/600/600'),
(384,0x00,'image/jpeg','prise_d_air_capot_384.jpg','https://picsum.photos/seed/384/600/600'),
(385,0x00,'image/jpeg','marchepied_lat_ral_385.jpg','https://picsum.photos/seed/385/600/600'),
(386,0x00,'image/jpeg','becquet_rallye_386.jpg','https://picsum.photos/seed/386/600/600'),
(387,0x00,'image/jpeg','lame_de_pare_choc_387.jpg','https://picsum.photos/seed/387/600/600'),
(388,0x00,'image/jpeg','_cusson_sigle_marque_388.jpg','https://picsum.photos/seed/388/600/600'),
(389,0x00,'image/jpeg','cache_vis_roue_389.jpg','https://picsum.photos/seed/389/600/600'),
(390,0x00,'image/jpeg','support_de_plaque_390.jpg','https://picsum.photos/seed/390/600/600'),
(391,0x00,'image/jpeg','enjoliveur_de_porte_391.jpg','https://picsum.photos/seed/391/600/600'),
(392,0x00,'image/jpeg','prot_ge_bas_de_caisse_392.jpg','https://picsum.photos/seed/392/600/600'),
(393,0x00,'image/jpeg','renforts_de_seuil_393.jpg','https://picsum.photos/seed/393/600/600'),
(394,0x00,'image/jpeg','baguette_de_toit_394.jpg','https://picsum.photos/seed/394/600/600'),
(395,0x00,'image/jpeg','a_rateur_capot_395.jpg','https://picsum.photos/seed/395/600/600'),
(396,0x00,'image/jpeg','d_flecteur_capot_396.jpg','https://picsum.photos/seed/396/600/600'),
(397,0x00,'image/jpeg','protection_de_vitre_397.jpg','https://picsum.photos/seed/397/600/600'),
(398,0x00,'image/jpeg','cordon_tanch_it__398.jpg','https://picsum.photos/seed/398/600/600'),
(399,0x00,'image/jpeg','joint_de_hayon_399.jpg','https://picsum.photos/seed/399/600/600'),
(400,0x00,'image/jpeg','lame_de_seuil_400.jpg','https://picsum.photos/seed/400/600/600');

COMMIT;

-- ================================================================
-- Pour afficher l'image dans ton code :
-- Backend (Node.js) : res.json({ image_url: row.image_url })
-- Frontend (React)  : <img src={product.image_url} />
-- ================================================================


