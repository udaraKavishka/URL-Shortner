# Go URL Shortener

A simple and fast URL shortening service built with Go, Gin, and Redis. This project provides endpoints for generating short links and redirecting to the original URLs.

## Features

* Create short URLs from long links
* Redirect short URLs to original targets
* Redis backed storage for fast lookups
* Clean and simple API

---

### Tech Stack
* Go
* Gin Web Framework
* Redis
* Docker (for Redis)
---

## Prerequisites

* Go 1.11 or newer
* Docker installed locally
* Redis running in Docker

Start Redis using Docker:

```bash
docker run -d \
  --name redis-shortener \
  -p 6379:6379 \
  redis:latest
```

---

## Project Setup

Clone the project:

```bash
git clone https://github.com/your-username/go-url-shortener.git
cd go-url-shortener
```

Install dependencies:

```bash
go mod tidy
```

Run the service:

```bash
go run main.go
```

The API will be available at:

```
http://localhost:9808
```

---

## API Endpoints

### Create short URL

**POST** `/create-short-url`

Request body:

```json
{
  "long_url": "https://example.com/very-long-link",
  "user_id": "12345"
}
```

Sample curl request:

```bash
curl --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "long_url": "https://example.com/very-long-link",
    "user_id": "12345"
  }' \
  http://localhost:9808/create-short-url
```

Response example:

```json
{
  "message": "short url created successfully",
  "short_url": "http://localhost:9808/a1B2c3D4"
}
```

### Redirect

**GET** `/:shortUrl`

Example:

Visit:

```
http://localhost:9808/a1B2c3D4
```

Browser should redirect to the original long URL.

---

## Testing Example

1. Start the service
2. Send a POST request:

```bash
curl --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "long_url": "https://go.dev/doc/",
    "user_id": "test-user"
  }' \
  http://localhost:9808/create-short-url
```

3. Copy the returned short_url
4. Paste it in your browser or use curl:

```bash
curl -v http://localhost:9808/a1B2c3D4
```

You should see a 302 redirect to the original link.

---

## Future Improvements

* Dockerize the full service
* Add SQL backup storage
* Add a simple frontend
* Add analytics for click tracking

---
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Happy URL shortening! 🚀

---
