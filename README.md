# Go URL Shortener 🚀

![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

A high-performance, containerized URL shortening service built with a **Golang** backend and **Next.js** frontend, using **Redis** for blazing-fast storage.

## ✨ Features

*   **Fast & Efficient**: Built with Go (Gin framework) and Redis for low-latency redirects.
*   **Modern UI**: Sleek, responsive frontend built with Next.js 14 and Tailwind CSS.
*   **Containerized**: Fully Dockerized with multi-stage builds for optimized images.
*   **Easy Deployment**: Orchestrated with Docker Compose for one-command setup.

## 🛠️ Tech Stack

*   **Backend**: Go, Gin Web Framework
*   **Database**: Redis
*   **Frontend**: Next.js (App Router), React, Tailwind CSS
*   **DevOps**: Docker, Docker Compose

## 🚀 Getting Started

### Prerequisites

*   Docker & Docker Compose

### Fast Start (Docker)

The easiest way to run the full stack is with Docker Compose.

```bash
# Clone the repository
git clone https://github.com/udaraKavishka/URL-Shortner.git
cd URL-Shortner

# Start the application
docker-compose -f docker-compose.deploy.yml up --build -d
```

Access the application:
*   **Frontend**: `http://localhost:3000`
*   **Backend API**: `http://localhost:9808`

### Local Development

If you want to run services individually:

1.  **Start Redis**:
    ```bash
    docker run -d -p 6379:6379 redis:alpine
    ```

2.  **Start Backend**:
    ```bash
    go run main.go
    ```

3.  **Start Frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## 📦 Deployment

This project includes a production-ready `docker-compose.deploy.yml`. You can deploy this to any VPS (DigitalOcean, AWS EC2, Linode) that has Docker installed.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📝 License

This project is licensed under the MIT License.
