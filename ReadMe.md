📦 GitHubDashboard
 ┣ 📂 API                           # .NET Core API
 ┃ ┣ 📂 GitHubDashboard.API
 ┃ ┃ ┣ 📂 Controllers                # API Endpoints
 ┃ ┃ ┃ ┣ 📜 GitHubController.cs       # Handles Repo & Issues API
 ┃ ┃ ┃ ┣ 📜 AuthController.cs         # GitHub OAuth Authentication
 ┃ ┃ ┣ 📂 Services                   # Business Logic Layer
 ┃ ┃ ┃ ┣ 📜 GitHubService.cs          # Calls GitHub API
 ┃ ┃ ┃ ┣ 📜 AuthService.cs            # Handles authentication
 ┃ ┃ ┣ 📂 Repositories               # Database Access Layer
 ┃ ┃ ┃ ┣ 📜 UserRepository.cs         # Handles users table
 ┃ ┃ ┃ ┣ 📜 GitHubRepoRepository.cs   # Stores repos/issues
 ┃ ┃ ┣ 📂 Models                     # DTOs, Entity Models
 ┃ ┃ ┃ ┣ 📜 User.cs                   # User Entity
 ┃ ┃ ┃ ┣ 📜 GitHubRepo.cs             # Repository Entity
 ┃ ┃ ┃ ┣ 📜 Issue.cs                  # Issue Entity
 ┃ ┃ ┣ 📂 Middleware                 # Authentication & Logging
 ┃ ┃ ┃ ┣ 📜 ExceptionMiddleware.cs     # Error Handling
 ┃ ┃ ┃ ┣ 📜 LoggingMiddleware.cs       # Request Logging
 ┃ ┃ ┣ 📂 Configurations              # API Keys, Settings
 ┃ ┃ ┃ ┣ 📜 AppSettings.json           # API Config
 ┃ ┃ ┣ 📂 Tests                       # Unit Tests
 ┃ ┃ ┃ ┣ 📜 GitHubServiceTests.cs      # Tests for GitHub API calls
 ┃ ┃ ┣ 📜 Program.cs                   # Entry Point
 ┃ ┃ ┣ 📜 Startup.cs                   # Dependency Injection & Middleware
 ┃ ┃ ┣ 📜 Dockerfile                    # Dockerfile for API
 ┃ ┃ ┣ 📜 GitHubDashboard.API.csproj    # .NET API Project File
 ┃
 ┣ 📂 Infrastructure                  # Database & Caching
 ┃ ┣ 📂 Database                      # Entity Framework Setup
 ┃ ┃ ┣ 📜 AppDbContext.cs              # Database Context
 ┃ ┃ ┣ 📜 Migrations/                   # EF Core Migrations
 ┃ ┣ 📂 RedisCache                     # Caching Layer
 ┃ ┃ ┣ 📜 RedisCacheService.cs         # Caches API responses
 ┃ ┃ ┣ 📜 RedisConfig.cs               # Configures Redis
 ┃ ┣ 📂 Messaging                     # WebSockets / SignalR
 ┃ ┃ ┣ 📜 RealTimeUpdates.cs           # Sends live data updates
 ┃ ┣ 📜 Infrastructure.csproj          # Infrastructure Project File
 ┃ ┣ 📜 Dockerfile                      # Dockerfile for Infrastructure
 ┃
 ┣ 📂 UI                              # React Frontend
 ┃ ┣ 📂 github-dashboard              # React App
 ┃ ┃ ┣ 📂 public                      # Static assets
 ┃ ┃ ┣ 📂 src                         # Source Code
 ┃ ┃ ┃ ┣ 📂 components                 # UI Components
 ┃ ┃ ┃ ┃ ┣ 📜 RepoList.tsx             # Displays GitHub Repos
 ┃ ┃ ┃ ┃ ┣ 📜 IssueList.tsx            # Displays Issues
 ┃ ┃ ┃ ┣ 📂 pages                      # Page Components
 ┃ ┃ ┃ ┃ ┣ 📜 Dashboard.tsx            # Main Dashboard Page
 ┃ ┃ ┃ ┃ ┣ 📜 Repos.tsx                # Repositories Page
 ┃ ┃ ┃ ┃ ┣ 📜 Issues.tsx               # Issues Page
 ┃ ┃ ┃ ┣ 📂 services                   # API Calls
 ┃ ┃ ┃ ┃ ┣ 📜 githubService.ts         # Fetches Repo & Issue data
 ┃ ┃ ┃ ┃ ┣ 📜 authService.ts           # Handles OAuth Login
 ┃ ┃ ┃ ┣ 📂 hooks                      # Custom React Hooks
 ┃ ┃ ┃ ┃ ┣ 📜 useFetch.ts              # API Fetch Hook
 ┃ ┃ ┃ ┣ 📂 utils                      # Helper Functions
 ┃ ┃ ┃ ┣ 📜 App.tsx                     # Root React Component
 ┃ ┃ ┃ ┣ 📜 index.tsx                   # React Entry Point
 ┃ ┃ ┃ ┣ 📜 styles.css                  # Global Styles
 ┃ ┃ ┣ 📜 Dockerfile                     # Dockerfile for UI
 ┃ ┃ ┣ 📜 package.json                   # React Dependencies
 ┃
 ┣ 📂 DevOps                           # CI/CD, Deployment, Monitoring
 ┃ ┣ 📜 Docker-compose.yml             # Docker Compose for local dev
 ┃ ┣ 📂 github-actions                 # GitHub Actions Config
 ┃ ┃ ┣ 📜 deploy.yml                   # CI/CD Pipeline Config
 ┃ ┣ 📂 kubernetes                     # Kubernetes Configs
 ┃ ┃ ┣ 📜 api-deployment.yml           # API Deployment
 ┃ ┃ ┣ 📜 ui-deployment.yml            # UI Deployment
 ┃ ┃ ┣ 📜 redis-deployment.yml         # Redis Deployment
 ┃ ┃ ┣ 📜 postgres-deployment.yml      # Database Deployment
 ┃ ┣ 📂 terraform                      # Infrastructure as Code
 ┃ ┃ ┣ 📜 main.tf                      # Defines Azure Resources
 ┃ ┃ ┣ 📜 variables.tf                  # Terraform Variables
 ┃ ┃ ┣ 📜 outputs.tf                    # Terraform Outputs
 ┃ ┣ 📜 monitoring.yml                  # Grafana & Prometheus Config
 ┃
 ┣ 📜 .gitignore                       # Git Ignore File
 ┣ 📜 README.md                        # Project Documentation
 ┣ 📜 GitHubDashboard.sln               # .NET Solution File
