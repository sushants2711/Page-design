import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import contactrouter from "./routers/contactRouter.js";
import { connectDb } from "./utils/db.js";

// dotenv configration
dotenv.config();

// app initialize
const app = express();

// to connect the frontend domain
app.use(cors({
<<<<<<< HEAD
  origin: 'https://portfolio-sushant-mern.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
=======
  origin: 'https://portfolio-sushant-mern.vercel.app',
  methods: "GET,POST,PUT,DELETE",
>>>>>>> 4fd6cf3 (done)
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// port initialize
const PORT = process.env.PORT || 5000;

// json convertor
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// routers 
app.use("/contact", contactrouter)

// server 
<<<<<<< HEAD
app.listen(PORT, ()=>{
    // database connection
    connectDb();
    console.log(`Server is started on http://localhost:${PORT}`)
})
=======
app.listen(PORT, () => {
  // database connection
  connectDb();
  console.log(`Server is started on http://localhost:${PORT}`)
})
>>>>>>> 4fd6cf3 (done)
