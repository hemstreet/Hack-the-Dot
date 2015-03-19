package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))
	log.Println("Server started: http://localhost:3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
