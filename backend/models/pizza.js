import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const pizza = mongoose.model("pizzas", pizzaSchema);

export default pizza;
