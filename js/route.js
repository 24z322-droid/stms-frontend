function findRoute(){

let source = document.getElementById("source").value
let destination = document.getElementById("destination").value

if(source=="" || destination==""){
alert("Please enter source and destination")
return
}

document.getElementById("result").innerHTML =
"Best route from " + source + " to " + destination + " takes 20 minutes (Low Traffic)"

}
