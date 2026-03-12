let map = L.map('map').setView([13.0827,80.2707],12)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)

let trafficData = [

{
location:"Anna Nagar",
lat:13.0878,
lng:80.2102,
level:"Low"
},

{
location:"T Nagar",
lat:13.0418,
lng:80.2341,
level:"Medium"
},

{
location:"Guindy",
lat:13.0067,
lng:80.2206,
level:"Heavy"
},

{
location:"Velachery",
lat:12.9791,
lng:80.2186,
level:"Medium"
}

]

trafficData.forEach(function(data){

let color

if(data.level=="Low") color="green"
if(data.level=="Medium") color="orange"
if(data.level=="Heavy") color="red"

let marker = L.circleMarker([data.lat,data.lng],{
radius:10,
color:color,
fillColor:color,
fillOpacity:0.7
}).addTo(map)

marker.bindPopup(
"<b>"+data.location+"</b><br>Traffic Level: "+data.level
)

})
