import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/whoami", (req: Request, res: Response) => {
  res.json({
    ipaddress: req.headers.host,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
