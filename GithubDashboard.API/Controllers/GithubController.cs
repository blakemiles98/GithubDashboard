using GithubDashboard.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace GithubDashboard.API.Controllers
{
    [ApiController]
    [Route("api/github")]
    public class GithubController : ControllerBase
    {
        private readonly GithubService _githubService;
        public GithubController(GithubService githubService) => _githubService = githubService;

        [HttpGet("repos")]
        public async Task<IActionResult> GetUserRepositories([FromHeader] string accessToken)
        {
            var repos = await _githubService.GetUserRepositories(accessToken);
            return Ok(repos);
        }
    }
}