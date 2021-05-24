import 'dotenv/config';

const sesAccessKey = process.env.SES_ACCESS_KEY;
const sesSecretKey = process.env.SES_SECRET_KEY;

module.exports.handler = function(event, context, callback){

    const nodemailer = require('nodemailer');
    const smtpTransport = require('nodemailer-smtp-transport');

    const transporter = nodemailer.createTransport( smtpTransport({
        service: 'gmail',
        auth: {
            user: sesAccessKey,
            pass: sesSecretKey
        }
    }));

    const text = event.text;

    const mailOptions = {
        from: "NPS <noreplay@nps.com.br>",
        to: event.emailTo,
        cc: 'camila.bittencourt@outlook.com',
        subject: 'Reserva de mini minion',
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            const response = {
                statusCode: 500,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    error: error.message,
                }),
            };
            callback(null, response);
        }
        const response = {
                statusCode: 200,
                headers: { 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    message: 'E-mail enviado com sucesso',
                }),
        };
        callback(null, response);
    });
};

