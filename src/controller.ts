import { Request, Response } from "express";
import { PokemonModel } from "./model/pokemon";

export async function getAllPokemon(request: Request, response: Response) {
    try {
        const pokemon = await PokemonModel.find();
        response.json(pokemon);
    } catch (error) {
        response.status(500).json({ error: "Server error" });
    }
}