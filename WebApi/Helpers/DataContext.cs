using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebApi.Entities;
using WebApi.Services;

namespace WebApi.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
            Database.EnsureCreated();
            Database.Migrate();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Template> Templates { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users", "security");
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedOnAdd();

                entity.OwnsOne(p => p.TemplateDefault);
            });

            byte[] passwordHash, passwordSalt;
            UserService.CreatePasswordHash("admin", out passwordHash, out passwordSalt);
            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                Login = "admin",
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            });

            modelBuilder.Entity<Template>(entity =>
            {
                entity.ToTable("Templates", "core");

                entity.Property(e => e.Id).HasColumnName("id").ValueGeneratedOnAdd();
                ;

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Templates)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_Template - UserId");
            });


            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
        }
    }
}