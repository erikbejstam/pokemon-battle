import { Router } from "express";
import { getAllPokemon } from "./controller";

const router = Router();

router.get("/", getAllPokemon);

export default router;