import express from "express";
import { insertC } from "../controller/insert.js";

const router = express.Router();

router.post("/", insertC)

export default router;