import express from "express";
import order from "../controllers/order.js";
import auth from '../middlewares/auth.js';
import customer from '../middlewares/customer.js';
const router = express.Router();

router.post("/orderPizza/:_id", auth, customer, order.orderPizza);

export default router;
