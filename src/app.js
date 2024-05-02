import express from "express";
import db from "./config/dbConnect.js";
import contas from "./models/Conta.js"

db.on("error", console.log.bind(console, "erro na conexao!"))
db.once("open", () =>{
    console.log ("Conexao bem sucedida!")
})


const app = express();

app.use(express.json())

//const contas = [

    //{id: 1, "nome": "BB"},
    //{id:2, "nome":"Original"}
//]

app.get('/', (req,res) =>{
 
    res.status(200).send("Contas2023");

})

app.get('/contas', (req,res) =>{
    
    contas.find((err, contas) =>{
    res.status(200).json(contas)
    })
    

})

app.get('/contas/:id', (req,res) =>{
 
    let index = buscaConta(req.params.id)
    res.json(contas[index]);

})
app.post('/contas', (req,res) =>{
 
    contas.push(req.body);
    res.status(201).send("conta cadastrada!");

})

app.put('/contas/:id', (req,res) =>{
 
    let index = buscaConta(req.params.id)
    contas[index].nome = req.body.nome;
    res.json(contas);

})

app.delete('/contas/:id', (req,res) =>{


    let {id} = req.params;
    let index = buscaConta (id);
    contas.splice(index,1);
    res.send ('Conta ${id} removida!');
    

})

function buscaConta(id){

    return contas.findIndex(conta => conta.id == id)
}

export default app;