const express = require ('express')

const app = express()
const mongoose = require('mongoose')
const UserModel  = require ('./models/Users')
const cors = require('cors')

app.use(express.json())
app.use(cors());

mongoose.connect('xyz', {
    dbName:"xyz",
})
.then(() =>  console.log("database connected"))
.catch((e) => console.log(e))

app.get('/',(req,res)=> {
    res.send("hello world!")
})
  
app.post("/addUsers", async (req,res)=> {
    const newUser = await UserModel.create({name:"zen",age:"zen2",username:"qqwe"})
    await newUser.save()
     res.send("Submitted")
})
  
app.get("/getUsers", async (req,res)=> {
    const users = await UserModel.find({});

    res.json({
        success:true,
        users,
    }); 
})

app.get('/about',(req,res)=> {
    res.send("About Page")
})

app.listen(3001,()=>{
    console.log("listening on port 3001")
})