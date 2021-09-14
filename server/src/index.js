/*
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => console.log("Servidor está rodando na porta: " + PORT));
*/