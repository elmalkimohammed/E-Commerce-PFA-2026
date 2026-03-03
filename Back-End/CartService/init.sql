CREATE TABLE Carts (
    CartId CHAR(36) PRIMARY KEY,
    UserId CHAR(36) NOT NULL,
    CreatedAt DATETIME NOT NULL
);

CREATE TABLE CartItems (
    CartItemId CHAR(36) PRIMARY KEY,
    CartId CHAR(36) NOT NULL,
    ProductId SMALLINT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CartId) REFERENCES Carts(CartId)
);
