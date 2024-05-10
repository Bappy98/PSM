const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./router/index");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
dotenv.config();
connectDB();
const server = http.createServer(app);

app.use(cors());
swaggerDocument.host = process.env.API_HOST;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static("public"));
app.use(express.json());
app.use(router);
app.use("/api/v1", router);

app.get("/", function (req, res) {
  res.send("Backend is running successfully");
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(
    `Server is running is ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
