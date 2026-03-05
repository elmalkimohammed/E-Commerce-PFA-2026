using UserProfileService.DTO;
using UserProfileService.Model;

namespace UserProfileService.Mappers
{
    public static class UserFullInfoMapper
    {
        public static GetFullInfoResponse UserFullInfoModelToDto(UserFullInfo model)
        {
            return new GetFullInfoResponse
            {
                UserId = model.UserId,
                Email = model.Email,
                Password = model.Password,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Phone = model.Phone,
                Address = model.Address,
                Sex = model.Sex,
                DateOfBirth = model.DateOfBirth,
                ProfileImage = model.ProfileImage
            };
        }
    }
}
