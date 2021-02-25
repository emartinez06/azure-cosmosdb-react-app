const express = require('express');
const router = express.Router();

const cardService = require('./services/card');

router.get('/cards', async (req, res) => {
  await cardService.get(req, res);
});

router.get('/card/:id', async (req, res) => {
  await cardService.getById(req, res);
});

router.post('/card', async (req, res) => {
  await cardService.create(req, res);
});

router.put('/card', async (req, res) => {
  await cardService.update(req, res);
});

router.delete('/card/:id', async(req, res) => {
  await cardService.destroy(req, res);
});

module.exports = router;