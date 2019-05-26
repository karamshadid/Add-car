
function Car(plate, maker, model, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;
};
var newCar = []; //input car value push in here

function car() {
  var car = new Car(
    document.getElementById("maker").value,
    document.getElementById("plate").value,
    document.getElementById("model").value,
    document.getElementById("price").value,
    document.getElementById("color").value);

  newCar.push(car);
  console.table(newCar);// console table method

};
/////////task2

function search() {
for (var i = 0; i < newCar.length; i++) {
    document.getElementById("carmodel").innerHTML = " Car maker "+ newCar[i].maker + " and car model " + newCar[i].model;
}
}


/*task 3*/

let price=0;
let discount=0;
price=prompt("What's your Budget", "put the amount")
if (price>20000) {
discount= 25;
 }
else if (price<=5000) {
  discount= 10;
} else {
discount=15;
}

function discountPrice(price, discount) {
   return price- ((price*discount)/100);
 }


 document.getElementById("demo").innerHTML=" You will get " +discountPrice(price, discount) +"$ after your Discount.";
