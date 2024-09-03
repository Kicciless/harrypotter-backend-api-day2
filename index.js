require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.PORT
const characters=require('./harrypotter.json')

//middleware  - from json
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Harry Potter Characters")
})

app.get('/characters', (req,res)=>{
    res.send(characters)
})

//JavaScript Array find() methood 
//pareseInt is added to ensure that it passes as an integer or alternative use a triple ===
app.get('/characters/:id', (req,res)=>{
    const id=parseInt (req.params.id);
    const character=characters.find((character)=>character.id==id)
    if (character==undefined){
        res.status(404).send("the character does not exist")
    } else{
        res.send(character)
    }
    })

    // .map allows only the characters id to be added to an additional array 
    //...id - can be used to anything that has iteratible (more than elements) can checks and through everything
const ids=characters.map((character)=>(character.id))
let maxID=Math.max(...ids)

app.post('/characters',(req,res)=>{
    const character=characters.find((character)=>character.name.toLowerCase()==req.body.name.toLowerCase())
    console.log(req.body)
    if (character!=undefined){
        res.status(409).send("The charater already exist");
    }
    else{
        maxID+=1;//this is equal to maxID=maxID+1
        req.body.id=maxID;
        characters.push(req.body)
        res.status(201).send(req.body)
    }
})
app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})

app.delete("/characters/:name",(req,res)=>{
    const name=req.params.name.toLowerCase();
    const characterIndex=characters.findIndex((character)=>character.name.toLowerCase()==name)
    console.log(characterIndex)
    if(characterIndex==-1){
        res.status(404).send("The character does not exist")
    }
    else{
        characters.splice(characterIndex,1)
        res.sendStatus(204)
    }
})