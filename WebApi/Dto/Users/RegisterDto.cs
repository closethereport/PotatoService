using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto.Users
{
    public class RegisterDto
    {
        [Required] public string Login { get; set; }

        [Required] public string Password { get; set; }

        public string Email { get; set; }
    }
}