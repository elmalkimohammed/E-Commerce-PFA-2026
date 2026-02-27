using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Text.Json;
using TicketProductApi.Model;

namespace TicketProductApi.Repo
{
    public class ProductHandler : IProducthandler
    {
        private readonly string connection;
        public ProductHandler(IConfiguration coonString)
        {
            connection = coonString.GetConnectionString("DefaultConnection");
        }

        public List<ProductAndImage> GetAllProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id;";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            using MySqlDataReader rd = cmd.ExecuteReader();

            var products = new Dictionary<int, ProductAndImage>();

            int idImageOrdinal = rd.GetOrdinal("Id_Image");
            int productIdOrdinal = rd.GetOrdinal("Product_Id");
            int imageOrdinal = rd.GetOrdinal("Image");
            int mimetypeOrdinal = rd.GetOrdinal("Mimetype");
            int filenameOrdinal = rd.GetOrdinal("Filename");

            while (rd.Read())
            {
                int productId = rd.GetInt32("Id");

                if (!products.TryGetValue(productId, out var product))
                {
                    product = new ProductAndImage
                    {
                        Id = productId,
                        Name = rd.GetString("Name"),
                        Description = rd.GetString("Description"),
                        Price = rd.GetDecimal("price"),
                        Stock = rd.GetInt32("Stock"),
                        Category = rd.GetString("Category"),
                        Attributes = JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                                     ?? new Dictionary<string, object>(),
                        UserId = Guid.Parse(rd.GetString("UserId")),
                        Images = new List<ProductImage>()
                    };

                    products.Add(productId, product);
                }

                if (rd.IsDBNull(idImageOrdinal))
                {
                    continue;
                }

                product.Images.Add(new ProductImage
                {
                    Id_Image = rd.GetInt32(idImageOrdinal),
                    Product_Id = rd.GetInt32(productIdOrdinal),
                    Image = (byte[])rd[imageOrdinal],
                    Mimetype = rd.GetString(mimetypeOrdinal),
                    Filename = rd.GetString(filenameOrdinal)
                });
            }

            coon.Close();
            return products.Values.ToList();
        }

        public List<ProductAndImage> Get_fiveProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id ORDER BY p.Id DESC LIMIT 5;";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            using MySqlDataReader rd = cmd.ExecuteReader();

            var products = new Dictionary<int, ProductAndImage>();

            int idImageOrdinal = rd.GetOrdinal("Id_Image");
            int productIdOrdinal = rd.GetOrdinal("Product_Id");
            int imageOrdinal = rd.GetOrdinal("Image");
            int mimetypeOrdinal = rd.GetOrdinal("Mimetype");
            int filenameOrdinal = rd.GetOrdinal("Filename");

            while (rd.Read())
            {
                int productId = rd.GetInt32("Id");

                if (!products.TryGetValue(productId, out var product))
                {
                    product = new ProductAndImage
                    {
                        Id = productId,
                        Name = rd.GetString("Name"),
                        Description = rd.GetString("Description"),
                        Price = rd.GetDecimal("price"),
                        Stock = rd.GetInt32("Stock"),
                        Category = rd.GetString("Category"),
                        Attributes = JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                                     ?? new Dictionary<string, object>(),
                        UserId = Guid.Parse(rd.GetString("UserId")),
                        Images = new List<ProductImage>()
                    };

                    products.Add(productId, product);
                }

                if (rd.IsDBNull(idImageOrdinal))
                {
                    continue;
                }

                product.Images.Add(new ProductImage
                {
                    Id_Image = rd.GetInt32(idImageOrdinal),
                    Product_Id = rd.GetInt32(productIdOrdinal),
                    Image = (byte[])rd[imageOrdinal],
                    Mimetype = rd.GetString(mimetypeOrdinal),
                    Filename = rd.GetString(filenameOrdinal)
                });
            }

