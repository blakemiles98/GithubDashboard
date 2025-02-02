using System.Net.Http.Headers;
using System.Text.Json;
using GithubDashboard.API.Dtos;

namespace GithubDashboard.API.Services
{
    public class GithubService
    {
        private readonly HttpClient _httpClient;
        public GithubService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "GithubDashboard.API");
        }

        public async Task<List<RepoDto>> GetUserRepositories(string accessToken)
        {
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            var response = await _httpClient.GetStringAsync("https://api.github.com/user/repos");

            return JsonSerializer.Deserialize<List<RepoDto>>(response);
        }
    }
}