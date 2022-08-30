const popUp = document.getElementById('popup')

function openPopUp(){
    popup.classList.add('open-popup');
}

function closePopUp(){
    popUp.classList.remove('open-popup');
}






fetch('https://api.openbrewerydb.org/breweries/random')
.then(resp => resp.json())
.then(data => console.log(data))