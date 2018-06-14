const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MiningSchema = new mongoose.Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0},
  category: { type: String, enum: ['codelco', 'barrick', 'esperaza']},
  description: String
})

mongoose.model('Mining', MiningSchema)
