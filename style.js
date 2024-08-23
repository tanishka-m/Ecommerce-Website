//target main container
let mainPage = document.querySelector('.main');
console.log(mainPage);

//target the blog container
let blogs = document.querySelector('.trends');
console.log(blogs);

//target the women & men container
let card = document.querySelector('.trend');
console.log(card);
let card2 = document.getElementById('trendSec');

//target the about container
let abt = document.querySelector('.about');
console.log(abt);

//target the contact container
let con = document.querySelector('.contact');
console.log(con);

function homes() {
  mainPage.style.display = "flex";
  blogs.style.display = "block";
  card.style.display = "block";
  card2.style.display = "block";
  abt.style.display = "none";
  con.style.display = "none";

  document.getElementById('home').style.color = "#10cbcb";
  document.getElementById('shop').style.color = "black";
  document.getElementById('blog').style.color = "black";
  document.querySelector('#about').style.color = "black";
}

function shops() {
  mainPage.style.display = "none";
  blogs.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  abt.style.display = "none";
  con.style.display = "none";

  document.getElementById('shop').style.color = "#10cbcb";
  document.getElementById('home').style.color = "black";
  document.getElementById('blog').style.color = "black";
  document.querySelector('#about').style.color = "black";
}

function blog() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "block";
  abt.style.display = "none";
  con.style.display = "none";

  document.getElementById('blog').style.color = "#10cbcb";
  document.getElementById('home').style.color = "black";
  document.getElementById('shop').style.color = "black";
  document.querySelector('#about').style.color = "black";
}

function abouts() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abt.style.display = "block";
  con.style.display = "none";

  document.getElementById('about').style.color = "#10cbcb";
  document.getElementById('blog').style.color = "black";
  document.getElementById('home').style.color = "black";
  document.getElementById('shop').style.color = "black";
}

function contact() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abt.style.display = "none";
  con.style.display = "block";

  document.getElementById('contact').style.color = "#10cbcb";
  document.getElementById('about').style.color = "black";
  document.getElementById('blog').style.color = "black";
  document.getElementById('home').style.color = "black";
  document.getElementById('shop').style.color = "black";
}

function show(img) {
  let newImg = document.getElementById("newImg");
  console.log(newImg);
  newImg.src = img.src;

  document.querySelector(".cart").style.display = "flex";
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogs.style.display = "none";
  abt.style.display = "none";
  con.style.display = "none";
}

function addedCart() {
  alert("Added to cart");
  location.reload();
}