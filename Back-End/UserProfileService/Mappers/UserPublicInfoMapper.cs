using UserProfileService.DTO;
using UserProfileService.Model;

namespace UserProfileService.Mappers
{
    public static class UserPublicInfoMapper
    {
        public static UserProfilePublicInfo PublicInfoDtoToModel(PutPublicInfoDtoRequest dto)
        {
            return new UserProfilePublicInfo
            {
                UserId = dto.UserId,
                FirstName = dto.FirstName ?? null,
                LastName = dto.LastName ?? null,
                Phone = dto.Phone ?? null,
                Address = dto.Address ?? null,
                Sex = dto.Sex ?? null,
                DateOfBirth = dto.DateOfBirth ?? null,
                ProfileImage = dto.ProfileImage ?? null
            };
        }
    }
}
