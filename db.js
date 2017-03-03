const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Annonces = new Schema({
  id: String,
  title: String,
  username: String,
  description: String,
  created_at: Date,
});

mongoose.model('Annonces', Annonces);
mongoose.connect('mongodb://localhost/annonces');