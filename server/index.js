import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password,
        }
    })

    let mailOptions = {
        from: email,
        to: process.env.email,
        replyTo: email,
        subject: `Message from ${name}`,
        text: message,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).send('Email sent successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error sending email')
    }
})

ViteExpress.listen(app, 8000, () => console.log('server is running on port 8000'))