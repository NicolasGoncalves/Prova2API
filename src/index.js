import express from "express";
import cors from "cors";
import "dotenv/config";

import endpoint from "./endpoint.js";
const server = express();
server.use(cors());
server.use(express.json());

server.use(endpoint);


server.listen(process.env.PORT,
       () => console.log(`ÀPI está online na porta ${ process.env.PORT}`));
