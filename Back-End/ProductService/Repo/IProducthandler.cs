using TicketProductApi.Model;

namespace TicketProductApi.Repo
{
    public interface IProducthandler
    {
        public List<ProductAndImage> Get_fiveProducts();
        public List<ProductAndImage> GetAllProducts();
         public ProductAndImage GetProductById(int id);
        public void AddProduct(Product product);
         public void AddImage(ProductImage image);
        public void UpdateProductAndImage(ProductAndImage product);
        public void UpdateProduct(Product product);
        public void UpdateImage(ProductImage image);
        public void DeleteProduct(int id); 
        public void DeleteImage(int id);

    }
}
