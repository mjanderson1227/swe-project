import express from "express";
import dotenv from "dotenv";
import {createUserRoute, loginRoute, adminLoginRoute, postCreationRoute} from "./routes.mjs";
import cors from "cors";



dotenv.config();

const app = express();

app.use(express.json()); //middleware to read req.body
app.use(cors());

app.post("/register", createUserRoute);
app.post("/login", loginRoute);
app.post("/admin", adminLoginRoute);
app.post("/post_creation",postCreationRoute);


const PORT = process.env.PORT || 4000; // Default port 5173
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});