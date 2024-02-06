const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
  
    // Create a transporter object using SMTP
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'chinhngocong2308@gmail.com', // Your email address
          pass: 'lfjt syvz gsbk yupw' // Your password
      }
    });

    // Define email content
    let mailOptions = {
      from: 'chinhngocong2308@gmail.com', // Sender address
      to: 'chinhngocong2308@gmail.com', // List of recipients
      subject: 'Test Email', // Subject line
      text: 'This is a test email sent from Node.js using nodemailer.', // Plain text body
      html: '<b>This is a test email sent from Node.js using nodemailer.</b>' // HTML body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });

  
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;