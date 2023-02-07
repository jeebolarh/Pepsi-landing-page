const closeBtn=document.querySelector(".bi-x");
const openBtn=document.querySelector(".bi-list");
const menu=document.querySelector("#menu")

closeBtn.addEventListener("click", ()=>{
    menu.style.right="-500px"
    
})

openBtn.addEventListener("click", ()=>{
    menu.style.right="-6%"
})