using GithubDashboard.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers(); // Enable Controllers for API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register GitHub API Service with HttpClient
builder.Services.AddHttpClient<GithubService>();

var app = builder.Build();

// Configure middleware pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Enables the API Endpoints

app.Run();
