document.getElementById('showBeer').addEventListener("click", function(){
    axios.get('https://api.openbrewerydb.org/breweries?by_city=houston')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const list = document.createElement('li')
        list.textContent = response.data[i].name
        document.body.appendChild(list)
    }
})
.catch(error => console.log(error))

})


