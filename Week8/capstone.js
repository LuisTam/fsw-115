axios.get('https://rickandmortyapi.com/api/character/1')
.then(response => {
    const name = response.data.name
    const species = response.data.species
    const locationUrl = response.data.location.url
    const location = response.data.location.name
    postToDom(`Name: ${name}`)
    postToDom(`Species: ${species}`)
    postToDom(`Location: ${location}`)
    return axios.get(locationUrl)
})
.then(response => {
    const residentUrl = response.data.residents[1]  
    return axios.get(residentUrl)
})
.then(response => {
    const resident = response.data.name 
    const species2 = response.data.species   
    postToDom(`Name: ${resident}`)
    postToDom(`Species: ${species2}`)
})
.catch(error => console.log(error))


function postToDom(data){
    let h1 = document.createElement('p')
    h1.textContent = data
    document.getElementById("con").appendChild(h1)
}


function btnPress(){
    const newh1 = document.createElement('h1')
    newh1.textContent = "Ricks To Do List"
    document.body.appendChild(newh1)
    getTodo()
}

function getTodo(){
    axios.get('http://api.bryanuniversity.edu/luistamayo/list/')
    .then(response => listTodos(response.data))
    .catch(error => console.log(error))
}

function listTodos(data){
    clearTodos()
    for(let i = 0; i < data.length; i++){
        const listItem = document.createElement('p')
        const itemDes = document.createElement('li')
        listItem.textContent = data[i].name
        itemDes.textContent= data[i].description
        document.getElementById('listContainer').appendChild(listItem)
        listItem.appendChild(itemDes)
    }
}

function clearTodos(){
    const el = document.getElementById('listContainer')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

const todoForm = document['todoForm']

todoForm.addEventListener('submit', e => {
    e.preventDefault()

    const newTodo = {
        name: todoForm.name.value,
        description: todoForm.description.value
    }
    
    todoForm.name.value =""
    todoForm.description.value = ""

axios.post('http://api.bryanuniversity.edu/luistamayo/list/',newTodo)
.then(response => getTodo(response.data))
.catch(error => console.log(error))
})
document.getElementById('pressMeBtn').addEventListener("click", btnPress)