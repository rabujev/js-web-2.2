
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

async function getAmountOfBeerFromApiAndFillArray(amount) {
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
  await getAmountOfBeerFromApiAndFillArray(24);
  let beerContainer
  for (let i = 0; i < beername.length; i++){
    beerContainer = document.createElement("div");
    beerContainer.classList.add('beerContainer');
    beerContainer.id = i;
    document.querySelector('.content').appendChild(beerContainer);
    // beername
    let beerName = document.createElement("div");
    beerName.classList.add('beerName');
    beerName.id = 'beerName' + i;
    beerContainer.appendChild(beerName);
    beerName.innerText = (i + 1) + '. ' + beername[i];
    //the img for the beer
    let beerImg = document.createElement("img");
    beerImg.classList.add('beerImg');
    beerImg.id = 'beerImg' + i;
    beerContainer.appendChild(beerImg);
    beerImg.src = beerImgUrl[i];
    //The tagline
    let beerTag = document.createElement("div");
    beerTag.classList.add('beerTag');
    beerTag.id = 'beerTag' + i;
    beerContainer.appendChild(beerTag);
    beerTag.innerText = beerTagLine[i];
    //The date of the first brew
    let firstBrewDate = document.createElement("div");
    firstBrewDate.classList.add('firstBrewDate');
    firstBrewDate.id = 'firstBrewDate' + i;
    beerContainer.appendChild(firstBrewDate);
    firstBrewDate.innerText = 'First brewed: ' + beerFirstBrew[i];
  }
}


// Create img div within the beercontainer divs
createBeerContainerDivs();
