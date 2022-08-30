fetch('https://api.openbrewerydb.org/breweries/random')
.then(resp => resp.json())
.then(data => console.log(data))