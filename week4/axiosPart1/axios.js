axios.get('http://api.bryanuniversity.edu/luistamayo/list/')
.then( response => {
    for(let i = 0; i < response.data.length; i++){
        const todoItem = document.createElement('li')
        todoItem.textContent = response.data[i].name
        document.body.appendChild(todoItem)
    }
})
.catch(error => console.log(error))
