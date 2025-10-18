import express from "express";
import { cadastrarUniversitario } from "../controllers/cadastroController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("comprovante"), cadastrarUniversitario);

export default router;

