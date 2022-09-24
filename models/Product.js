import {model, models, Schema} from "mongoose";

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  picture: String,
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;