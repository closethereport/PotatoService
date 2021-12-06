﻿namespace WebApi.Dto.Template
{
    public class TemplateInfoDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Faculty { get; set; }
        public string Department { get; set; }
        public string JobName { get; set; }
        public string Subject { get; set; }
        public string LessonName { get; set; }
        public string FullNameTeacher { get; set; }
        public string CourseNumber { get; set; }
        public string GroupName { get; set; }
    }
}