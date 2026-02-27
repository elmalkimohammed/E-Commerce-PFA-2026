using TicketProductApi.Dto;
using TicketProductApi.Model;

namespace TicketProductApi.Mapper
{
    public static class ProductImageMapper
    {
        public static ProductImage PostImageToProductImage(PostImageDtoRequest dto)
        {
            return new ProductImage
            {
                Product_Id = dto.Product_Id,
                Image = dto.Image,
                Mimetype = dto.Mimetype,
                Filename = dto.Filename
            };
        }
        
    }
}
