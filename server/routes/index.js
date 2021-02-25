const express = require('express');
const router = express.Router();

const cardService = require('./services/card');

router.get('/cards', (req, res) => {
  return cardService.get(req, res);
});

router.get('/card/:id', (req, res) => {
  return cardService.getById(req, res);
});

router.post('/card', (req, res) => {
  return cardService.create(req, res);
});

router.put('/card', (req, res) => {
  return cardService.update(req, res);
});

router.delete('/card/:id', (req, res) => {
  return cardService.destroy(req, res);
});

module.exports = router;