import express from "express";
import { Router as AdminRoute } from "./routes/AuthenticationRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);

app.get("/", (req, res) => res.json({ data: "hello" }));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
