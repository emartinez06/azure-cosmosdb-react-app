const Card = require('../../models/card-model');
const ReadPreference = require('mongodb').ReadPreference;

require('../../db').connect();

function get(req, res) {
  const docquery = Card.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function getById(req, res) {
  const { id } = req.body;
  const docquery = Card.findOne({ id }).read(ReadPreference.NEAREST);
  docquery.exec().then(card => {
    res.json(card);
  })
    .catch(err => {
      res.status(500).send(err)
    });
}

function create(req, res) {
  const { cardName, cardImg, cardType, cardAttr, cardRace, cardDesc } = req.body;

  const card = new Card({ cardName, cardImg, cardType, cardAttr, cardRace, cardDesc });
  card
    .save()
    .then(() => {
      res.json(card);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { cardId, cardName, cardImg, cardType, cardAttr, cardRace, cardDesc } = req.body;

  Card.findOne({ cardId })
    .then(card => {
      card.cardName = cardName;
      card.cardImg = cardImg;
      card.cardType = cardType;
      card.cardAttr = cardAttr;
      card.cardRace = cardRace;
      card.cardDesc = cardDesc;
      card.save().then(res.json(card));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { cardId } = req.params;

  Card.findOneAndRemove({ cardId })
    .then(card => {
      res.json(card);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, getById, create, update, destroy };