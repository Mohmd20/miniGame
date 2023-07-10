const td = document.querySelectorAll(".td");
const timer = document.querySelector(".timer")
const wrong = document.querySelector(".wrong")
const btn = document.querySelector(".btn");
const level = document.querySelectorAll(".level");
const d_container = document.querySelector(".d-container");
const alert = document.querySelector(".alert");
const fade = document.querySelector(".fade");
const alert_text = document.querySelector(".alert-text");
const progress = document.querySelector(".progress");
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
            checkLevel = 4
            timeLevel = 4000
        }
        else if(e.target.classList.contains("hard")){
            e.target.classList.add("selected");
            level[0].classList.remove("selected");
            level[1].classList.remove("selected");
            tempLevel = 2
            checkLevel = 2
            timeLevel = 2000
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
        td[Math.floor(Math.random() * td.length)].style.backgroundColor = "rgb(255, 33, 113)"
       
        td.forEach( td => {
         if(td.style.backgroundColor === "rgb(255, 33, 113)"){
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
            if(e.style.backgroundColor==="rgb(255, 33, 113)"){
                e.style.backgroundColor="rgb(255, 250, 215)"
            }
            e.classList.add("hover")
            e.addEventListener("click",a => {
                check(a.target,temp,tempLevel)
                
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
        e.style.backgroundColor = "rgb(255, 144, 187)"
    }
    
    td.forEach( td => {
        td.classList.remove("hover")
        if(td.style.backgroundColor === "rgb(31, 163, 83)") c++
        if(td.style.backgroundColor === "rgb(255, 144, 187)") tempLevel--
        
    })   

        wrong.innerHTML = `${tempLevel} chances`
    let i=0
    let width = 0
    if(c>=temp.length) {
        progressBar()
        alert.style.display = "block"
        fade.style.display = "block"
        alert_text.style.color="rgb(31, 163, 83)"
        alert_text.textContent = "You Win!"
        setInterval( ()=> location.reload(),3250)
    }
    if(tempLevel==0){
        progressBar()
        alert.style.display = "inline"
        fade.style.display = "block"
        alert_text.style.color="rgb(255, 144, 187)"
        alert_text.textContent = "You Lose!"
        setInterval( ()=> location.reload(),3250)
    }
}

function restart(){
    location.reload()
}
function progressBar(){
    let i = 0
    let width = 0
    if (i == 0) {
        i = 1;
        let id = setInterval(clearInter, 20);
        function clearInter() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            progress.style.width = width + "%";
          }
        }
      }
}
