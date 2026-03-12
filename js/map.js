let map=L.map("map").setView([13.0827,80.2707],12)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

L.marker([13.0827,80.2707]).addTo(map)
.bindPopup("Traffic Zone A")

L.marker([13.05,80.25]).addTo(map)
.bindPopup("Traffic Zone B")

L.marker([13.10,80.29]).addTo(map)
.bindPopup("Traffic Zone C")
