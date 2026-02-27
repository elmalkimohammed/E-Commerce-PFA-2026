using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Collections;
using System.Text.Json;
using System.Xml.Linq;
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
        public List<ProductAndImage> GetAllProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            String sql = "SELECT   p.*,  pi.* FROM product p LEFT JOIN productsImage pi   ON pi.Product_Id = p.Id;";
            MySqlCommand cmd = new MySqlCommand (sql, coon);
            MySqlDataReader rd = cmd.ExecuteReader();
            List<ProductAndImage> list = new List<ProductAndImage>();
            while (rd.Read())
            {
                ProductAndImage product = new ProductAndImage();
                product.Id = rd.GetInt32("Id");
                product.Name = rd.GetString("Name");
                product.Description = rd.GetString("Description");
                product.Price = rd.GetDecimal("price");
                product.Stock = rd.GetInt32("Stock");
                product.Category = rd.GetString("Category");
                product.Attributes =JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                    ?? new Dictionary<string, object>(); 
                product.UserId = rd.GetGuid("UserId");
               
                product.Id_Image = rd.GetInt32("Id_Image");
                product.Product_Id = rd.GetInt32("Product_Id");
                product.Image = (byte[])rd["Image"];
                product.Mimetype = rd.GetString("Mimetype");
                product.Filename = rd.GetString("Filename");
                list.Add(product);
            }
            coon.Close();
            return list;
        }
        public List<ProductAndImage> Get_fiveProducts()
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            String sql = "SELECT   p.*,  pi.* FROM product p LEFT JOIN productsImage pi   ON pi.Product_Id = p.Id ORDER BY p.Id DESC LIMIT 5;";
            MySqlCommand cmd = new MySqlCommand(sql, coon);
            MySqlDataReader rd = cmd.ExecuteReader();
            List<ProductAndImage> list= new List<ProductAndImage>();
            while (rd.Read())
            {
                ProductAndImage product = new ProductAndImage();
                product.Id = rd.GetInt32("Id");
                product.Name = rd.GetString("Name");
                product.Description = rd.GetString("Description");
                product.Price = rd.GetDecimal("price");
                product.Stock = rd.GetInt32("Stock");
                product.Category = rd.GetString("Category");
                product.Attributes = JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                    ?? new Dictionary<string, object>();
                product.UserId = rd.GetGuid("UserId");

                product.Id_Image = rd.GetInt32("Id_Image");
                product.Product_Id = rd.GetInt32("Product_Id");
                product.Image = (byte[])rd["Image"];
                product.Mimetype = rd.GetString("Mimetype");
                product.Filename = rd.GetString("Filename");
                list.Add(product);
            }
            coon.Close();
            return list;
        }
        public ProductAndImage GetProductById(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            String sql = "SELECT   p.*,  pi.* FROM product p LEFT JOIN productsImage pi   ON pi.Product_Id = p.Id WHERE p.Id = @id; ";
            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@id", id);
            MySqlDataReader rd = cmd.ExecuteReader();
            ProductAndImage product = new ProductAndImage();
            if (!rd.Read())
            {
                return null!;
            }
            product.Id = rd.GetInt32("Id");
            product.Name = rd.GetString("Name");
            product.Description = rd.GetString("Description");
            product.Price = rd.GetDecimal("price");
            product.Stock = rd.GetInt32("Stock");
            product.Category = rd.GetString("Category");
            product.Attributes = JsonSerializer.Deserialize<Dictionary<string, object>>(rd.GetString("Attributes"))!
                ?? new Dictionary<string, object>();
            product.UserId = rd.GetGuid("UserId");

            product.Id_Image = rd.GetInt32("Id_Image");
            product.Product_Id = rd.GetInt32("Product_Id");
            product.Image = (byte[])rd["Image"];
            product.Mimetype = rd.GetString("Mimetype");
            product.Filename = rd.GetString("Filename");
            return product;


        }
        public void AddProduct(Product product)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string Sql = "INSERT INTO product (Name, Description, Price, Stock, Attributes, Category, UserId) VALUES (@Name, @Description, @Price, @Stock, @Attributes, @Category, @UserId)";
            using MySqlCommand cmd = new MySqlCommand(Sql, coon);
            cmd.Parameters.AddWithValue("@Name", product.Name);
            cmd.Parameters.AddWithValue("@Description", product.Description);
            cmd.Parameters.AddWithValue("@Price", product.Price);
            cmd.Parameters.AddWithValue("@Stock", product.Stock);
            cmd.Parameters.AddWithValue("@Attributes", JsonSerializer.Serialize(product.Attributes));
            cmd.Parameters.AddWithValue("@Category", product.Category);
            cmd.Parameters.AddWithValue("@UserId", product.UserId);
            cmd.ExecuteNonQuery();
        }
        public void AddImage(ProductImage image)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string Sql = "INSERT INTO productsImage (Product_Id, Image, Mimetype, Filename) VALUES (@Product_Id, @Image, @Mimetype, @Filename)";
            using MySqlCommand cmd = new MySqlCommand(Sql, coon);
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
            string Sql = "DELETE FROM product WHERE Id = @Id ";
            using MySqlCommand cmd = new MySqlCommand(Sql, coon);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();

            coon.Close();
        }
        public void DeleteImage(int id)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string Sql = "DELETE FROM productsImage WHERE Id_Image = @Id";
            using MySqlCommand cmd = new MySqlCommand(Sql, coon);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();
            coon.Close();
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
            string imagequerry = "UPDATE productsImage SET Image = @Image, Mimetype = @Mimetype, Filename = @Filename WHERE Product_Id = @Id";
            using MySqlCommand cmdImage = new MySqlCommand(imagequerry, coon);
            cmdImage.Parameters.AddWithValue("@Image", product.Image);
            cmdImage.Parameters.AddWithValue("@Mimetype", product.Mimetype);
            cmdImage.Parameters.AddWithValue("@Filename", product.Filename);
            cmdImage.Parameters.AddWithValue("@Id", product.Id);
            cmdImage.ExecuteNonQuery();
            coon.Close();
        }
        public void  UpdateProduct(Product product)
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
            coon.Close();
        }

    }
}
