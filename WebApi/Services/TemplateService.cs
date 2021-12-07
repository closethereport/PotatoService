using System.Collections.Generic;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public interface ITemplateService
    {
        IEnumerable<Template> GetAll();
        Template GetById(int id);
        Template Create(Template template);
        void Update(Template template);
        void Delete(int id);
    }

    public class TemplateService : ITemplateService
    {
        private readonly DataContext _context;

        public TemplateService(DataContext context)
        {
            _context = context;
        }

        public IEnumerable<Template> GetAll()
        {
            return _context.Templates;
        }

        public Template GetById(int id)
        {
            return _context.Templates.Find(id);
        }

        public Template Create(Template template)
        {
            _context.Templates.Add(template);
            _context.SaveChanges();
            return template;
        }

        public void Update(Template templateParam)
        {
            var template = _context.Templates.Find(templateParam.Id);

            if (template == null)
                throw new AppException("Template not found");


            template.CourseNumber = templateParam.CourseNumber;
            template.Department = templateParam.Department;
            template.Faculty = templateParam.Faculty;
            template.FullNameTeacher = templateParam.FullNameTeacher;
            template.GroupName = templateParam.GroupName;
            template.JobName = templateParam.JobName;
            template.LessonName = templateParam.LessonName;
            template.Subject = templateParam.Subject;

            _context.Templates.Update(template);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var template = _context.Templates.Find(id);

            if (template == null)
                throw new AppException("Template not found");

            _context.Templates.Remove(template);
            _context.SaveChanges();
        }
    }
}