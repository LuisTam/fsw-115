document.getElementById('showSpells').addEventListener('click', function(){
    axios.get('https://hp-api.onrender.com/api/spells')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const list = document.createElement('li')
        list.textContent = 'NAME: ' + response.data[i].name + ':    '+ response.data[i].description
        document.body.appendChild(list)
    }
})
.catch(error => console.log(error))
})



