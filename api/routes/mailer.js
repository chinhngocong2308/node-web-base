const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const mailInfor = {
        email: req.body.email,
        content: req.body.content,
        subject: req.body.subject
    };
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
            html: JSON.parse(mailInfor.content)
        };
  
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
  
    
        res.status(200).json({
            message: 'success',
            createdProduct: mailInfor
        });
    } catch (error) {
        console.log("Error mail", error)
    }

});


module.exports = router;