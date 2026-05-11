
-- Create product table
CREATE TABLE IF NOT EXISTS `product` (
  `Id` smallint NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `Description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `Stock` int NOT NULL DEFAULT '1',
  `Attributes` json NOT NULL,
  `Category` varchar(50) NOT NULL,
  `UserId` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Create productsImage table with image_url column
CREATE TABLE IF NOT EXISTS `productsImage` (
  `Id_image` smallint NOT NULL AUTO_INCREMENT,
  `Product_Id` smallint NOT NULL,
  `image` longblob NOT NULL,
  `Mimetype` varchar(20) NOT NULL,
  `Filename` varchar(255) NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Id_image`),
  KEY `FK_PNYG` (`Product_Id`),
  CONSTRAINT `FK_PNYG` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;