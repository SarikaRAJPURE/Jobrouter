import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

//router
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

//If none of the rotes match
//NOT FOUND MIDDLEWARE
app.use("*", (req, res) => {
  res.status(404).json({ msg: `Not found` });
});
//error handling middleware
//ERROR MIDDLEWARE
app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on port ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
