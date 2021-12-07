using System.Collections.Generic;
using System.Linq;
using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Annotations;
using WebApi.Dto.Template;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class TemplatesController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private readonly IMapper _mapper;
        private readonly ITemplateService _templateService;

        public TemplatesController(
            ITemplateService templateService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _templateService = templateService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }


        /// <remarks>
        ///     Создать новый шаблон
        /// </remarks>
        [HttpPost("Add")]
        [SwaggerResponse((int) HttpStatusCode.OK, Type = typeof(TemplateInfoDto))]
        [SwaggerResponse((int) HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult Add([FromBody] TemplateInfoDto dto)
        {
            dto.Id = 0;
            var template = _mapper.Map<Template>(dto);
            try
            {
                var userId = int.Parse(HttpContext.User.Identity.Name ?? string.Empty);
                template.UserId = userId;
                var newTemplate = _templateService.Create(template);
                return StatusCode((int) HttpStatusCode.OK, _mapper.Map<TemplateInfoDto>(newTemplate));
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <remarks>
        ///     Получить все шаблоны на сервере
        /// </remarks>
        [HttpGet("GetAllTemplates")]
        [SwaggerResponse((int) HttpStatusCode.OK, Type = typeof(IEnumerable<TemplateInfoDto>))]
        [SwaggerResponse((int) HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult GetAll()
        {
            var templates = _templateService.GetAll();
            var model = _mapper.Map<IList<TemplateInfoDto>>(templates);
            return Ok(model);
        }

        /// <remarks>
        ///     Получить все шаблоны пользователя
        /// </remarks>
        [HttpGet("GetTemplatesByUserId")]
        [SwaggerResponse((int) HttpStatusCode.OK, Type = typeof(IEnumerable<TemplateInfoDto>))]
        [SwaggerResponse((int) HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult GetByUserId(int id)
        {
            var templates = _templateService.GetAll().Where(x => x.UserId == id);
            var model = _mapper.Map<IList<TemplateInfoDto>>(templates);
            return Ok(model);
        }

        /// <remarks>
        ///     Получить шаблон по id шаблону
        /// </remarks>
        [HttpGet("GetTemplate")]
        [SwaggerResponse((int) HttpStatusCode.OK, Type = typeof(TemplateInfoDto))]
        [SwaggerResponse((int) HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult GetById(int id)
        {
            var user = _templateService.GetById(id);
            var model = _mapper.Map<TemplateInfoDto>(user);
            return Ok(model);
        }

        /// <remarks>
        ///     Изменить шаблон
        /// </remarks>
        [HttpPut("AlterTemplate")]
        [SwaggerResponse((int) HttpStatusCode.OK, Type = typeof(TemplateInfoDto))]
        [SwaggerResponse((int) HttpStatusCode.BadRequest, Type = typeof(string))]
        public IActionResult Update([FromBody] TemplateInfoDto model)
        {
            var template = _mapper.Map<Template>(model);
            try
            {
                _templateService.Update(template);
                var alterTemplate = _templateService.GetById(template.Id);
                return Ok(_mapper.Map<TemplateInfoDto>(alterTemplate));
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <remarks>
        ///     Удалить шаблон
        /// </remarks>
        [HttpDelete("DeleteTemplate")]
        public IActionResult Delete(int id)
        {
            try
            {
                _templateService.Delete(id);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}