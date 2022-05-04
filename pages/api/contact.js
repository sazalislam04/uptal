export default function (req, res) {
    var nodemailer = require('nodemailer');
    var transport = nodemailer.createTransport({
    host: "smtp.zeptomail.in",
    port: 587,
    auth: {
    user: "emailapikey",
    pass: "PHtE6r0MReDs32J9+xkC5PK6RJGtYI0srO4yf1JFtopEAqNQSk1Qqd56kmXh/x0uBvFKRaOTntk+s+zItbqAJ2juYGsZCmqyqK3sx/VYSPOZsbq6x00VuF4ff0XUXIPmddZp1C3SuNjZNA=="
    }
    });

    var mailOptions = {
    from: '"Uptal Team" <noreply@uptal.org>',
    to: req.body.email,
    subject: `Email for ${req.body.nam}`,
    html: 'You registered for an event',
    };

    transport.sendMail(mailOptions, (error, info) => {
    if (error) {
    return console.log(error)
    }
    console.log('Successfully sent');
    });
    console.log(req.body)
  }