            coon.Close();
            return products.Values.ToList();
        }

        public ProductAndImage GetProductById(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id WHERE p.Id = @id;";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@id", id);
            using MySqlDataReader rd = cmd.ExecuteReader();

            ProductAndImage? product = null;

            int idImageOrdinal = rd.GetOrdinal("Id_Image");
            int productIdOrdinal = rd.GetOrdinal("Product_Id");
            int imageOrdinal = rd.GetOrdinal("Image");
            int mimetypeOrdinal = rd.GetOrdinal("Mimetype");
            int filenameOrdinal = rd.GetOrdinal("Filename");

            while (rd.Read())
            {
                if (product == null)
                {
                    product = new ProductAndImage
                    {
                        Id = rd.GetInt32("Id"),
                        Name = rd.GetString("Name"),
                        Description = rd.GetString("Description"),
                        Price = rd.GetDecimal("price"),
                        Stock = rd.GetInt32("Stock"),
                        Category = rd.GetString("Category"),
                        Attributes = JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                                     ?? new Dictionary<string, object>(),
                        UserId = Guid.Parse(rd.GetString("UserId")),
                        Images = new List<ProductImage>()
                    };
                }

                if (rd.IsDBNull(idImageOrdinal))
                {
                    continue;
                }

                product.Images.Add(new ProductImage
                {
                    Id_Image = rd.GetInt32(idImageOrdinal),
                    Product_Id = rd.GetInt32(productIdOrdinal),
                    Image = (byte[])rd[imageOrdinal],
                    Mimetype = rd.GetString(mimetypeOrdinal),
                    Filename = rd.GetString(filenameOrdinal)
                });
            }

            return product ?? null!;
        }

        public void AddProductWithImages(ProductAndImage product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();

            // Insert product and get generated Id
            string sqlProduct = "INSERT INTO product (Name, Description, Price, Stock, Attributes, Category, UserId) " +
                                "VALUES (@Name, @Description, @Price, @Stock, @Attributes, @Category, @UserId)";

            long newProductId;
            using (MySqlCommand cmd = new MySqlCommand(sqlProduct, coon))
            {
                cmd.Parameters.AddWithValue("@Name", product.Name);
                cmd.Parameters.AddWithValue("@Description", product.Description);
                cmd.Parameters.AddWithValue("@Price", product.Price);
                cmd.Parameters.AddWithValue("@Stock", product.Stock);
                cmd.Parameters.AddWithValue("@Attributes", JsonSerializer.Serialize(product.Attributes));
                cmd.Parameters.AddWithValue("@Category", product.Category);
                cmd.Parameters.AddWithValue("@UserId", product.UserId);

                cmd.ExecuteNonQuery();
                newProductId = cmd.LastInsertedId; // avoid casting issues
            }

            // Insert images (if any) for this product
            foreach (var img in product.Images)
            {
                string sqlImage = "INSERT INTO productsImage (Product_Id, Image, Mimetype, Filename) " +
                                  "VALUES (@Product_Id, @Image, @Mimetype, @Filename)";

                using (MySqlCommand cmdImg = new MySqlCommand(sqlImage, coon))
                {
                    cmdImg.Parameters.AddWithValue("@Product_Id", (int)newProductId);
                    cmdImg.Parameters.AddWithValue("@Image", img.Image);
                    cmdImg.Parameters.AddWithValue("@Mimetype", img.Mimetype);
                    cmdImg.Parameters.AddWithValue("@Filename", img.Filename);

                    cmdImg.ExecuteNonQuery();
                }
            }
        }

        public void AddImage(ProductImage image)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "INSERT INTO productsImage (Product_Id, Image, Mimetype, Filename) " +
                         "VALUES (@Product_Id, @Image, @Mimetype, @Filename)";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Product_Id", image.Product_Id);
            cmd.Parameters.AddWithValue("@Image", image.Image);
            cmd.Parameters.AddWithValue("@Mimetype", image.Mimetype);
            cmd.Parameters.AddWithValue("@Filename", image.Filename);
            cmd.ExecuteNonQuery();
        }

        public void DeleteProduct(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "DELETE FROM product WHERE Id = @Id";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Id", id);

            int rows = cmd.ExecuteNonQuery();
            if (rows == 0)
            {
                throw new KeyNotFoundException($"Product {id} not found");
            }
        }

        public void DeleteImage(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "DELETE FROM productsImage WHERE Id_Image = @Id";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();
        }

        public void UpdateProductAndImage(ProductAndImage product)
        {
            using var coon = new MySqlConnection(connection);
            coon.Open();

            var sql = """
            UPDATE product 
            SET Name=@Name, Description=@Description, Price=@Price, Stock=@Stock, 
                Attributes=@Attributes, Category=@Category, UserId=@UserId
            WHERE Id=@Id
            """;

            using var cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Name", product.Name);
            cmd.Parameters.AddWithValue("@Description", product.Description);
            cmd.Parameters.AddWithValue("@Price", product.Price);
            cmd.Parameters.AddWithValue("@Stock", product.Stock);
            cmd.Parameters.AddWithValue("@Attributes", JsonSerializer.Serialize(product.Attributes));
            cmd.Parameters.AddWithValue("@Category", product.Category);
            cmd.Parameters.AddWithValue("@UserId", product.UserId);
            cmd.Parameters.AddWithValue("@Id", product.Id);
            cmd.ExecuteNonQuery();

            foreach (var img in product.Images)
            {
                var imgSql = """
                UPDATE productsImage 
                SET Image=@Image, Mimetype=@Mimetype, Filename=@Filename 
                WHERE Id_Image=@Id_Image
                """;

                using var cmdImg = new MySqlCommand(imgSql, coon);
                cmdImg.Parameters.AddWithValue("@Image", img.Image);
                cmdImg.Parameters.AddWithValue("@Mimetype", img.Mimetype);
                cmdImg.Parameters.AddWithValue("@Filename", img.Filename);
                cmdImg.Parameters.AddWithValue("@Id_Image", img.Id_Image);
                cmdImg.ExecuteNonQuery();
            }
        }

        public void UpdateProduct(Product product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "UPDATE product SET Name = @Name, Description = @Description, Price = @Price, Stock = @Stock, " +
                         "Attributes = @Attributes, Category = @Category, UserId = @UserId WHERE Id = @Id";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Name", product.Name);
            cmd.Parameters.AddWithValue("@Description", product.Description);
            cmd.Parameters.AddWithValue("@Price", product.Price);
            cmd.Parameters.AddWithValue("@Stock", product.Stock);
            cmd.Parameters.AddWithValue("@Attributes", JsonSerializer.Serialize(product.Attributes));
            cmd.Parameters.AddWithValue("@Category", product.Category);
            cmd.Parameters.AddWithValue("@UserId", product.UserId);
            cmd.Parameters.AddWithValue("@Id", product.Id);
            cmd.ExecuteNonQuery();
        }
    }
}