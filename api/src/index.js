import express from "express";
import dotene from "dotenv";
dotene.config();

const port = process.env.PORT || 8001;

const app = express();

app.listen(port, () => {
    console.log(`Server is live on: ${port}`);
    
})