import express from 'express'
import cors from 'cors'
import foodData from './Model/Schema.js'
import connection from './db/Connection.js'
import { MongoClient } from 'mongodb'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))



const client = new MongoClient(connection)

    // if (dataSave) {
    //     res.status(200).send(dataSave)
    // }
    // else {
    //     res.status(201).send(dataSave)
    // }

async function main (){
    try{
        await client.connect()
        const database = client.db('fooddata')
        const collection = database.collection('food')
        
app.post('/api', async (req, res) => {

    let dataSave;
    let data = await req.body.food
    // console.log(data)
    
    for (let singleFood of data) {

        const newData = new foodData({
            id: singleFood.idCategory,
            category: singleFood.strCategory,
            dec: singleFood.strCategoryDescription,
            image: singleFood.strCategoryThumb
        })

        // console.log(newData)
        dataSave = await newData.save()
        res.send(dataSave)
        // return dataSave
        // console.log(dataSave)

    }
})
    }
    finally{
        await client.close()
    }
}

main().catch(console.log(error))

connection.then(() => {
    app.listen(8000, () => {
        console.log('its working on 8000')
    })
})
