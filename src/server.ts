import express from "express";

import "./database";

import "./shared/container";

import { routes } from "./routes/index";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);