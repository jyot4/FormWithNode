import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

 const app = express();
 app.use(express.json())
 app.use(express.urlencoded({extended : true}))

app.use(cors({origin: 'http://localhost:3000'}))


const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'leta.sawayn86@ethereal.email',
      pass: '5awU8GvAUqbxNEmtNJ'
    },
  });

//Get random message code....

  function generateRandomCode() {
    const length = 6; 
    const number = '0123456789'; 
    let code = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * number.length);
      code += number[randomIndex];
    }
  
    return code;
  }

app.post('/data', async(req,res)=>{
    // console.log(req.body)
    const {input} = req.body
const verficationcode = generateRandomCode();


//EMAIL MESSAGE....

const info = await transporter.sendMail({
    from: '<jyotivyass2000@gmail.com>', 
    to: "priyavyas8618@gmail.com" , 
    subject: "Verification Code", 
    text: "Hello i am priya vyas sending u verification code", 
 
  });
  res.status(200).send('send')
})





  


 app.listen(8080,()=>{
    console.log('it is working on 8080')
 })