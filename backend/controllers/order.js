import order from '../models/order.js';
import pizza from '../models/pizza.js';

const orderPizza = async(req, res) => {
    let pizzaId = "";
    const pizzaFind = await pizza.findById({ _id: req.params["_id"]});
    if (!pizzaFind) {return res.status(400).send({ message: "No search results" })}
    else{ pizzaId = pizzaFind; }

    const sizePizza = "30";

    const userId = req.user._id;

    let pizzaPrice = 0;

    let findPizzaPrice = await pizza.findById({_id: req.params["_id"]});
    if(!findPizzaPrice) 
    { 
        return res.status(400).send({ message: "No pizza price" })
    }
    else {
        pizzaPrice = findPizzaPrice.price;
    }

    console.log(pizzaPrice)

    const newOrder = new order ({
    userId: userId,
    product: pizzaId,
    size: sizePizza,
    totalPrice: pizzaPrice
    })
    const result = await newOrder.save()
    return !result
    ? res.status(400).send({ message: "Failed to complete order" })
    : res.status(200).send({ result });
};

export default {orderPizza};

