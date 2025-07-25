import { Request, Response } from "express";
import { PokemonModel } from "./model/pokemon";
import { simulateBattle } from "./battleLogic";

export async function getAllPokemon(request: Request, response: Response) {
    try {
        const pokemon = await PokemonModel.find();
        return response.json(pokemon);
    } catch (error) {
        response.status(500).json({ error: "Server error" });
    }
}

export async function getPokemonById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    try {
        const pokemon = await PokemonModel.findOne({ id }).exec();
        if (!pokemon) return response.status(404).json({ error: "Not found" });
        return response.json(pokemon);
    } catch (error) {
        response.status(500).json({ error: "Server error"});
    }
}

export async function battle(request: Request, response: Response) {
    const { team1Ids, team2Ids } = request.body;

    const team1 = await PokemonModel.find({ id: { $in: team1Ids } });
    const team2 = await PokemonModel.find({ id: { $in: team2Ids } });

    const battleLog = await simulateBattle(team1, team2);

    return response.json(battleLog);
}