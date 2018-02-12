var express = require('express');
var router = express.Router();
var orders = require('fake-restaurant-package-ac');

var clients = [
  'pippo',
  'caio',
  'sempronio'
];

//middleware
router.use (function(req, res, next){
  if (clients.indexOf(req.query.token)!=-1){
    next();
  } else {
    res.status(401).send({message:'Permission denied. User not authorized'});
  }
});

//aggiungere ordine
router.post('/', function(req, res) {
    res.json(orders.add(req.body));
})

//vedere il proprio ordine
router.get('/:client', function(req, res) {
    if (typeof req.params.client == Number || typeof req.params.client == Boolean || typeof req.params.client == undefined) {
      return res.status(400).json({message:"Client must be a string"})
    }
    var order= orders.getByclient(req.params.client);
    if (order=null){
      return res.status(404).json({message: "Client not found"});
    }
      res.json(order);
})


module.exports = router;
