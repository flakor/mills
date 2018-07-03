const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TaskSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean

})

mongoose.model('Task', TaskSchema)
