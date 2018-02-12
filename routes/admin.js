var express = require('express');
var router = express.Router();
var orders = require('fake-restaurant-package-ac');

//inseriamo un middleware che vale su tutto il cluster
router.use(function(req,res,next){
  if(req.query.token=='admin'){
    next();
  } else{
      res.status(401).send({error:'Token not valid'});
  }
})

//richiamare tutti gli ordini
router.get('/', function(req, res) {
    res.json(orders.all());
})

//richiamare singoli ordini
router.get('/:orderNumber', function(req, res) {
    if (!Number.isInteger(parseInt(req.params.orderNumber))) {
      return res.status(400).json({message:"orderNumber must be a integer"})
    }
    var order = orders.getByorderNumber(parseInt(req.params.orderNumber));
    if (order == null) {
      return res.status(404).json({message: "order not found"});
    }
    res.json(order);
})

//cancellare un ordine (non si può aggiungere un ordine: quello spetta solo all'utente)
router.delete('/:orderNumber', function(req, res) {
    if (!Number.isInteger(parseInt(req.params.orderNumber))) {
      return res.status(400).json({message:"orderNumber must be a integer"})
    }
    var order = orders.getByorderNumber(parseInt(req.params.orderNumber));
    if (order == null) {
      return res.status(404).json({message: "order not found"});
    }
    res.json(orders.delete(parseInt(req.params.orderNumber)));
})

//modificare status dell'ordine
router.put('/:orderNumber', function(req, res) {
    res.json(orders.updateStatus(parseInt(req.params.orderNumber), req.body));
})

//vedere gli acquisti dei singoli utenti
router.get('/:client', function(req, res) {
    if (typeof req.params.client == Number || typeof req.params.client == Boolean || typeof req.params.client == undefined) {
      return res.status(400).json({message:"Client must be a string"})
    }
    else{
      return res.status(404).json({message: "Client not found"});
    }
    res.json(order);
})

//vedere gli acquisti filtrati per status("new","ready","closed")
router.get('/orders/:status', function(req, res){
  res.json(orders.getOrderByStatus(req.params.status));
});


module.exports = router;
