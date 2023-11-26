const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  Name: String,
  Gender:String,
  Category: String,
  Price: String,
  Brand: String,
  Size:Array,
  Color:String,
  Desc:String,
  Image: String,
});

module.exports = mongoose.model("Product", ProductSchema,'product');