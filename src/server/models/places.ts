const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  likes: { type: Number, default: 0 },
});

const Place = mongoose.model('Place', placeSchema);

export default Place;