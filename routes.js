const express = require('express')
const routes = express.Router()
const admin = require('./controllers/admin')
const recipes = require("./data.json")



routes.get("/", function (req, res) {
    return res.render("home", { recipes: recipes })
})

routes.get("/about", function (req, res) {
    return res.render("about")
})

routes.get("/recipes", function (req, res) {
    return res.render("recipes", { recipes: recipes })
})

routes.get("/details/:id", admin.details);
routes.get('/admin/index', admin.index); // Mostrar a lista de receitas
routes.get("/admin/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/:id/edit", admin.edit); // Mostrar formulário de edição de receita
routes.post("/admin", admin.post); // Cadastrar nova receita
routes.put("/admin", admin.put); // Editar uma receita
routes.delete("/admin", admin.delete); // Deletar uma receita

module.exports = routes