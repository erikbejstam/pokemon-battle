import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/pokemonDB");
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
}
