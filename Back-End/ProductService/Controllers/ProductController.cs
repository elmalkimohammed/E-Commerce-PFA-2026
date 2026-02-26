using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using TicketProductApi.Dto;
using TicketProductApi.Model;
using TicketProductApi.Repo;


namespace TicketProductApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProducthandler _productHandler;

        public ProductController(IProducthandler productHandler)
        {
            _productHandler = productHandler;

        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            
            
                var products = _productHandler.GetAllProducts();
                List<GetDtoResponse> response = new List<GetDtoResponse>();
                foreach (var product in products)
                {
                    GetDtoResponse dto = new GetDtoResponse
                    {
                        Id = product.Id,
                        Name = product.Name,
                        Description = product.Description,
                        Price = product.Price,
                        Stock = product.Stock,
                        Attributes = product.Attributes,
                        Category = product.Category,
                        UserId = product.UserId,
                        Image = product.Image,
                        Mimetype = product.Mimetype,
                        Filename = product.Filename
                    };
                    response.Add(dto);
                }
                return Ok(response);
            

        }
        [HttpGet("Latest")]

        public IActionResult Get5Products()
        {
            try
            {
                List<ProductAndImage> products = _productHandler.Get_fiveProducts();
                List<GetDtoResponse> response = new List<GetDtoResponse>();
                foreach (var product in products)
                {
                    GetDtoResponse dto = new GetDtoResponse
                    {
                        Id = product.Id,
                        Name = product.Name,
                        Description = product.Description,
                        Price = product.Price,
                        Stock = product.Stock,
                        Attributes = product.Attributes,
                        Category = product.Category,
                        UserId = product.UserId,
                        Image = product.Image,
                        Mimetype = product.Mimetype,
                        Filename = product.Filename
                    };
                    response.Add(dto);
                }
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
                GetDtoResponse response = new GetDtoResponse
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                    Stock = product.Stock,
                    Attributes = product.Attributes,
                    Category = product.Category,
                    UserId = product.UserId,
                    Image = product.Image,
                    Mimetype = product.Mimetype,
                    Filename = product.Filename
                };
                return Ok(response);
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
