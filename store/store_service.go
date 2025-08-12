package store // Defines the package name. This code belongs to the 'store' package.

import (
	"context" // Imports the context package used to carry deadlines, cancelation signals, and other request-scoped values.
	"fmt"
	"time" // Imports the time package for working with durations, timestamps, etc.

	"github.com/go-redis/redis/v8" // Imports the go-redis client library to interact with a Redis server.
)

// Define the struct wrapper around raw Redis client
type StorageService struct {
	redisClient *redis.Client // Declares a field to hold the Redis client instance used for Redis operations.
}

// Top-level declarations for the storeService and Redis context
var (
	storeService = &StorageService{}    // Creates a singleton-like instance of StorageService to be reused across the application.
	ctx          = context.Background() // Initializes a base context for Redis commands, used to control timeout and cancelation of operations.
)

const CacheDuration = 6 * time.Hour // Defines a constant for how long data should stay in the cache (6 hours).

// InitializesStore sets up the Redis client and returns the store service instance.
func InitializesStore() *StorageService {
	// Create a new Redis client with specified connection options
	redisClient := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", // Redis server address (localhost on default port 6379)
		Password: "",               // No password used (adjust if Redis has authentication)
		DB:       0,                // Use the default Redis database (DB 0)
	})

	// Ping the Redis server to test the connection
	pong, err := redisClient.Ping(ctx).Result()
	if err != nil {
		// If the connection fails, stop execution and log the error
		panic(fmt.Sprintf("Failed to connect to Redis: %v", err))
	}

	// Print confirmation that Redis started successfully, showing the ping response
	fmt.Printf("\nRedis Started Successfully: pong message = {%s}", pong)

	// Assign the Redis client to the global storeService instance
	storeService.redisClient = redisClient

	// Return the pointer to the initialized StorageService
	return storeService
}

func SaveUrlMapping(shortUrl string, originalUrl string, userId string) {

	err := storeService.redisClient.Set(ctx, shortUrl, originalUrl, CacheDuration).Err()
	if err != nil {
		panic(fmt.Sprintf("Failed saving key url | Error: %v - shortUrl: %s - originalUrl: %s\n", err, shortUrl, originalUrl))
	}

}

func RetrieveInitialUrl(shortUrl string) (string, error) {
	result, err := storeService.redisClient.Get(ctx, shortUrl).Result()
	// if err != nil{
	// 	panic(fmt.Sprintf("Failed retrieving key url | Error: %v -shortUrl : %s\n",err,shortUrl))
	// }
	// return result

	if err == redis.Nil {
		return "", fmt.Errorf("short URL not found")
	} else if err != nil {
		return "", err
	}
	return result, nil

}
