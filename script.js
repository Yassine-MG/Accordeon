

// let a = document.querySelector('#Darius');
// let p = document.querySelector('#Dariusp');
// a.addEventListener("click",()=>{
//    p.classList.toggle("active");
// })

let p = document.querySelectorAll("p");
let a = document.querySelectorAll("a");

a.forEach(element => {
 element.addEventListener("click",()=>{
   element.nextElementSibling.classList.toggle("active")
 })  
});




