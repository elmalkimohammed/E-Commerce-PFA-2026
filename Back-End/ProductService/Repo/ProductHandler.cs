using MySqlConnector;
using System.Text.Json;
using TicketProductApi.Model;

namespace TicketProductApi.Repo
{
    public class ProductHandler : IProducthandler
    {
        private readonly String connection;
        public ProductHandler(IConfiguration coonString)
        {
            connection = coonString.GetConnectionString("DefaultConnection");
        }

        private static ProductAndImage ReadProductRow(MySqlDataReader rd)
        {
            return new ProductAndImage
            {
                Id          = rd.GetInt32("Id"),
                Name        = rd.GetString("Name"),
                Description = rd.GetString("Description"),
                Price       = rd.GetDecimal("price"),
                Stock       = rd.GetInt32("Stock"),
                Category    = rd.GetString("Category"),
                Attributes  = rd.IsDBNull(rd.GetOrdinal("Attributes"))
                    ? new Dictionary<string, object>()
                    : JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                        ?? new Dictionary<string, object>(),
                UserId = rd.GetGuid("UserId"),
                Images = new List<ProductImage>()
            };
        }

        private static ProductImage? ReadImageRow(MySqlDataReader rd)
        {
            if (rd.IsDBNull(rd.GetOrdinal("Id_Image"))) return null;
            return new ProductImage
            {
                Id_Image   = rd.GetInt32("Id_Image"),
                Product_Id = rd.GetInt32("Product_Id"),
                Image      = (byte[])rd["Image"],
                Mimetype   = rd.GetString("Mimetype"),
                Filename   = rd.GetString("Filename")
            };
        }

        public List<ProductAndImage> GetAllProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id ORDER BY p.Id;";
            MySqlCommand cmd = new MySqlCommand(sql, coon);
            MySqlDataReader rd = cmd.ExecuteReader();

            var dict = new Dictionary<int, ProductAndImage>();
            while (rd.Read())
            {
                int productId = rd.GetInt32("Id");
                if (!dict.TryGetValue(productId, out var product))
                {
                    product = ReadProductRow(rd);
                    dict[productId] = product;
                }
                var img = ReadImageRow(rd);
                if (img != null) product.Images.Add(img);
            }
            return dict.Values.ToList();
        }

        public List<ProductAndImage> Get_fiveProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = @"SELECT p.*, pi.*
                           FROM (SELECT * FROM product ORDER BY Id DESC LIMIT 10) AS p
                           LEFT JOIN productsImage pi ON pi.Product_Id = p.Id
                           ORDER BY p.Id DESC;";
            MySqlCommand cmd = new MySqlCommand(sql, coon);
            MySqlDataReader rd = cmd.ExecuteReader();

            var dict = new Dictionary<int, ProductAndImage>();
            while (rd.Read())
            {
                int productId = rd.GetInt32("Id");
                if (!dict.TryGetValue(productId, out var product))
                {
                    product = ReadProductRow(rd);
                    dict[productId] = product;
                }
                var img = ReadImageRow(rd);
                if (img != null) product.Images.Add(img);
            }
            return dict.Values.ToList();
        }

        public ProductAndImage GetProductById(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id WHERE p.Id = @id;";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@id", id);
            MySqlDataReader rd = cmd.ExecuteReader();

            ProductAndImage? product = null;
            while (rd.Read())
            {
                if (product == null) product = ReadProductRow(rd);
                var img = ReadImageRow(rd);
                if (img != null) product.Images.Add(img);
            }
            return product!;
        }

        public List<ProductAndImage> GetProductsByUserId(Guid userId)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "SELECT p.*, pi.* FROM product p LEFT JOIN productsImage pi ON pi.Product_Id = p.Id WHERE p.UserId = @userId ORDER BY p.Id;";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@userId", userId);
            MySqlDataReader rd = cmd.ExecuteReader();

            var dict = new Dictionary<int, ProductAndImage>();
            while (rd.Read())
            {
                int productId = rd.GetInt32("Id");
                if (!dict.TryGetValue(productId, out var product))
                {
                    product = ReadProductRow(rd);
                    dict[productId] = product;
                }
                var img = ReadImageRow(rd);
                if (img != null) product.Images.Add(img);
            }
            return dict.Values.ToList();
        }

        public int AddProduct(Product product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "INSERT INTO product (Name, Description, Price, Stock, Attributes, Category, UserId) VALUES (@Name, @Description, @Price, @Stock, @Attributes, @Category, @UserId); SELECT LAST_INSERT_ID();";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Name", product.Name);
            cmd.Parameters.AddWithValue("@Description", product.Description);
            cmd.Parameters.AddWithValue("@Price", product.Price);
            cmd.Parameters.AddWithValue("@Stock", product.Stock);
            cmd.Parameters.AddWithValue("@Attributes", JsonSerializer.Serialize(product.Attributes));
            cmd.Parameters.AddWithValue("@Category", product.Category);
            cmd.Parameters.AddWithValue("@UserId", product.UserId);
            return Convert.ToInt32(cmd.ExecuteScalar());
        }

        public List<String> GetCategories()
        {
            List<String> list = new List<String>();
            using MySqlConnection conn = new MySqlConnection(connection);
            conn.Open();
            MySqlCommand cmd = new MySqlCommand("SELECT DISTINCT Category FROM product", conn);
            MySqlDataReader rd = cmd.ExecuteReader();
            while (rd.Read()) list.Add(rd[0].ToString()!);
            return list;
        }

        public void AddImage(ProductImage image)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "INSERT INTO productsImage (Product_Id, Image, Mimetype, Filename) VALUES (@Product_Id, @Image, @Mimetype, @Filename)";
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
            cmd.ExecuteNonQuery();
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

        public void UpdateProduct(Product product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "UPDATE product SET Name = @Name, Description = @Description, Price = @Price, Stock = @Stock, Attributes = @Attributes, Category = @Category, UserId = @UserId WHERE Id = @Id";
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

        public void UpdateImage(ProductImage image)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "UPDATE productsImage SET Image = @Image, Mimetype = @Mimetype, Filename = @Filename WHERE Product_Id = @ProductId";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@Image", image.Image);
            cmd.Parameters.AddWithValue("@Mimetype", image.Mimetype);
            cmd.Parameters.AddWithValue("@Filename", image.Filename);
            cmd.Parameters.AddWithValue("@ProductId", image.Product_Id);
            cmd.ExecuteNonQuery();
        }

        public void UpdateProductAndImage(ProductAndImage product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = "UPDATE product SET Name = @Name, Description = @Description, Price = @Price, Stock = @Stock, Attributes = @Attributes, Category = @Category, UserId = @UserId WHERE Id = @Id";
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

            var first = product.Images.FirstOrDefault();
            if (first != null)
            {
                string imageQuery = "UPDATE productsImage SET Image = @Image, Mimetype = @Mimetype, Filename = @Filename WHERE Product_Id = @Id";
                using MySqlCommand cmdImage = new MySqlCommand(imageQuery, coon);
                cmdImage.Parameters.AddWithValue("@Image", first.Image);
                cmdImage.Parameters.AddWithValue("@Mimetype", first.Mimetype);
                cmdImage.Parameters.AddWithValue("@Filename", first.Filename);
                cmdImage.Parameters.AddWithValue("@Id", product.Id);
                cmdImage.ExecuteNonQuery();
            }
        }
    }
}
