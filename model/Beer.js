import mongoose from "mongoose";
const { Schema, model } = mongoose;

const beerSchema = new Schema({
  name: String,
  brand: String,
  average_rating: Number,
  alcohol_percentage: Number,
  drink_type: String,
  flavour_tags: [String],
  release_date: Date,
});

const Beer = model("Beer", beerSchema);
export default Beer;
