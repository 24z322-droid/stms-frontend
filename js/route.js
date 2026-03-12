let map = L.map('map').setView([13.0827,80.2707],10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)

let routeLayer

async function findRoute(){

let source = document.getElementById("source").value
let destination = document.getElementById("destination").value
let mode = document.getElementById("mode").value

if(source=="" || destination==""){
alert("Enter source and destination")
return
}

let src = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${source}`)
let srcData = await src.json()

let dest = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${destination}`)
let destData = await dest.json()

let startLat = srcData[0].lat
let startLon = srcData[0].lon

let endLat = destData[0].lat
let endLon = destData[0].lon

let route = await fetch(`https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`)
let routeData = await route.json()

let coords = routeData.routes[0].geometry.coordinates.map(c => [c[1],c[0]])

if(routeLayer){
map.removeLayer(routeLayer)
}

routeLayer = L.polyline(coords,{color:'blue',weight:5}).addTo(map)

map.fitBounds(routeLayer.getBounds())

let distance = routeData.routes[0].distance / 1000

let speed

if(mode=="car") speed = 50
if(mode=="bus") speed = 35
if(mode=="train") speed = 80

let time = distance / speed

let minutes = Math.round(time * 60)

document.getElementById("result").innerHTML =
"Distance: " + distance.toFixed(2) + " km<br>" +
"Estimated Time (" + mode + "): " + minutes + " minutes"

}
