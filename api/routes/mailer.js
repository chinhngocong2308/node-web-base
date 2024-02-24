const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/send', (req, res, next) => {
    const mailInfor = {
        email: req?.body?.email,
        content: req?.body?.content,
        subject: req?.body?.subject
    };
    if(!req?.body?.content || !req?.body?.email || !req?.body?.subject) {
        res.status(400).json({
            errors: {
                code: 400,
                message: "Bad Request",
                details: "Invalid input data. Please provide valid parameters."
              }
        });
    }
    try {
            // Create a transporter object using SMTP
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'marketing.basevn@gmail.com', // Your email address
                pass: 'updj gedq pqgn fmit' // Your password
            }
        });
  
        // Define email content
        let mailOptions = {
            from: 'updj gedq pqgn fmit', // Sender address
            to: mailInfor.email, // List of recipients
            subject: mailInfor.subject, // Subject line
            text: '', // Plain text body
            html: JSON.parse(mailInfor?.content)
        };
  
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).json({ errors: error.message })
                return
            } else {
                res.status(200).json({
                    message: 'success',
                    data: mailInfor
                });
            }
            console.log('Message sent: %s', info.messageId);
        });

    } catch (error) {
        res.status(500).json({ errors: error.message })
    }

});

module.exports = router;