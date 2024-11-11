import nodemailer from 'nodemailer'
import 'dotenv/config'

const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
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
    } else {
        res.status(405).send('Method not allowed')
    }
}

export default sendEmail