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
            model.Image = obj.Image;
            model.Mimetype = obj.Mimetype;
            obj.Filename = obj.Filename;
            return model;


        }
    }
}
