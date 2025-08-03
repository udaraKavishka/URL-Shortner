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
	storeService = &StorageService{} // Creates a singleton-like instance of StorageService to be reused across the application.
	ctx = context.Background()       // Initializes a base context for Redis commands, used to control timeout and cancelation of operations.
)

const CacheDuration = 6 * time.Hour // Defines a constant for how long data should stay in the cache (6 hours).


