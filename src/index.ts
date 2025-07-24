import express from "express";
import router from "./router";
import { seedData } from "./db/seed";
import { connectToDB } from "./db/connectdb";

const app = express();
app.use(express.json());
const PORT = 3000;
app.use("/pokemon", router);

async function startServer() {
    console.log("starting???/")
    await connectToDB();
    await seedData();

    app.listen(PORT, () => {
        console.log(`Server started, listening on port ${PORT}`);
    })
}

startServer();