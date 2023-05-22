var add_to_basket = document.querySelectorAll('.add_this_to_basket');
var basket = document.querySelectorAll('.liked');
var product = document.querySelectorAll('.product')
var deletebtn = document.querySelectorAll('.trasht');
var added_product = document.querySelectorAll('.added_product');
//making function to remove items from cart
deletebtn.forEach(function(btn){
  btn.addEventListener('click',function(){
    btn.parentElement.remove();//parentNode ==> renvoie n'importe qu'elle type de noed parent ==++ tandi que parentElement renvoie uniquement un element parent.
  })
});
//making function to add items to cart
add_to_basket.forEach(function(btn){
  btn.addEventListener('click',function(){
    btn.parentElement.appendChild();//parentNode ==> renvoie n'importe qu'elle type de noed parent ==++ tandi que parentElement renvoie uniquement un element parent.
  })
});
const products = [
  {
    name: "Nounours marron",
    image: "photos/our.png",
    price: 35,
    description: "Un joli nounours marron avec un foulard",
  },
  {
    name: "Nounours black",
    image: "photos/our.png",
    price: 40,
    description: "Un joli nounours black avec un foulard ",
  },
  {
    name: "Nounours yellow",
    image: "photos/our.png",
    price: 45,
    description: "Un joli nounours yellow avec un foulard ",
  },
  {
    name: "Nounours blanc",
    image: "photos/our.png",
    price: 50,
    description: "Un joli nounours blanc avec un foulard ",
  },
  {
    name: "Nounours rose",
    image: "photos/our.png",
    price: 55,
    description: "Un joli nounours rose avec un foulard ",
  },
  {
    name: "Nounours vert",
    image: "photos/our.png",
    price: 60,
    description: "Un joli nounours vert avec un foulard ",
  },
  {
    name: "Nounours blue",
    image: "photos/our.png",
    price: 65,
    description: "Un joli nounours blue avec un foulard ",
  },
  {
    name: "Nounours orange",
    image: "photos/our.png",
    price: 70,
    description: "Un joli nounours orange avec un foulard ",
  },
  {
    name: "Nounours",
    image: "images/Capture,boygraffity.PNG",
    price: 75,
    description: "Un joli nounours avec un foulard ",
  },
  {
    name: "Nounours marron",
    image: "images/Capture,boygraffity.PNG",
    price: 80,
    description: "Un joli nounours marron avec un foulard ",
  },
  {
    name: "Nounours gris",
    image: "photos/our.png",
    price: 85,
    description: "Un joli nounours gris avec un foulard ",
  },
  {
    name: "Nounours blueciel",
    image: "photos/our.png",
    price: 90,
    description: "Un joli nounours blueciel avec un foulard ",
  },
];
//making function to researching product
function searchProduct(){
  var product = document.querySelectorAll('.product');
  
}
