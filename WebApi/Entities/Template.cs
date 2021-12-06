using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi.Dto.Template;

namespace WebApi.Entities
{
    [Table("Template")]
    public class Template : TemplateInfoDto
    {
        [Key] public new int Id { get; set; }

        public User User { get; set; }
    }
}