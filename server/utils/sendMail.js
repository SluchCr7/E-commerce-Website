const Mailer = require('nodemailer')

const sendMail = async (email, subject, text) => {
    try {
    const transporter = Mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        text: text
    })

    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail