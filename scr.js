const td = document.querySelectorAll(".td");
const num = document.querySelector(".num")
const num2 = document.querySelector(".num2")
const btn = document.querySelector(".btn");
let s =[];
let o = [];
function ran(e){
    
    e.disabled = true;
    for(let i=0; i<5; i++){
        const t = td[Math.floor(Math.random() * td.length)];
       t.style.backgroundColor = "red"}

       td.forEach((e,b) => {
        if(e.style.backgroundColor==="red"){
            s.push(e)
            o.push(b)
            end(s)
            gr(s)
        }
       });
      
       
       let c =10
      const u = setInterval(()=> {
        if(c<=1) {
            clearInterval(u)
            
        }
        num.innerHTML = c
        c -=1
        
    },1000) 
    
}
function end(s){
    
    num2.innerHTML = `you have 3`
setInterval(()=>{   
    td.forEach((e) => {
        if(e.style.backgroundColor==="red"){
            e.style.backgroundColor="white"
        }
       });
       
    },10000)
}
/* function m(a,b){
    
    let count = 3
    num.innerHTML = `${count}`
    

    b.forEach( e => {
        
        if(e.dataset.id===a.dataset.id){
            console.log("t");
            e.style.backgroundColor = "green"
            
        }
        
        if(e.dataset.id!==a.dataset.id){
            
            num.innerHTML = `${count-1}`
            console.log("f");
        }
    })
} */
function gr(a){
    let p = 3;
    console.log(a);
setInterval(()=>{
    let w = 0;
    let er =0;
    num2.innerHTML = `you have ${p}`
        
        td.forEach((e)=>{
            e.addEventListener("click", r =>{
                //m(el,a)
               if(a.includes(e)){
                e.style.backgroundColor = "green"
                er++;
               }
               else if(!(a.includes(e))){
                p--
                num2.innerHTML = `you have ${p}`
                w++
               }
               if(er==a.length){
                 alert("you win!")
                 location.reload()
               }
               if(p==0){
                btn.disabled = false;
                alert("you loose!")
                location.reload();
               }
               console.log(w);
                /* if(r.target==a){
                        console.log(r.target);
                        el.style.backgroundColor = "green"
                }
                else if(r.target!==a){
                    console.log("false");
                } */
                /* for(let i = 0; i < a.length ; i++){
                    console.log(el.dataset.id);
                    console.log(a[i].dataset.id);
                    
                     if(el.dataset.id===a[i].dataset.id){
                        console.log(`${el.dataset.id} , ${a[i].dataset.id} true`);
                        a[i].style.backgroundColor = "green"
                        
                    }
                    
                    else if(el.dataset.id!==a[i].dataset.id){
                        w++;
                        //num.innerHTML = `${count-1}`
                        console.log(`${el.dataset.id} , ${a[i].dataset.id} false`);
                        console.log(w);
                        if(w==3){
                            console.log("stop");
                        }
                    } 
                   
                
                } */
            
            })
            
        })
        },10000)                
    }



    


