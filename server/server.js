const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const router = require("./router/index");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { Server } = require("socket.io");

const app = express();
dotenv.config();
connectDB();
const server = http.createServer(app);
const io = new Server(server,{
  cors:'http://localhost:5173'
})
app.use('/public',express.static('public'))
app.use(cors());
swaggerDocument.host = process.env.API_HOST;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static("public"));
app.use(express.json());
app.use(router);
app.use("/api/v1", router);
app.use(express.json({ limit: '10mb' })); // Adjust the size limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

io.on("connection",(socket)=>{
  console.log("New client connect");

  socket.on('disconnect',()=>{
    console.log('Client disconnected');
    
  })
  
})


app.get("/", function (req, res) {
  res.send("Backend is running successfully");
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(
    `Server is running is ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

module.exports = {io}