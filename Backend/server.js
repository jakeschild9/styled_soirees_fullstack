const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { sendEmail } = require("./app/mail");
const request = require("request");

const app = express();

var corsOptions = {
  origin: "https://styledsoirees.com",
  headers: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));

app.options('*', cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connection to mongoose database
//   mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
//       console.log("Connected to the database!");
//     })
//     .catch(err => {
//       console.log("Cannot connect to the database!", err);
//       process.exit();
//     });

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
const PORT = 443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
