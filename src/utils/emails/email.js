import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codingninjas2k16@gmail.com",
    pass: "slwvvlczduktvhdj",
  },
});

export const earlyEmailConfirmation = async (req, res, next) => {
  const { email } = req.body;
  const mailTemplate = fs.readFileSync(
    path.resolve("src", "public", "html", "earlyEmailConfirmation.html")
  );

  const message = {
    from: "codingninjas2k16@gmail.com",
    to: email,
    subject: "Ramp-Up Registration Successfull",
    html: mailTemplate,
  };
  transporter.sendMail(message, (error, response) => {
    if (error) {
      res.status(500).send(error);
    } else {
      next();
    }
  });
};
