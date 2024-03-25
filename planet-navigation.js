const navLinks = document.querySelectorAll(".secondary-navigation li a"); 
const planetName = document.querySelector(".planet-card__info--title");
const planetText = document.querySelector(".planet-card__info--text"); 
const planetDistance = document.querySelector(".planet-card__num--distance"); 
const planetTravel = document.querySelector(".planet-card__num--time"); 
const planetImg = document.querySelector(".destination-img img")


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        updateInfo(this)
    })
}

async function getData() {
    try {
        const response = await fetch("./data.json"); 
        const data = response.json(); 
        return data;  
    } catch (e) {
        console.log(e);
    }
}

async function getPlanetInfo(name) {
    let data = await getData(); 
    let planetName = name.charAt(0).toUpperCase() + name.slice(1); 
    let destinations = data["destinations"]; 
    let planetInfo = destinations.find(planet => planet.name === planetName); 
    return planetInfo; 
}

function setActivePage(planet) {
    for (link of navLinks) {
        link.parentElement.classList.remove("active")
    }
    planet.parentElement.classList.add("active"); 
}

async function updateInfo(planet) {
    let planetInfo = await getPlanetInfo(planet.id); 
    setActivePage(planet)
    planetName.innerHTML = planetInfo.name; 
    planetText.innerHTML = planetInfo.description; 
    planetDistance.innerHTML = planetInfo.distance; 
    planetTravel.innerHTML = planetInfo.travel; 
    planetImg.src = planetInfo.images.png;     
}

