const API = "https://backend-stms.onrender.com"

async function findRoute(){

const from = document.getElementById("from").value
const to = document.getElementById("to").value

const res = await fetch(API + "/route",{

method: "POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
from: from,
to: to
})

})

const data = await res.json()

document.getElementById("result").innerText =
"Best Route: " + data.route

}
