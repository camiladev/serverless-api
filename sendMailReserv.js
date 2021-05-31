import 'dotenv/config';
import handler from './libs/handler-lib';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.sesAccessKey,
        pass: process.env.sesSecretKey,
    },
    tls:{
        rejectUnauthorized: false,
    },
});

export const main = handler(async event => {
    const data = JSON.parse(event.body);

    const mailOptions = {
        from: "Camila Matos <cm285913@gmail.com>",
        to: data.emailTo,
        subject: "Reserva de mini minion",
        text: data.text
    };

    const message = await transporter.sendMail(mailOptions);
    return message;
});


