using TicketProductApi.Dto;
using TicketProductApi.Model;

namespace TicketProductApi.Mapper
{
    public static class ProductMapper
    {
        public static GetDtoResponse ProductAndImageToDto(ProductAndImage obj)
        {
            return new GetDtoResponse
            {
                Id          = obj.Id,
                Name        = obj.Name,
                Description = obj.Description,
                Price       = obj.Price,
                Stock       = obj.Stock,
                Attributes  = obj.Attributes,
                Category    = obj.Category,
                UserId      = obj.UserId,
                Images      = obj.Images.Select(img => new ProductImageDto
                {
                    Id_Image = img.Id_Image,
                    Image    = img.Image,
                    Mimetype = img.Mimetype,
                    Filename = img.Filename
                }).ToList()
            };
        }

        public static List<GetDtoResponse> ProductsToGetDtoList(List<ProductAndImage> products)
        {
            return products.Select(ProductAndImageToDto).ToList();
        }

        public static ProductAndImage ModelImageToModelAndImage(Product pro, ProductImage img)
        {
            return new ProductAndImage
            {
                Id          = pro.Id,
                Name        = pro.Name,
                Description = pro.Description,
                Price       = pro.Price,
                Stock       = pro.Stock,
                Attributes  = pro.Attributes,
                Category    = pro.Category,
                UserId      = pro.UserId,
                Images      = img != null ? new List<ProductImage> { img } : new List<ProductImage>()
            };
        }

        public static Product PostDtoToProduct(PostDtoRequest obj)
        {
            return new Product
            {
                Name        = obj.Name,
                Description = obj.Description,
                Price       = obj.Price,
                Stock       = obj.Stock,
                Attributes  = obj.Attributes,
                Category    = obj.Category,
                UserId      = obj.UserId
            };
        }

        public static Product PutDtoToProduct(PutDtoRequest obj)
        {
            return new Product
            {
                Id          = obj.Id,
                Name        = obj.Name,
                Description = obj.Description,
                Price       = obj.Price,
                Stock       = obj.Stock,
                Attributes  = obj.Attributes,
                Category    = obj.Category,
                UserId      = obj.UserId
            };
        }
    }
}
