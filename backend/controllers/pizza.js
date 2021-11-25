import pizza from '../models/pizza.js';
import order from '../models/order.js';

const registerPizza = async(req, res) => {
    if(!req.body.name || !req.body.description || !req.body.price ) return res.status(400).send({ message: "Incomplete data" });

    const existingPizza = await pizza.findOne({ name: req.body.name });
  if (existingPizza)
    return res.status(400).send({ message: "The pizza already exist" });

    const pizzaSchema = new pizza({
        name: req.body.name,
        description: req.body.description,
        size: req.body.size,
        price: req.body.price
      });
    
      const result = await pizzaSchema.save();
      return !result
        ? res.status(400).send({ message: "Failed to register pizza" })
        : res.status(200).send({ result });      
};

const listPizza = async (req, res) => {
  const listPizza = await pizza.find();
  return listPizza.length == 0
    ? res.status(400).send({ message: "Empty pizza list" })
    : res.status(200).send({ listPizza });
};

const updatePizza = async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.price || !req.body.size )
    return res.status(400).send({ message: "Incomplete data" });

  const existingPizza = await pizza.findOne({
    name: req.body.name,
    description: req.body.description,
    size: req.body.size,
    price: req.body.price
  });
  if (existingPizza)
    return res.status(400).send({ message: "The pizza already exist" });

  const pizzaUpdate = await pizza.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    size: req.body.size,
    price: req.body.price
  });

  return !pizzaUpdate
    ? res.status(400).send({ message: "Error editing pizza" })
    : res.status(200).send({ message: "Pizza updated" });
};

const deletePizza = async (req, res) => {
  const pizzaDelete = await pizza.findByIdAndDelete({ _id: req.params["_id"] });
  return !pizzaDelete
    ? res.status(400).send({ message: "Pizza no found" })
    : res.status(200).send({ message: "Pizza deleted" });
};

const findPizza = async (req, res) => {
  const pizzaId = await pizza.findById({ _id: req.params["_id"] });
  return !pizzaId
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ pizzaId });
};

const addToCart = async(req, res) => {


  if(!req.body.name || !req.body.description || !req.body.price || !req.body.size ) return res.status(400).send({ message: "Incomplete data" });

  const existingOrder = await order.findOne({user: req.user._id})
}

const removeFromCart = async(req, res) => {

}

export default { registerPizza, listPizza, updatePizza, deletePizza, findPizza};