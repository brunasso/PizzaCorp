import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, ref: "users"},
    product: {type: mongoose.Schema.ObjectId, ref: "pizzas"},
    size: String,
    totalPrice: Number
});

const order = mongoose.model("orders", orderSchema);

export default order;
