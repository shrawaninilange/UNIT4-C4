const express = require("express")
 
const mongoose = require("mongoose")

const app = express()

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/userss")
}


const userSchema = new mongoose.Schema({
    firstName : { type : String , require : true},
    lastName  : { type : String , require : true},
    email :  { type : String , require : true},
    password : { type : String , require : true},
},{
    timeStamp :  require
    
})

const User = mongoose.model("user",userSchema)



const TodoSchema = new mongoose.Schema({
    tile : { type : String , require : true},
    userId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user",
      required : true
    },
    
},{
    timeStamp : true,
    
})

const Todo = mongoose.model("todo",TodoSchema)


app.post("/register",async(req,res) =>{
    try {
        var user = User.create(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})

app.post("/login",async(req,res) =>{
    try {
        var user = User.create(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})
app.patch("/todos",async(req,res) =>{
    try {
        var user = User.find().lean().exec()
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})

app.post("/todos",async(req,res) =>{
    try {
        var user = User.create(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})

app.post("/todos/:id",async(req,res) =>{
    try {
        var user = User.findById(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})


app.patch("/todos/:id",async(req,res) =>{
    try {
        var user = User.findById(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})

app.delete("/todos/:id",async(req,res) =>{
    try {
        var user = User.findByIdAndDelete(req.params.body)
        return res.send("user")
    } catch (error) {
        return res.status(401).send("went wrong")
    }
})
app.listen(2000, async(req,res) =>{
    try {
        await connect()
        
    } catch (error) {
        console.log(error)
    }
    console.log("lis")
})