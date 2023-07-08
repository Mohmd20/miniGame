const td = document.querySelectorAll(".td");
const timer = document.querySelector(".timer")
const wrong = document.querySelector(".wrong")
const btn = document.querySelector(".btn");
const level = document.querySelectorAll(".level");
const d_container = document.querySelector(".d-container");
let tempLevel=6;
let checkLevel=6;
let timeLevel = 6000;
level.forEach( lvl => {
    lvl.addEventListener("click", e =>{
        
        if(e.target.classList.contains("easy")){
            e.target.classList.add("selected");
            level[1].classList.remove("selected");
            level[2].classList.remove("selected");
            tempLevel = 6
            checkLevel = 6
            timeLevel = 6000
        }
        else if(e.target.classList.contains("medium")){
            e.target.classList.add("selected");
            level[0].classList.remove("selected");
            level[2].classList.remove("selected");
            tempLevel = 4
            checkLevel = 3
            timeLevel = 3000
        }
        else if(e.target.classList.contains("hard")){
            e.target.classList.add("selected");
            level[0].classList.remove("selected");
            level[1].classList.remove("selected");
            tempLevel = 2
            checkLevel = 1
            timeLevel = 1000
        }
        
    })
})
let temp=[];
btn.addEventListener("click", b =>{
    btn.disabled = true;
    level.forEach(lvl => {
        lvl.disabled = true
        if(tempLevel==6){
            level[0].classList.add("selected")
        }
    });
    for(let i=0; i<6; i++)
        td[Math.floor(Math.random() * td.length)].style.backgroundColor = "red"
       
        td.forEach( td => {
         if(td.style.backgroundColor === "red"){
            temp.push(td)
       }})  
    let c = checkLevel
    let op =1
    const u = setInterval(()=> {
        if(c==0) {
            timer.style.opacity = 0
            clearInterval(u)          
        }
        timer.innerHTML = c
        c--       
    },900) 
    setInterval(()=>{   
        td.forEach((e) => {
            if(e.style.backgroundColor==="red"){
                e.style.backgroundColor="rgba(208, 252, 237, 0.832)"
            }
            e.classList.add("hover")
            e.addEventListener("click",e => {
                
                check(e.target,temp,tempLevel)
                
            })
           });
           
        },timeLevel)
             wrong.innerHTML = `${tempLevel} chances`
})


function check(e,temp,tempLevel) {
    let c =0
    
    if(temp.includes(e)) {
        e.style.backgroundColor = "rgb(31, 163, 83)"
        e.style.border = "none"
    }
    if(!(temp.includes(e))) {
        e.style.border = "none"
        e.style.backgroundColor = "rgb(202, 16, 62)"
    }
    
    td.forEach( td => {
        if(td.style.backgroundColor === "rgb(31, 163, 83)") c++
        if(td.style.backgroundColor === "rgb(202, 16, 62)") tempLevel--
        
    })   

        wrong.innerHTML = `${tempLevel} chances`

    
    if(c>=temp.length) {
        alert("you win!!!")
        location.reload()
    }
    if(tempLevel==0){
        alert("you lose!")
        location.reload()
    }
}

function restart(){
    location.reload()
}

if(window.matchMedia("(max-width: 400px)").matches){
    d_container.style.left = "0 !important"
}
