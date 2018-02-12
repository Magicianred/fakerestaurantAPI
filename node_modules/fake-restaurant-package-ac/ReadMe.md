# restaurantPackageac
## create your fake restaurant's orders array


## Installation

    npm i restaurantPackageac


## Usage

For use the fake restaurant's orders array

```js
var fakeorders = require('restaurantPackageac');

console.log('orders', this.all()); // outputs all orders
console.log(this.getByorderNumber(2));// ouputs order number 2
console.log('orders', this.add({client:"Pippo",description: "3 antipasti misti di pesce, 2 spiedini gamberi arrosto, 1 involtino pesce spada, 2 acqua",bill: 80,status:"new"}));// add new order
console.log(this.delete(4));//delete order number 4
console.log('orders', this.updateStatus(3,"closed"));// modify productNumber3's status in "closed"
console.log('orders', this.updateStatus(6,"ready"));//modify productNumber6's status in "ready"
console.log('orders', this.getOrderByStatus("ready"));// outputs  all orders with "ready"-status
console.log('orders', this.getOrderByStatus("closed"));// outputs  all orders with "closed"-status
console.log('orders', this.getOrderByStatus("new"));//outputs  all orders with "new"-status
console.log('orders', this.getByclient("Pippo"));// outputs  all Mario Rossi's orders

```
