import express from "express";
import { Router as userRouter } from "./routes/userAuthRoutes";
import { Router as homePageRouter } from "./routes/homePageRoutes";
import { Router as featureFlagRouter } from "../featureFlagService/presentation/routes/featureFlagRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/homePage", homePageRouter);
app.use("/feature-flag", featureFlagRouter);

app.get("/", (req, res) => res.json({ data: "hello" }));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
