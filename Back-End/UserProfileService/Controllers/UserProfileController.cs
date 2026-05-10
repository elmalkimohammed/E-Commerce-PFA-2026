using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserProfileService.DTO;
using UserProfileService.Mappers;
using UserProfileService.Model;
using UserProfileService.Repository;
using UserProfileService.Services;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

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

        [HttpGet]
        public IActionResult GetUserFullInfo()
        {
            var userId = (User.FindFirst(JwtRegisteredClaimNames.Sub)?? User.FindFirst(ClaimTypes.NameIdentifier))?.Value;
            UserFullInfo user = _UserHandler.FullInfo(userId);
            if (user == null)
            {
                return NotFound();
            }
            GetFullInfoResponse response = UserFullInfoMapper.UserFullInfoModelToDto(user);
            return Ok(response);
        }
        [HttpGet("{userId}")]
        [AllowAnonymous]  // Pour permettre à n'importe qui de voir les noms publics
        public IActionResult GetUserPublicInfo(Guid userId)
        {
            UserFullInfo user = _UserHandler.FullInfo(userId.ToString());
            if (user == null)
            {
                return NotFound();
            }
            
            // Retourner SEULEMENT les infos publiques (pas email, password, phone, address...)
            var publicInfo = new
            {
                userId = user.UserId,
                firstName = user.FirstName,
                lastName = user.LastName,
                profileImage = user.ProfileImage
            };
            
            return Ok(publicInfo);
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
        [HttpGet("fetchALLFullUsrsInfos")]
        public async Task<IActionResult> GetAllUsersFullInfo()
        {
            try
            {
                var users = await this._UserHandler.GetUsersFullInfos();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while fetching users" });
            }
        }
        /* Admin Endpoints */
        [HttpPut("admin/updatePrivateInfo")]
        [Authorize(Roles = "Admin")]
        public IActionResult AdminUpdatePrivateInfo(PutPrivateInfoDtoRequest dto)
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

        [HttpPatch("admin/updatePublicInfo")]
        [Authorize(Roles = "Admin")]
        public IActionResult AdminUpdatePublicInfo([FromBody] PutPublicInfoDtoRequest dto)
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
