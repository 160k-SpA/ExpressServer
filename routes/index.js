const express = require('express');
const router = express.Router();
// const { getCreditData, getAllCreditNumbers} = require('./credits.js');
//

// router.get('/credit/:id', function(req, res, next) {
//   const creditId = req.params.id;
//   const data = getCreditData(creditId);
//
//   if(data === 'Credit number not found') {
//     res.status(404).json({ message: 'Credit number not found' });
//   } else {
//     res.json(data);
//   }
// });
//
// router.get('/credit-numbers', function(req, res, next) {
//   const creditNumbers = getAllCreditNumbers();
//   res.json(creditNumbers);
// });

module.exports = router;
