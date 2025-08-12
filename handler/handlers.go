package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/udaraKavishka/go-url-shortener/shortener"
	"github.com/udaraKavishka/go-url-shortener/store"
)

type UrlCreationRequest struct {
	LongUrl string `json:"longUrl" binding:"required"`
	UserId  string `json:"userId" binding:"required"`
}

func CreateShortUrl(c *gin.Context) {

	var creationRequest UrlCreationRequest

	if err := c.ShouldBindJSON(&creationRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	shortUrl := shortener.GenerateShortLink(creationRequest.LongUrl, creationRequest.UserId)
	store.SaveUrlMapping(shortUrl, creationRequest.LongUrl, creationRequest.UserId)

	host := "http://localhost:9808/"
	c.JSON(200, gin.H{
		"message":  "Successfully created short url",
		"shortUrl": host + shortUrl,
	})

}

// func HandleShortUrlRedirect(c *gin.Context) {
// 	shortUrl := c.Param("short")
// 	initialUrl := store.RetrieveInitialUrl(shortUrl)
// 	c.Redirect(302, initialUrl)

// }

func HandleShortUrlRedirect(c *gin.Context) {
	shortUrl := c.Param("shortUrl")

	initialUrl, err := store.RetrieveInitialUrl(shortUrl)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Short URL not found",
		})
		return
	}

	c.Redirect(http.StatusFound, initialUrl)
}
