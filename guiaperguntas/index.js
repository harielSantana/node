const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

//bodyparser
app.use(urlencoded({extended:false}))
app.use(json())

app.get("/",(req, res) => {
    res.render("index")
});

app.get('/perguntar', (req,res) =>{
    res.render("perguntar")
})

app.post('/salvarpergunta',(req,res) => {
    res.send("Formulário recebido!")
})

app.listen(8080,()=>{console.log("App rodando!");});