
-- Create product table
CREATE TABLE `product` (
  `Id` smallint NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  `Description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `Stock` int NOT NULL DEFAULT '1',
  `Attributes` json NOT NULL,
  `Category` varchar(20) NOT NULL,
  `UserId` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert data into product table
INSERT INTO `product` (`Id`, `Name`, `Description`, `price`, `Stock`, `Attributes`, `Category`, `UserId`) VALUES
(1, 'T-shirt noir', 'T-shirt en coton 100%, confortable et respirant', 15000, 20, '{"taille": "S,M,L,XL", "couleur": "noir", "matiere": "coton"}', 'Vetements', '550e8400-e29b-41d4-a716-446655440000'),
(2, 'Casque Bluetooth', 'Casque sans fil avec réduction de bruit', 85000, 5, '{"couleur": "noir", "autonomie": "20h", "bluetooth": "5.0"}', 'Electronique', '9c8b5f2e-1d1a-4b67-9bcb-4f0a2e9e2c1d'),
(3, 'Sac à dos', 'Sac à dos résistant pour ordinateur portable 15 pouces', 30000, 10, '{"poches": 5, "capacite": "20L", "imperméable": true}', 'Accessoires', 'a12f4b6c-8d9e-4c1a-9f34-12ab56cd78ef'),
(4, 'Pull en laine', 'Pull chaud et doux en laine mérinos pour l’hiver', 28000, 15, '{"taille": "M,L,XL", "couleur": "bleu", "matiere": "laine"}', 'Vetements', '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
(5, 'Écouteurs sans fil', 'Écouteurs Bluetooth avec réduction de bruit et autonomie 30h', 95000, 12, '{"couleur": "blanc", "autonomie": "30h", "bluetooth": "5.1"}', 'Electronique', '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e'),
(6, 'sac de test', 'Sac de voyage robuste et léger, capacité 40L, résistant à l’eau', 45000, 7, '{"poches": 8, "capacite": "40L", "imperméable": true}', 'Accessoires', '3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f');

-- Create productsImage table
CREATE TABLE `productsImage` (
  `Id_image` smallint NOT NULL AUTO_INCREMENT,
  `Product_Id` smallint NOT NULL,
  `image` longblob NOT NULL,
  `Mimetype` varchar(20) NOT NULL,
  `Filename` varchar(255) NOT NULL,
  PRIMARY KEY (`Id_image`),
  KEY `FK_PNYG` (`Product_Id`),
  CONSTRAINT `FK_PNYG` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert data into productsImage table
INSERT INTO `productsImage` (`Id_image`, `Product_Id`, `image`, `Mimetype`, `Filename`) VALUES
(4, 1, X'696D6167655F746573745F31', 'image/jpeg', 'produit1.jpg'),
(5, 2, X'696D6167655F746573745F32', 'image/png', 'produit2.png'),
(7, 4, X'89504E470D0A1A0A0000000D49484452', 'image/png', 'sac_de_voyage.png'),
(8, 5, X'89504E470D0A1A0A0000000D49484452', 'image/png', 'ecouteurs_sans_fil.png'),
(9, 6, X'89504E470D0A1A0A0000000D49484452', 'image/png', 'sac_de_voyage.png'),
(10, 3, X'89504E470D0A1A0A0000000D49484452', 'image/png', 'sac_de_voyage.png');