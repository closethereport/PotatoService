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
            //this.Database.Migrate();
            Configuration = configuration;
            Database.EnsureCreated();
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

                entity.Property(e => e.Id).HasColumnName("id");

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