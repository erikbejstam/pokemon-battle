import { Router } from "express";
import { getAllPokemon, getPokemonById, battle } from "./controller";

const router = Router();

router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.post("/battle", battle);

export default router;