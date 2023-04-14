import express from "express";
import { displayC } from "../controller/display.js";

const router = express.Router();

router.get("/", displayC);

export default router;