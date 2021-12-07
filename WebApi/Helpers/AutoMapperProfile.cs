using AutoMapper;
using WebApi.Dto.Template;
using WebApi.Dto.Users;
using WebApi.Entities;

namespace WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<RegisterDto, User>();
            CreateMap<UserDto, User>();
            CreateMap<User, LoginOutDto>();

            CreateMap<TemplateInfoDto, TemplateDto>();
            CreateMap<TemplateDto, TemplateInfoDto>();

            CreateMap<TemplateDto, Template>();
            CreateMap<Template, TemplateDto>();

            CreateMap<TemplateInfoDto, Template>();
            CreateMap<Template, TemplateInfoDto>();
        }
    }
}