import express, { Express } from "express";
import * as dotenv from "dotenv";
import { connect_db } from "./utills/connection";
import userRoutes from "./routes/users.route";

const app: Express = express();
app.use(express.json());
app.use("/api/users", userRoutes);
dotenv.config();

async function connect() {
  await connect_db();
  app.listen(process.env.port, () => {
    return console.log(
      `Express is listening at http://localhost:${process.env.port}`
    );
  });
}
connect();
