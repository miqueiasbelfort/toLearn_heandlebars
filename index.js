const express = require("express")
const exphbs = require("express-handlebars")
const pages = require('./pages')

// variaveis de ambiente
const app = express()
const port = 3000

// CSS config
app.use(express.static('public'))

//config partial handlebars
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

//confi do body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// configuração do handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use("/pages", pages)

app.get("/", (req,res) => { 
    res.render('home')
})

app.listen(port, ()=>{
    console.log("Server running")
})