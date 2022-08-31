//Grabbing Elements
const breweriesAPI = "https://api.openbrewerydb.org/breweries/random";
const popUpDisplay = document.getElementById("popup");
const searchButton = document.getElementById("submit");
const exitButton = document.getElementById("exit");

//fetching API
fetch(breweriesAPI)
  .then((resp) => resp.json())
  .then(IterateData);

//Iterating through each element in the Array
function IterateData(data) {
  data.forEach(addDetails);
}

//Assigning Elements from the array
function addDetails(breweryarray) {
  popUpDisplay.Name = breweryarray.name;
  popUpDisplay.Brewerytype = breweryarray.brewery_type;
  popUpDisplay.City = breweryarray.city;
  popUpDisplay.Country = breweryarray.country;
  popUpDisplay.BreweryID = breweryarray.id;
  popUpDisplay.phoneNumber = breweryarray.phone;
  popUpDisplay.PostalCode = breweryarray.postal_code;
  popUpDisplay.StateName = breweryarray.state;
  popUpDisplay.StreetName = breweryarray.street;
  popUpDisplay.BreweryWebsite = breweryarray.website_url;
}



// Pop-up Display Function
function openPopUp() {
  popup.classList.add("open-popup");
}
function closePopUp() {
  popup.classList.remove("open-popup");
}
