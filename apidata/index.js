import express from 'express'
import cors from 'cors'
import foodDatas from './Model/Schema.js'
import connection from './db/Connection.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: 'http://localhost:3000'}))

app.post('/api', async(req,res)=>{

    

const {idCategory,strCategory,strCategoryDescription,strCategoryThumb}=req.body


const newData = new foodDatas({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb


})

console.log(newData)
await newData.save()

  res.status(200).send("inserted")
} )





connection.then(()=>{
    app.listen(8000,()=>{
        console.log('its working on 8000')
    })
})
  