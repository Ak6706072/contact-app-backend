import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/contacts.js";
import { sendmail } from "./mailer.js";
import userRoute from "./routes/user.js";
dotenv.config();

//server setup
const app = express();
const port = process.env.PORT || 4000;

//midlleware
app.use(express.json());

//database  connection
const connString = `mongodb+srv://ak6706072:ux9acavqz2@cluster0.xffya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(connString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connection successfull");
});

//endpoint

app.get("/", (req, res, next) => {
  console.log("root");
  // res.json({ name: "Ashish" });
  res.status(200).send("node server running on " + port);
});
app.get("/about", (req, res) => {
  console.log("about");
  res.status(200).send("about");
});

routes(app);
userRoute(app);

app.post("/testmail", (req, res) => {
  //params 1 = to ="ak6706072@gmail.com"
  //params2 = massage html format
  sendmail(req.body.email, req.body.html);
  res.send("Mail send successfully");
});

app.use("*", (req, res) => {
  res.send("Path does not Exist");
});
//listener
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
