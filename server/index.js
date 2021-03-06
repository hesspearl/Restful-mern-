import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./route/posts.js"
import dotenv from "dotenv"
const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', router)

app.get("/", (req ,res)=>{
  res.send("hello")
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
  })
  .catch((err) => console.log(err));

  mongoose.set('useFindAndModify', false)