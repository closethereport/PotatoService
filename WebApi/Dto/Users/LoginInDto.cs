using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto.Users
{
    public class LoginInDto
    {
        [Required] public string Login { get; set; }

        [Required] public string Password { get; set; }
    }
}