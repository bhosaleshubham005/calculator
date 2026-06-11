console.log("development in the process")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let ans = document.getElementById("ans")
let sub = document.getElementById("sub")
let div = document.getElementById("div")
let mul = document.getElementById("mul")
let add = document.getElementById("add")

add.addEventListener("click", function(){
    let res = Number(num1.value) + Number(num2.value) ;
    ans.innerText= res ;
})

sub.addEventListener("click", function(){
    let res = Number(num1.value) - Number(num2.value) ;
    ans.innerText= res ;
})

div.addEventListener("click", function(){
    let res = Number(num1.value) / Number(num2.value) ;
     if(Number(num2.value) === 0 ){
        ans.innerText= "number is not divisible by 0" ;
        
     }
     else{
        let res = Number(num1.value) / Number(num2.value) ;
        ans.innerText= res.toFixed(2) ;
     }
    
})

mul.addEventListener("click", function(){
    let res = Number(num1.value) * Number(num2.value) ;
    ans.innerText= res ;
})
