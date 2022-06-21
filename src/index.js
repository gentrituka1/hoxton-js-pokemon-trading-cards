// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html


function singleCard(element){
    
    let ulMainEl = document.body.querySelector('.cards');


    let liEl = document.createElement("li");
    liEl.className = "card"
    liEl.id = "card";


    let h2El = document.createElement("h2");
    h2El.className = "card--title"
    h2El.textContent = element.name.toUpperCase()

    let imgEl = document.createElement("img")
    imgEl.className = "card--img"
    imgEl.src = element.sprites.other["official-artwork"].front_default
    imgEl.alt = ""
    imgEl.width = 256



    let ulEl = document.createElement("ul")
    ulEl.className = "card--text"

    for(let stat of element.stats){

    let statLi = document.createElement("li");

    statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`

    ulEl.append(statLi)
    }
    
    
    liEl.append(h2El, imgEl, ulEl)
    ulMainEl.append(liEl)
}





// - The cards should be nested inside <ul class="cards"></ul>

for (let element of data){
    singleCard(element)
}

function cards(cards) {
    throw new Error("Function not implemented.");
}

