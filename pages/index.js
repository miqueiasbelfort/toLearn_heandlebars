const express = require('express')

const router = express.Router()

router.post('/tecnologias', (req,res) => {
    const skills = [
        {
            nomeTec: "JavaScript",
            nivel: "6/10",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        },
        {
            nomeTec: "Node JS",
            nivel: "4/10",
            url: "https://nodejs.org"
        },
        {
            nomeTec: "React JS",
            nivel: "5/10",
            url: "https://reactjs.org"
        }
    ]
    const nomePeople = req.body.nome

    res.render('skills', {skills, nomePeople})
})

router.get("/formulario", (req,res)=>{
    res.render('form')
})


module.exports = router