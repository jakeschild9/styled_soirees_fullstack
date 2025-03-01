const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { sendEmail } = require("./app/mail");
const request = require("request");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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

// set port, listen for requests
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});
