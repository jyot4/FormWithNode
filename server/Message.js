import nodemailer from 'nodemailer'

const msgdetail = async(req,res)=>{
let test  = await nodemailer.createTestAccount()

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

  const info = await transporter.sendMail({
    from: '"jyoti vyas 👻" <jyotivyass2000@gmail.com>', // sender address
    to: "sachinsain21082001@gmail.com" , // list of receivers
    subject: "Verification Code", // Subject line
    text: "Hello i am priya vyas sending u verification code", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

console.log("message sent : %s",info.messageId)
res.send(info)

}

export default msgdetail