import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from 'dotenv';
import user from './routes/user.js'
import role from './routes/role.js'
import pizza from './routes/pizza.js'
import order from './routes/order.js'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", user);
app.use("/api/role", role);
app.use("/api/pizza", pizza);
app.use("/api/order", order);

app.listen(process.env.PORT, () => console.log(`Connecting server running on port ${process.env.PORT}`))
db.dbConnection();