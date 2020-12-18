import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./route/posts.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', router)

const CONNECTION_URL =
  "mongodb+srv://hess123:hess123@cluster0.zlneh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
  })
  .catch((err) => console.log(err));

  mongoose.set('useFindAndModify', false)