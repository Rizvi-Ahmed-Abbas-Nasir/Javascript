var RamdomNumber1 = Math.floor(Math.random() * 6)+1;
var RandomImages1 = "Dice"+ RamdomNumber1 + ".png";
var RabdomSource1 = "assets/"+RandomImages1;
var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src",RabdomSource1);

var RamdomNumber2 = Math.floor(Math.random() * 6)+1;
var RandomImages2 = "Dice"+ RamdomNumber2 + ".png";
var RabdomSource2 = "assets/"+RandomImages2;
var Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src",RabdomSource2);


console.log(RamdomNumber1);
console.log(RandomImages1);
console.log(RabdomSource1);
console.log(Image1);

console.log(RamdomNumber2);
console.log(RandomImages2);
console.log(RabdomSource2);
console.log(Image2);


if (RamdomNumber1 > RamdomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is Winner";
}
else if(RamdomNumber1 < RamdomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is Winner";
}
else{
    document.querySelector("h1").innerHTML = "Draws";
}