const express = require("express");
const fs = require("fs")
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { sendEmail } = require("./app/mail");
const request = require("request");
const https = require("https")

const app = express();

var options = {
  origin: process.env.CORS_ORIGIN
}

app.use(cors(options))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send-email", (req, res) => {
  const { subject, message, token } = req.body;

  request.post(
    {
      url: "https://www.google.com/recaptcha/api/siteverify",
      body: `secret=${process.env.RECAPTCHA_KEY}&response=${token}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
    function (error, response, body) {
      var arg = JSON.parse(response.body);

      if (error == null && arg.success == true) {
        sendEmail({ subject, message })
          .then((result) => {
            console.log("Email Sent");
          })
          .catch((error) => {
            console.log("Email could not be sent");
            console.log(error);
          });
      } else {
        console.log(error);
      }
    }
  );
});

const cert = {
  key: fs.readFileSync("/etc/letsencrypt/live/styledsoirees.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/styledsoirees.com/fullchain.pem"),
}

const port = process.env.SERVER_PORT || 8080;
https.createServer(cert, app).listen(port, () => {
  console.log(`Server is running on HTTPS port ${port}`);
});
