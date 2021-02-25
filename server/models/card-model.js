const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = new Schema(
  {
    //cardId: { type: Number, required: true, unique: true },
    cardName: String,
    cardImg: String,
    cardType: String,
    cardAttr: String,
    cardRace: String,
    cardDesc: String
  },
  { autoIndex: false }
);

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;