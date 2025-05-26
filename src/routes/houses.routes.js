import express from "express";
import { getAllHouses  } from "../controller/houses.controller.js";

const router = express.Router();

// 📌 Route: Get All Houses
router.get("/", getAllHouses);

export default router;