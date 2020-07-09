const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home", {recipes: recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", {recipes: recipes})
})

server.get("/details/:id", function(req, res) { 
    
    const recipeIndex = req.params.id
    console.log(req.params)
    console.log(recipeIndex)    
    console.log(recipes[recipeIndex])

    return res.render("details", {recipes: recipes[recipeIndex]} )
})

server.listen(5000, function(){
    console.log("server is running")
})