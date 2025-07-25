import fs from "fs";
import { PokemonModel } from "../model/pokemon";

export async function seedData() {
  const count = await PokemonModel.countDocuments();
  if (count > 0) return;
  const raw = fs.readFileSync("pokedata.json", "utf-8");
  const data = JSON.parse(raw).pokemon;

  await PokemonModel.insertMany(data);
  console.log("Seeded Pokémon data");
}