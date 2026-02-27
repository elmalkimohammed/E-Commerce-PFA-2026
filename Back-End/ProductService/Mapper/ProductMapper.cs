using TicketProductApi.Dto;
using TicketProductApi.Model;

namespace TicketProductApi.Mapper
{
    public static class ProductMapper
    {
        public static ProductAndImage ModelImageToModelAndImage(Product Pro, ProductImage Img)
        {

            return new ProductAndImage
            {
                Id = Pro.Id,
                Name = Pro.Name,
                Description = Pro.Description,
                Price = Pro.Price,
                Stock = Pro.Stock,
                Attributes = Pro.Attributes,
                Category = Pro.Category,
                UserId = Pro.UserId,
                Id_Image = Img.Id_Image,
                Product_Id = Img.Product_Id,
                Image = Img.Image,
                Mimetype = Img.Mimetype,
                Filename = Img.Filename,
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
            model.Id_Image = obj.Id_Image;
            model.Image = obj.Image;
            model.Mimetype = obj.Mimetype;
            model.Filename = obj.Filename;
            return model;


        }
        public static List<GetDtoResponse> ProductsToGetDtoList(List<ProductAndImage> products)
        {
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
                    Id_Image = product.Id_Image,
                    Image = product.Image,
                    Mimetype = product.Mimetype,
                    Filename = product.Filename
                };
                response.Add(dto);
            }
            return response;
        }
        public static Product PostDtoToProduct(PostDtoRequest obj)
        {
            Product product = new Product();
            product.Name = obj.Name;
            product.Description = obj.Description;
            product.Price = obj.Price;
            product.Stock = obj.Stock;
            product.Attributes = obj.Attributes;
            product.Category = obj.Category;
            product.UserId = obj.UserId;
            return product;
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
