import express, { NextFunction } from "express";
import { Router as userRouter } from "./routes/userAuthRoutes";
import { Router as homePageRouter } from "./routes/homePageRoutes";
import { Router as suburb } from "./routes/suburbRoutes";
import { Router as featureFlagRouter } from "../../featureFlagService/presentation/routes/featureFlagRoutes";
import { Router as jobRouter } from "./routes/jobRoutes";
import { Router as defaultConfig } from "./routes/defaultConfigRoutes";
import { Router as revAgency } from "./routes/revAgencyRoutes";
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/homePage", homePageRouter);
app.use("/suburb", suburb);
app.use("/feature-flag", featureFlagRouter);
app.use("/job", jobRouter);
app.use("/defaultConfig", defaultConfig);
app.use("/revAgency", revAgency);

app.get("/", (req, res) => res.json({ data: "hello" }));

app.use((err: any, req: any, res: any, next: NextFunction) => {
  if (err?.error?.details) {
    res.status(400).json({ success: false, message: err.error.details.map((detail: any) => detail.message) });
  } else {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
