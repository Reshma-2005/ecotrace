import axios from "axios";
import { router } from "./routes/api";
import { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
console.log(process.env.TEST, "Crop Manager Backend");
const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);
app.listen(process.env.PORT || port);
app.get("/test", async(req: Request, res: Response) => {
  console.log(process.env.TEST);
  console.log("HI From TS")
  const resp=await axios.get("http://localhost:5000/test")
  console.log(resp.data)
  res.json({ HI: resp.data});
});
