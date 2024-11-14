package main

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type record struct map[string]T

type records struct []record

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		data, err := ioutil.ReadFile("photos.json")

		if err != nil {
			fmt.println("Error")
		}

		w.Write([]byte("welcome"))
	})
	http.ListenAndServe(":8080", r)
}