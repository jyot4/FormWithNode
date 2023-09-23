import express  from "express";
import cors from 'cors'
// import connection from "./Connection.js";
// import schema from "./Model.js";



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin: 'http://localhost:3000'}))


app.post( '/allData' , async(req, res)=>{
    console.log(req.body)
})



// connection.then(()=>{
app.listen(8000, ()=>{
    console.log('server is running at 8000')
})
// })
