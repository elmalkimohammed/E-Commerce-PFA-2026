-- Create UserProfile table
CREATE TABLE `UserProfile` (
  `UserId` CHAR(36) NOT NULL,
  `FirstName` VARCHAR(40) DEFAULT NULL,
  `LastName` VARCHAR(40) DEFAULT NULL,
  `Phone` VARCHAR(20) DEFAULT NULL,
  `Address` VARCHAR(150) DEFAULT NULL,
  `Sex` ENUM('Male','Female') DEFAULT NULL,
  `DateOfBirth` DATE DEFAULT NULL,
  `ProfileImage` TEXT DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
