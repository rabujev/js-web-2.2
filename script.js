
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

import axios from 'axios';

let beername = [];
let beerTagLine = [];
let beerFirstBrew = [];
let beerImgUrl = [];

async function getAmountOfBeerFromApi(amount) {
  let beer = await axios.get('https://api.punkapi.com/v2/beers/');
  for (let i = 0; i < amount; i++) {
    beername[i] = beer.data[i].name;
    beerTagLine[i] = beer.data[i].tagline;
    beerFirstBrew[i] = beer.data[i].first_brewed;
    beerImgUrl[i] = beer.data[i].image_url;
    console.log(beer.data[i].name);
  }
}

//Create beercontainer divs
async function createBeerContainerDivs() {
  await getAmountOfBeerFromApi(25);
  let beerContainer
  for (let i = 0; i < beername.length; i++){
    beerContainer = document.createElement("div");
    beerContainer.classList.add('beerContainer');
    beerContainer.id = i;
    document.querySelector('.content').appendChild(beerContainer);
    let beerImg = document.createElement("img");
    beerImg.classList.add('beerImg');
    beerImg.id = 'beerImg' + i;
    beerContainer.appendChild(beerImg);
    beerImg.src = beerImgUrl[i];
  }
}


// Create img div within the beercontainer divs
createBeerContainerDivs();
