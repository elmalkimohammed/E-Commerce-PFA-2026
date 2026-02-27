using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using TicketProductApi.Dto;
using TicketProductApi.Mapper;
using TicketProductApi.Model;
using TicketProductApi.Repo;


namespace TicketProductApi.Controllers
{
    [Route("TechStore/ProductService")]
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
        [HttpPost]
            public IActionResult addProduct(PostDtoRequest obj)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                ProductAndImage product = ProductMapper.PostDtoToProductAndImage(obj);
                try
                {
                    _productHandler.AddProductWithImages(product);
                    return Ok();
                }
                catch (Exception ex)
                {
                    // TEMP: return full error so we can debug
                    return BadRequest(ex.ToString());
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
        
    }
}
