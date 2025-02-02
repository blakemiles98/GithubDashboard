using Microsoft.EntityFrameworkCore;

namespace GitHubDashboard.Infrastructure.Database
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<GithubRepo> GithubRepos { get; set; }
    }
}
