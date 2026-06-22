import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const marca = ["toyota/", "honda/", "lexus/"];
const color = ["negro/", "rojo/", "plata/"];
const motor = ["gasolina", "diesel", "electrico"]
const fin = [".com", ".net", ".lol"]

marca.forEach(ma =>
  color.forEach(co =>
    motor.forEach(mo =>
      console.log(`${ma}${co}${mo}${fin[Math.floor(Math.random() * fin.length)]}`)
    )
  )
);


//for (let i = 0; i < marca.length; i++) {
//for (let j = 0; j < color.length; j++) {
// for (let k = 0; k < color.length; k++) {
//console.log(marca[i] + color[j] + motor[k] + fin[Math.floor(Math.random() * fin.length)]);
//}
//}
//}  