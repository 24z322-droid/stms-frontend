const API="https://stms-backend.onrender.com"

async function findRoute(){

let from=document.getElementById("from").value

let to=document.getElementById("to").value

let res=await fetch(API+"/route",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({from,to})

})

let data=await res.json()

document.getElementById("result").innerText="Best Route: "+data.route

}
