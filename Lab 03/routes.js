import express from "express";
import getHome from "./controllers/bookController";

const router = express.Router();

router.get("/",getHome);

export default router;