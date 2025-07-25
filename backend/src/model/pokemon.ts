import mongoose from "mongoose";

export interface Pokemon {
    id: number;
    name: string;
    weight: string;
}

const pokemonSchema = new mongoose.Schema<Pokemon>({
    id: Number,
    name: String,
    weight: String
})

export const PokemonModel = mongoose.model("Pokemon", pokemonSchema);