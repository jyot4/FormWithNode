import express from 'express'
import cors from 'cors'
import connection from './Connection.js'
import detail from './Model.js'



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin:'http://localhost:3000'}))


app.post('/formdata' , async(req,res)=>{
    console.log(req.body)


    const {name,email,username,password} = req.body


    const savedata = new detail({
        name,
        email,
        username,
        password
        
    })

    
     res.status(200).send('data is reciving')
     await savedata.save()
})




connection.then(()=>{
app.listen(8080,()=>{
    console.log('server is learning')
})
})