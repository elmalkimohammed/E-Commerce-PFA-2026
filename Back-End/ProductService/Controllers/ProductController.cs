using Microsoft.AspNetCore.Authorization;
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
using ProductService.Services;
using System.Security.Claims;

namespace TicketProductApi.Controllers
{
    [Route("TechStore/ProductService")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProducthandler _productHandler;
        private readonly ProductEventService _productEventService;

        public ProductController(IProducthandler productHandler, ProductEventService productEventService)
        {
            _productHandler = productHandler;
            _productEventService = productEventService;
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
                
                // Get user info from JWT token (who created)
                var performedBy = User.FindFirst("email")?.Value ?? User.FindFirst("sub")?.Value ?? "Unknown";
                
                await _productEventService.PublishProductCreatedEvent(product, newId, performedBy);
                
                return Ok(new { id = newId });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                // Get product details before deletion
                var product = _productHandler.GetProductById(id);
                if (product == null)
                {
                    return NotFound(new { message = $"Product with ID {id} not found" });
                }

                // Get user info from JWT token (who deleted)
                var performedBy = User.FindFirst("email")?.Value ?? User.FindFirst("sub")?.Value ?? "Unknown";

                // Delete the product
                _productHandler.DeleteProduct(id);

                await _productEventService.PublishProductDeletedEvent(product, performedBy);

                return Ok(new { 
                    message = "Product deleted successfully", 
                    productId = id,
                    deletedBy = performedBy
                });
            }
            catch (Exception ex)
            {
                return NotFound(new { error = ex.Message });
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProduct(PutDtoRequest obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Product product = ProductMapper.PutDtoToProduct(obj);
            try
            {
                _productHandler.UpdateProduct(product);
                
                // Get user info from JWT token (who updated)
                var performedBy = User.FindFirst("email")?.Value ?? User.FindFirst("sub")?.Value ?? "Unknown";
                
                await _productEventService.PublishProductUpdatedEvent(product, performedBy);
                
                return Ok(new { message = "Product updated successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
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