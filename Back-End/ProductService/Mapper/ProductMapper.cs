using TicketProductApi.Dto;
using TicketProductApi.Model;

namespace TicketProductApi.Mapper
{
    public static class ProductMapper
    {
        public static ProductAndImage ModelImageToModelAndImage(ProductAndImage pro)
        {
            return new ProductAndImage
            {
                Id = pro.Id,
                Name = pro.Name,
                Description = pro.Description,
                Price = pro.Price,
                Stock = pro.Stock,
                Attributes = pro.Attributes,
                Category = pro.Category,
                UserId = pro.UserId,
                Images = pro.Images?.Select(img => new ProductImage
                {
                    Id_Image = img.Id_Image,
                    Product_Id = img.Product_Id,
                    Image = img.Image,
                    Mimetype = img.Mimetype,
                    Filename = img.Filename
                }).ToList() ?? new List<ProductImage>()
            };
        }
        public static GetDtoResponse ProductAndImageToDto(ProductAndImage obj)
        {
            GetDtoResponse model = new GetDtoResponse();
            model.Id = obj.Id;
            model.Name = obj.Name;
            model.Description = obj.Description;
            model.Price = obj.Price;
            model.Stock = obj.Stock;
            model.Attributes = obj.Attributes;
            model.Category = obj.Category;
            model.UserId = obj.UserId;
            model.Images = obj.Images.Select(img => new GetImageDtoResponse
            {
                Id_Image = img.Id_Image,
                Product_Id = img.Product_Id,
                Image = img.Image,
                Mimetype = img.Mimetype,
                Filename = img.Filename
            }).ToList();
            return model;


        }
        public static List<GetDtoResponse> ProductsToGetDtoList(List<ProductAndImage> products)
        {
            return products.Select(p => new GetDtoResponse
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price,
                Stock = p.Stock,
                Attributes = p.Attributes,
                Category = p.Category,
                UserId = p.UserId,
                Images = p.Images.Select(img => new GetImageDtoResponse
                {
                    Id_Image = img.Id_Image,
                    Product_Id = img.Product_Id,
                    Image = img.Image,
                    Mimetype = img.Mimetype,
                    Filename = img.Filename
                }).ToList()
            }).ToList();
        }
        public static ProductAndImage PostDtoToProductAndImage(PostDtoRequest obj)
        {
            return new ProductAndImage
            {
                Name = obj.Name,
                Description = obj.Description,
                Price = obj.Price,
                Stock = obj.Stock,
                Attributes = obj.Attributes,
                Category = obj.Category,
                UserId = obj.UserId,
                Images = obj.Images?.Select(img => new ProductImage
                {
                    // Product_Id will be set after inserting the product
                    Image = img.Image,
                    Mimetype = img.Mimetype,
                    Filename = img.Filename
                }).ToList() ?? new List<ProductImage>()
            };
        }
        public static Product PutDtoToProduct(PutDtoRequest obj)
        {
            Product product = new Product();
            product.Id = obj.Id;
            product.Name = obj.Name;
            product.Description = obj.Description;
            product.Price = obj.Price;
            product.Stock = obj.Stock;
            product.Attributes = obj.Attributes;
            product.Category = obj.Category;
            product.UserId = obj.UserId;
            return product;
        }

    }
}
