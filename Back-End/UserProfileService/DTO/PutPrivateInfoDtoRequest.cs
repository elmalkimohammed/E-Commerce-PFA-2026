namespace UserProfileService.DTO
{
    public class PutPrivateInfoDtoRequest
    {
        public Guid UserId { get; set; }
        public string? Email { get; set; }
        public string? password { get; set; }
    }
}
