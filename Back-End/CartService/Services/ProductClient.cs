
using CartService.Model;
using System.Text.Json;

namespace CartService.Services
{
    public class ProductClient : IProductClient
    {
        private readonly HttpClient _httpClient;
        public ProductClient(HttpClient httpclient)
        {
            this._httpClient = httpclient;
        }
        public async Task<bool> ProductExistance_Verification(int productId)
        {
            // Sending A Get Request To The Product Service To Verify The Existance Of The Product
            var response = await this._httpClient.GetAsync($"http://productservice-api:5252/TechStore/ProductService/{productId}");
            return response.IsSuccessStatusCode;
        }
        public async Task<int?> GetProductStock(int productId)
        {
            // Sending A Get Request To The Product Service To Retrieve The Product Details
            var response = await this._httpClient.GetAsync($"http://productservice-api:5252/TechStore/ProductService/{productId}");
            // Deserialize The Product Details And Return Only The Stock Value
            var jsonContent = await response.Content.ReadAsStringAsync();
            var product = JsonSerializer.Deserialize<ProductPrototype>(jsonContent, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
            return product.Stock;
        }
    }
}
