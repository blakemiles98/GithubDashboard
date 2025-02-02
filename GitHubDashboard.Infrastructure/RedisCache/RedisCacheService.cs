using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubDashboard.Infrastructure.RedisCache
{
    internal class RedisCacheService(IConnectionMultiplexer redis)
    {
        private readonly IDatabase _cache = redis.GetDatabase();

        public async Task<string> GetCacheValueAsync(string key) => await _cache.StringGetAsync(key);
        public async Task SetCacheValueAsync(string key, string value) => await _cache.StringSetAsync(key, value);
    }
}
