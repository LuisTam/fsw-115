//const { default: axios } = require("axios")
function getData(){
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
        itemDes.textContent = data[i].description
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
getData()


 
 const todoForm = document['todoForm']

 todoForm.addEventListener('submit', e => {
     e.preventDefault()

     const newTodo= {
         name: todoForm.name.value,
         description: todoForm.description.value
      }
    
     todoForm.name.value = ""
     todoForm.description.value = ""
     
     axios.post('http://api.bryanuniversity.edu/luistamayo/list/',newTodo)
     .then(response => getData())
     .catch(error => console.log(error))
    })



function deleteBtn(){
    var deleteButton = document.createElement('button');
    deleteButton.className = "delBtn";
    document.body.appendChild(deleteButton)

} 














/*function getData(){
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
        itemDes.textContent = data[i].description
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
getData()
 
 const todoForm = document['todoForm']

 todoForm.addEventListener('submit', e => {
     e.preventDefault()
     
     const newTodo= {
         name: todoForm.name.value,
         description: todoForm.description.value

     }
     todoForm.name.value = ""
     todoForm.description.value = ""

     axios.post('http://api.bryanuniversity.edu/luistamayo/list/',newTodo)
     .then(response => getData())
     .catch(error => console.log(error))
})
*/
