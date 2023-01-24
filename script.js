let body = document.querySelector("body")
let start = document.querySelector(".start")
body.addEventListener("keydown",(event)=>{
    event.preventDefault()
    start.style.display = "none"
    
})