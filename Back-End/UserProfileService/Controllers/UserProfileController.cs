using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserProfileService.DTO;
using UserProfileService.Mappers;
using UserProfileService.Model;
using UserProfileService.Repository;
using UserProfileService.Services;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;

namespace UserProfileService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileHandler _UserHandler;
        public UserProfileController(IUserProfileHandler UserHandler)
        {
            _UserHandler = UserHandler;
        }
       
        [HttpPost]
        public IActionResult GetUserFullInfo(GetFullInfoRequest dto)
        {
            UserFullInfo user = _UserHandler.FullInfo(dto.UserId);
            if (user == null)
            {
                return NotFound();
            }
            GetFullInfoResponse response = UserFullInfoMapper.UserFullInfoModelToDto(user);
            return Ok(response);
        }
        [HttpPut]
        public IActionResult UpdatePrivateInfo(PutPrivateInfoDtoRequest dto)
        {
            try
            {
                UserProfilePrivateInfo user = UserPrivateInfoMapper.PrivateInfoDtoToModel(dto);
                _UserHandler.UpdatePrivateInfo(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPatch]
        public IActionResult UpdatePublicInfo([FromBody] PutPublicInfoDtoRequest dto)
        {
            try
            {
                UserProfilePublicInfo user = UserPublicInfoMapper.PublicInfoDtoToModel(dto);
                _UserHandler.UpdatePublicInfo(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
