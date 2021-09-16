require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/userRoutes"));
app.use("/review", require("./routes/reviewRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/auth", require("./routes/authRoutes"));

app.listen(PORT, () => console.log("Servidor está rodando na porta: " + PORT));

