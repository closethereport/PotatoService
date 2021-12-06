using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Validations;
using Swashbuckle.AspNetCore.Annotations;
using WebApi.Dto.DocumentGenerator;
using WebApi.Dto.Template;
using WebApi.Dto.Users;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Services;
using Wordroller;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DocumentGeneratorController : ControllerBase
    {
        private readonly IMapper _mapper;

        public DocumentGeneratorController(
            IMapper mapper)
        {
            _mapper = mapper;
        }


        /// <remarks>
        /// Генерация документа
        /// </remarks>
        [AllowAnonymous]
        [HttpPost("Generate")]
        public IActionResult Generate([FromBody] DocumentGeneratorDto dto)
        {
            //TODO
            try
            {
                using (var document = new WordDocument(CultureInfo.GetCultureInfo("ru-ru")))
                {
                    document.Styles.DocumentDefaults.RunProperties.Font.Ascii = "Times New Roman";
                    document.Styles.DocumentDefaults.RunProperties.Font.HighAnsi = "Arial";
                    document.Styles.DocumentDefaults.ParagraphProperties.Spacing.BetweenLinesLn = 1.5;

                    var section = document.Body.Sections.First();

                    var paragraph1 = section.AppendParagraph();
                    paragraph1.AppendText("This is the ASCII text in the default Times New Roman font");
                    paragraph1.AppendText("\n");
                    paragraph1.AppendText("А это кириллический текст другим шрифтом");

                    var paragraph2 = section.AppendParagraph();
                    var run2 = paragraph2.AppendText("This is a text with a font different form default");
                    run2.Properties.Font.Ascii = "Helvetica";

                    var fs = new MemoryStream();
                    document.Save(fs);
                    byte[] file = fs.ToArray();
                    string file_type = "application/pdf";
                    string file_name = $"{dto.UserFullName}_{dto.TemplateInfo.LessonName}.docx";
                    return File(file, file_type, file_name);
                }
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }

     

        
    }
}