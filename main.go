package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/udaraKavishka/go-url-shortener/handler"
	"github.com/udaraKavishka/go-url-shortener/store"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hey Go URL Shortener !",
		})
	})

	r.POST("/create-shorturl", func(c *gin.Context) {
		handler.CreateShortUrl(c)
	})

	r.GET("/:shortUrl", func(c *gin.Context) {
		handler.HandleShortUrlRedirect(c)
	})

	store.InitializesStore()

	port := os.Getenv("PORT")
	if port == "" {
		port = "9808"
	}
	if err := r.Run(":" + port); err != nil {
		panic(fmt.Sprintf("Failed to start server: %v", err))
	}
}
