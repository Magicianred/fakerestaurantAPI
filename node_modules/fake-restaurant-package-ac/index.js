var orders=[
  {
    orderNumber: 1,
    client:"Pippo",
    description: "1 Antipasti rustici misti, 1 penne al pistacchio, 1 acqua",
    bill: 25,
    status:"closed"
  },{
    orderNumber: 2,
    client:"Caio",
    description: "2 Penne al salmone, 2 misto di carne arrosto, 1 acqua, 1 coca cola, 2 caffè ",
    bill: 45,
    status:"ready"
  },{
    orderNumber: 3,
    client:"Sempronio",
    description: "2 spaghetti frutti mare, 2 involtini pesce spada, 1 acqua, 2 sorbetti limone",
    bill: 60,
    status:"ready"
  },{
    orderNumber: 4,
    client:"Pippo",
    description: "2 spaghetti nero di seppia, 2 aragosta, 1 acqua, 2 cheesecake",
    bill: 75,
    status:"new"
  },{
    orderNumber: 5,
    client:"Sempronio",
    description: "2 pasta alla carbonara, 2 misti carne, 1 acqua, 2 semifreddo",
    bill: 55,
    status:"new"
  }
]

//var ready=[];
//var closed=[];

//Restituisci tutti gli ordini
exports.all = function(){
  return orders;
}

exports.getByorderNumber = function(orderNumber){
  for (var index in orders) {
    var order = orders[index];
    if (order.orderNumber == orderNumber) {
      return order;
    }
  }
  return null;
}

//AGGIUNGI NUOVO ORDINE
exports.add = function(newOrder) {
    var lastorderNumber = orders[orders.length - 1].orderNumber;
    orders.push({
      orderNumber: lastorderNumber+1,
      client: newOrder.client,
      description: newOrder.description,
      bill: newOrder.bill,
      status:"new" //di default un nuovo ordine ha status "new"
    })
    return orders[orders.length-1];
}
//ELIMINA un ORDINE
exports.delete = function(orderNumber){
  for (var index in orders) {
    var order = orders[index];
    if (order.orderNumber == orderNumber) {
      return orders.splice(index, 1);
    }
  }
  return null;
}

//SETTARE UN ORDINE COME PRONTO O COME CHIUSO (lo status viene passato dall'esterno e può essere "ready" o "closed")
exports.updateStatus = function(orderNumber, status) {
  for (var index in orders) {
    var order = orders[index];
    if (order.orderNumber == orderNumber) {
      order.status = status;
      return order;
    }
  }
  return null;
}

//RITORNA gli ordini filtrati per status
exports.getOrderByStatus = function(status){
  return orders.filter(function(order){
  return order.status === status;
});
}

//RESTITUIRE tutti gli ordini DI UN CLIENTE
exports.getByclient = function(client){
  for (var index in orders) {
    var order = orders[index];
    if (order.client == client) {
      return order;
    }
  }
  return null;
}
