import express from "express";
import { config } from "dotenv";
import { Contact } from "./models/contact.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import path from "path"; // Add this line

import nodemailer from "nodemailer"; // Import nodemailer
import { Vistuser } from "./models/visituser.js";
import cors from "cors";

config({ path: "./config/config.env" });
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

 app.post("/vistuser",async(req,res) =>{
  try {
    let vistuser = new Vistuser(req.body);
    let resuser =  await vistuser.save();
    res.send(resuser);
  } catch (error) {
    res.send(500).send(error.message);
  }
 });



app.post("/register", async (req, resp) => {
  try {
    // Save to the database
    let contact = new Contact(req.body);
    let result = await contact.save();
       console.log(req.body);
       
    // Send email notification

    function sendEmailNotification(formData) {
      const { email } = formData;
      const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        secure: false,
        port: 465,
        service:" GoDaddy",
        auth: {
          user: "team@kgvl.co.in",
          pass: "Team@12345",
        },
      });
      
    
      const mailOptions = {
        from: "team@kgvl.co.in",
        to: email,
        subject: "New Registration",
        html: `<p>New registration details:</p>
               <p>Name: ${formData.name}</p>
               <p>Lastname: ${formData.lastname}</p>
               <p>Email: ${formData.email}</p>
               <p>Address: ${formData.address}</p>
               <p>Query: ${formData.query}</p>`,
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Email error: " + error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
    

    sendEmailNotification(req.body);

    resp.send(result);
    console.log("done contact")
  } catch (error) {
    resp.status(500).send(error.message);
  }
});






// ------------------/Deployment-----------------

// const __dirname1 = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname1, "KGV_Frontend", "build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname1, "KGV_Frontend", "build", "index.html"));
//   });
// } else {
//     app.get('/', (req, res) => {
//         res.end('API Running');
//     });
// }




// ------------------/Deployment-----------------


