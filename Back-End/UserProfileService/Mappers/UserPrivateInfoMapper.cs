using UserProfileService.DTO;
using UserProfileService.Model;

namespace UserProfileService.Mappers
{
    public static class UserPrivateInfoMapper
    {
        public static UserProfilePrivateInfo PrivateInfoDtoToModel(PutPrivateInfoDtoRequest dto)
        {
            return new UserProfilePrivateInfo
            {
                UserId = dto.UserId ,
                Email = dto.Email ?? null,
                password = dto.password ?? null
            };
        }
    }
}
