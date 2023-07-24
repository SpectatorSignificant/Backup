import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use();
