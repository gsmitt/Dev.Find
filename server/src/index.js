require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json")

const PORT = process.env.PORT || 3001;



app.use(cors());
app.use(express.json());
app.use('/image', express.static('uploads'));


// Rotas
app.use("/user", require("./routes/userRoutes"));
app.use("/review", require("./routes/reviewRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/auth", require("./routes/authRoutes"));


// Rota da documentação
 app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log("Server is running on port: " + PORT));

