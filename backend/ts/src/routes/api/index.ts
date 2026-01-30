const dotenv = require("dotenv");
dotenv.config();
console.log(process.cwd());
console.log(process.env.TEST);
import { Router } from "express"
export const router = Router();