let body = document.querySelector("body")
let start = document.querySelector(".start")
let main = document.querySelector("main main")
let ky = document.querySelector("#key")
let loc = document.querySelector("#location")
let wich = document.querySelector("#which")
let wich2 = document.querySelector("#wich")
let code = document.querySelector("#code")
let dark = document.querySelector("#dark")
let darkflag = true
body.addEventListener("keydown",(event)=>{
    event.preventDefault()
    start.style.display = "none"
    main.style.display = "flex"
    console.log(event)
    ky.innerHTML = event.key
    loc.innerHTML = event.location
    wich.innerHTML = event.keyCode
    wich2.innerHTML = event.keyCode
    code.innerHTML = event.code
})
dark.addEventListener("click",()=>{
    if(darkflag){
        body.classList.toggle("dark")
        dark.innerHTML = "Light theme"
        darkflag = false
    }else{
        body.classList.remove("dark")
        dark.innerHTML = "Dark theme"
        darkflag = true
    }
})