const API = "https://backend-stms.onrender.com"

async function loadTraffic(){

const res = await fetch(API + "/traffic")

const data = await res.json()

document.getElementById("roadA").innerText =
"Road A : " + data.roadA

document.getElementById("roadB").innerText =
"Road B : " + data.roadB

document.getElementById("roadC").innerText =
"Road C : " + data.roadC

}

loadTraffic()
