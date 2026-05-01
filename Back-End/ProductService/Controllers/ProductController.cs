using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using TicketProductApi.Dto;
using TicketProductApi.Mapper;
using TicketProductApi.Model;
using TicketProductApi.Repo;
using ProductService.Service;
using ProductService.Events;

namespace TicketProductApi.Controllers
{
    [Route("TechStore/ProductService")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProducthandler _productHandler;
        private readonly IKafkaProducerService _kafkaProducer;

        public ProductController(IProducthandler productHandler, IKafkaProducerService kafkaProducer)
        {
            _productHandler = productHandler;
            _kafkaProducer = kafkaProducer;
        }

        [HttpGet]
        [Route("getCategories")]
        public IActionResult GetAllCategories()
        {
            try
            {

                var response = this._productHandler.GetCategories();
                return Ok(response);

            }
            catch (Exception error)
            {

                return StatusCode(500, $"An error occurred while retrieving products: {error.Message}");

            }
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = _productHandler.GetAllProducts();
            List<GetDtoResponse> response = ProductMapper.ProductsToGetDtoList(products);
            return Ok(response);
        }

        [HttpGet("Latest")]
        public IActionResult Get5Products()
        {
            try
            {
                List<ProductAndImage> products = _productHandler.Get_fiveProducts();
                List<GetDtoResponse> response = ProductMapper.ProductsToGetDtoList(products);
                return Ok(response);
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            try
            {
                ProductAndImage product = _productHandler.GetProductById(id);
                GetDtoResponse response = ProductMapper.ProductAndImageToDto(product);
                return Ok(response);
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetProductsByUserId(Guid userId)
        {
            try
            {
                List<ProductAndImage> products = _productHandler.GetProductsByUserId(userId);
                
                if (products == null || products.Count == 0)
                {
                    return NotFound($"No products found for user with ID: {userId}");
                }
                
                List<GetDtoResponse> response = ProductMapper.ProductsToGetDtoList(products);
                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception here if you have logging
                return StatusCode(500, $"An error occurred while retrieving products: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> addProduct(PostDtoRequest obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Product product = ProductMapper.PostDtoToProduct(obj);
            try
            {
                int newId = _productHandler.AddProduct(product);
                
                // Send Kafka event
                var productEvent = new ProductEvent
                {
                    ProductId = newId,
                    ProductName = product.Name,
                    Description = product.Description,
                    Price = (float)product.Price,
                    Stock = product.Stock,
                    UserId = product.UserId.ToString(),
                    Category = product.Category
                };
                
                await _kafkaProducer.AsyncPublish("product-created", productEvent);
                
                return Ok(new { id = newId });
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                _productHandler.DeleteProduct(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpPut]
        public IActionResult UpdateProduct(PutDtoRequest obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Product product = ProductMapper.PutDtoToProduct(obj);
            try
            {
                _productHandler.UpdateProduct(product);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost("AddImage")]
        public IActionResult AddImage(PostImageDtoRequest obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            ProductImage image = ProductImageMapper.PostImageToProductImage(obj);
            try
            {
                _productHandler.AddImage(image);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("DeleteImage/{id}")]
        public IActionResult DeleteImage(int id)
        {
            try
            {
                _productHandler.DeleteImage(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpPut("UpdateImage")]
        public IActionResult UpdateImage(PutImageDtoRequest obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            ProductImage image = ProductImageMapper.PutImageToProductImage(obj);
            try
            {
                _productHandler.UpdateImage(image);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}