// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from  'nodemailer'

const transporter = nodemailer.createTransport({

  // service: 'gmail',
  // auth: {
  //   user: 'airbnbands@gmail.com',
  //   pass: 'Tg@bandsair' // naturally, replace both with your real credentials or an application-specific password
  // }

  // host: 'smtp.gmail.com',
  // port: 587,
  // secure: false,
  // auth: {
  //   user: 'airbnbands@gmail.com', // generated ethereal user
  //   pass: 'Tg@bandsair', // generated ethereal password
  // },
  // tls:{
  //   rejectUnauthorized: false
  // }


  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NEXT_PUBLIC_USER,
    pass: process.env.NEXT_PUBLIC_PASS
  }
})


export default async (req, res) => {

  const { nome , emaill, message} = req.body

  if(nome === '' || emaill ===''||  message ===''){
    res.status(400).send("Campos vazios")
  }
  else{
    await transporter.sendMail({
      from: emaill, // sender address
      to: ["airbnbands@gmail.com"], // list of receivers
      subject: nome, // Subject line
      text: message, // plain text body, // html body
    },(err, data) =>{
      if(err){
        res.send("error" + JSON.stringify(err))
      }
      else{
        res.send("sucess").status(200)
      }
    });

  }


}
