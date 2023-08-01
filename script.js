const panier = document.getElementById("panier");
const products = document.getElementById("products");
const newList = document.getElementById("myProducts");
// + meanse convert Strign to integer
let x = +localStorage.getItem("counter");

panier.innerText = x;

function moveToBuy(_item) {
  const btn = document.getElementById(_item);
  btn.classList.add("disabled");
  btn.classList.add("bg-secondary");
  x += 1; // x++ <=> x=x+1

  localStorage.setItem("counter", x);
  // update products number in localStorage
  panier.innerText = x;

  if(localStorage.getItem(_item)){
localStorage.setItem(_item, +localStorage.getItem(_item)+1)
  }
  else{
    localStorage.setItem(_item,1)
  }

}

function resetPanier(){
  localStorage.clear();
  panier.innerText = 0;
  x = 0;
  window.location.reload();
}

function showPanier(){

const btn = document.getElementById("shows");
btn.classList.remove("bg-warning");
btn.setAttribute("disabled",true);
let monPanier = Object.entries(localStorage);

let articles = monPanier.filter(element => 
  element[0] !== "counter"
  );
  
  let somme = monPanier.filter(element => 
    element[0] === "counter"
    );
 
    articles.map( el =>{
     let prod = document.createElement("li");
     console.log(el);
     prod.innerText = `${el[0]}_____ NB : ${el[1]}`;
      newList.appendChild(prod)
    })
    console.log(somme)
    document.getElementById("somme").innerText = `SOMME : ${somme[0][1]}`

}







