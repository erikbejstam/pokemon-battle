import express from "express";
import cors from "cors";
import router from "./router";
import { seedData } from "./db/seed";
import { connectToDB } from "./db/connectdb";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;
app.use("/pokemon", router);

async function startServer() {
    await connectToDB();
    await seedData();

    app.listen(PORT, () => {
        console.log(`Server started, listening on port ${PORT}`);
    })
}

startServer();