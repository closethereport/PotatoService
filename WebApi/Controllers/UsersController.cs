using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Annotations;
using WebApi.Dto.Users;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UsersController(
            IUserService userService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        /// <remarks>
        /// Войти в систему.
        /// </remarks>
        [AllowAnonymous]
        [Route("Login")]
        [HttpPost]
        [ProducesResponseType(typeof(LoginOutDto), StatusCodes.Status200OK)]
        [SwaggerResponse((int)HttpStatusCode.OK, "Authorized user", typeof(LoginOutDto))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(string))]
        public async Task<ObjectResult> Authenticate([FromBody] LoginInDto model)
        {
            var user = _userService.Authenticate(model.Login, model.Password);

            if (user == null)
                return BadRequest("Login or password is incorrect");

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            var loginOut = _mapper.Map<LoginOutDto>(user);
            loginOut.token = tokenString;
            // return basic user info and authentication token
            return StatusCode((int)HttpStatusCode.OK, loginOut);
      
        }

        /// <remarks>
        /// Регистрация в системе
        /// </remarks>
        [AllowAnonymous]
        [HttpPost("Register")]
        [SwaggerResponse((int)HttpStatusCode.OK, "Newly created user", typeof(UserDto))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            // map dto to entity
            var user = _mapper.Map<User>(dto);

            try
            {
                // create user
                var newUser = _userService.Create(user, dto.Password);
                return StatusCode((int)HttpStatusCode.OK, _mapper.Map<UserDto>(newUser));
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        /// <remarks>
        /// Все пользователи
        /// </remarks>
        [HttpGet("GetAllUsers")]
        [SwaggerResponse((int)HttpStatusCode.OK, "Users list", typeof(IEnumerable<UserDto>))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            var model = _mapper.Map<IList<UserDto>>(users);
            return Ok(model);
        }

        /// <remarks>
        /// Получить пользователя
        /// </remarks>
        [HttpGet("GetUser")]
        [SwaggerResponse((int)HttpStatusCode.OK, "User", typeof(UserDto))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);
            var model = _mapper.Map<UserDto>(user);
            return Ok(model);
        }

        /// <remarks>
        /// Изменить пользователя
        /// </remarks>
        [HttpPut("AlterUser")]
        [SwaggerResponse((int)HttpStatusCode.OK, "User", typeof(UserDto))]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult Update([FromBody] UserDto model)
        {
            // map dto to entity and set id
            var user = _mapper.Map<User>(model);

            try
            {
                // update user 
                _userService.Update(user, model.Password);
                var alterUser = _userService.GetById(user.Id);
                var userDto = _mapper.Map<UserDto>(alterUser);
                return Ok(userDto);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        /// <remarks>
        /// Удалить пользователя
        /// </remarks>
        [HttpDelete("DeleteUser")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}