# Stage 1: Build
FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY go.* .
RUN go mod download

COPY . .

RUN go build -o url-shortner

# Stage 2: Run
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

COPY --from=builder /app/url-shortner .

EXPOSE 9808

CMD ["./url-shortner"]
