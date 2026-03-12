const API="https://stms-backend.onrender.com"

async function loadTraffic(){

let res=await fetch(API+"/traffic")

let data=await res.json()

document.getElementById("roadA").innerText="Road A : "+data.roadA

document.getElementById("roadB").innerText="Road B : "+data.roadB

document.getElementById("roadC").innerText="Road C : "+data.roadC

}

loadTraffic()
