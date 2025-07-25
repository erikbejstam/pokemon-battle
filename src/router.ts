import { Router } from "express";
import { getAllPokemon, getPokemonById, battle } from "./controller";
import { validateInput } from "./validate";

const router = Router();

router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.post("/battle", validateInput, battle);

export default router;