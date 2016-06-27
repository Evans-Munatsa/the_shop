var products = require('./products')

for(x in products){
    console.log(products[x])

}
var arr3 = [
{
    Date: '25-Jan',
    Item: 'Shampoo 1 litre',
    Quantity: 1,
    TotalCost: 20
},
{
    Date: '02-Feb',
    Item: 'Shampoo 1 litre',
    Quantity: 1,
    TotalCost: 20
}, {
    Date: '02-Feb',
    Item: 'Soap Bar',
    Quantity: 3,
    TotalCost: 9
}, {
    Date: '03-Feb',
    Item: 'Bananas - loose',
    Quantity: 12,
    TotalCost: 12
}, {
    Date: '03-Feb',
    Item: 'Apples - loose',
    Quantity: 100,
    TotalCost: 150
}, {
    Date: '03-Feb',
    Item: 'Mixed Sweets 5s',
    Quantity: 240,
    TotalCost: 720
}, {
    Date: '04-Feb',
    Item: 'Shampoo 1 litre',
    Quantity: 2,
    TotalCost: 40
}, {
    Date: '04-Feb',
    Item: 'Soap Bar',
    Quantity: 5,
    TotalCost: 15
}, {
    Date: '04-Feb',
    Item: 'Bread',
    Quantity: 4,
    TotalCost: 44
}, {
    Date: '04-Feb',
    Item: 'Imasi',
    Quantity: 4,
    TotalCost: 96
}, {
    Date: '06-Feb',
    Item: 'Bananas - loose',
    Quantity: 8,
    TotalCost: 8
}, {
    Date: '06-Feb',
    Item: 'Apples - loose',
    Quantity: 100,
    TotalCost: 150
}, {
    Date: '06-Feb',
    Item: 'Mixed Sweets 5s',
    Quantity: 150,
    TotalCost: 450
}, {
    Date: '06-Feb',
    Item: 'Soap Bar',
    Quantity: 5,
    TotalCost: 15
}, {
    Date: '6-Feb',
    Item: 'Bread',
    Quantity: 30,
    TotalCost: 270
}, {
    Date: '6-Feb',
    Item: 'Chakalaka Can',
    Quantity: 15,
    TotalCost: 105
}, {
    Date: '6-Feb',
    Item: 'Coke 500ml',
    Quantity: 36,
    TotalCost: 126
}, {
    Date: '6-Feb',
    Item: 'Cream Soda 500ml',
    Quantity: 18,
    TotalCost: 81
}, {
    Date: '6-Feb',
    Item: 'Fanta 500ml',
    Quantity: 24,
    TotalCost: 108
}, {
    Date: '6-Feb',
    Item: 'Gold Dish Vegetable Curry Can',
    Quantity: 15,
    TotalCost: 75
}, {
    Date: '6-Feb',
    Item: 'Imasi',
    Quantity: 25,
    TotalCost: 425
}, {
    Date: '6-Feb',
    Item: 'Iwisa Pap 5kg',
    Quantity: 5,
    TotalCost: 100
}, {
    Date: '6-Feb',
    Item: 'Milk 1l',
    Quantity: 10,
    TotalCost: 70
}, {
    Date: '6-Feb',
    Item: 'Top Class Soy Mince',
    Quantity: 10,
    TotalCost: 80
}, {
    Date: '09-Feb',
    Item: 'ose (plastic)',
    Quantity: 20,
    TotalCost: 200
}, {
    Date: '09-Feb',
    Item: 'Milk 1l',
    Quantity: 3,
    TotalCost: 28.5
}, {
    Date: '10-Feb',
    Item: 'Bananas - loose',
    Quantity: 4,
    TotalCost: 4
}, {
    Date: '10-Feb',
    Item: 'Apples - loose',
    Quantity: 20,
    TotalCost: 30
}, {
    Date: '10-Feb',
    Item: 'Mixed Sweets 5s',
    Quantity: 150,
    TotalCost: 450
}, {
    Date: '10-Feb',
    Item: 'Bread',
    Quantity: 10,
    TotalCost: 90
}, {
    Date: '10-Feb',
    Item: 'Chakalaka Can',
    Quantity: 15,
    TotalCost: 105
}, {
    Date: '10-Feb',
    Item: 'Coke 500ml',
    Quantity: 18,
    TotalCost: 63
}, {
    Date: '10-Feb',
    Item: 'Gold Dish Vegetable Curry Can',
    Quantity: 5,
    TotalCost: 25
}, {
    Date: '10-Feb',
    Item: 'Heart Chocolates',
    Quantity: 20,
    TotalCost: 500
}];

// var obj = {};
// for (var i = 0; i < arr3.length - 1; i++) {
//   var start = new Date(arr3[i].Date);
//   var day = start.getDay();
//   var month = start.getMonth();
//   var year = start.getFullYear();
  

//   var all = day + "/" + month + "/" + year
//   console.log(year);
//   if (!obj.hasOwnProperty(arr3[i].Item)) {
//         // console.log(arr3[i].Item)
//         obj[arr3[i].Item] = 0;
//     }
//     obj[arr3[i].Item] = obj[arr3[i].Item] + arr3[i].TotalCost;
// }
// console.log(obj);

// var obj = {};
// for (var x = 0; x < arr3.length; x++) {
//     // where does these dates come from?!
//     // if (new Date('2/2/2001') < new Date('2/6/2001')) {
//     console.log(arr3[x])
//     if (!obj.hasOwnProperty(arr3[x].Item)) {
//         // console.log(arr3[x].Item)
//         obj[arr3[x].Item] = 0;
//     }
//     obj[arr3[x].Item] = obj[arr3[x].Item] + arr3[x].TotalCost;
// }
// // }
// console.log(obj);