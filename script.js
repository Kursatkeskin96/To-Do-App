const input = document.getElementById('text')
const button = document.getElementById('button')
const list = document.getElementById('todolist')


function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// Adding todolist
function addTodo() {
  const itemall = document.createElement('div')
  itemall.classList.add('itemall')

  const item = document.createElement('p')
  item.classList.add('item')
  item.innerText = input.value
  itemall.appendChild(item)

  const hr = document.createElement('hr')
  itemall.appendChild(hr)

    if (input.value === '') return

    const checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add("check-button")
    itemall.appendChild(checkButton)

    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add("trash-button")
    itemall.appendChild(trashButton)

    list.appendChild(itemall)
    input.value = ''
}


// checking and delete todoList 
function okdel(e) {
    const item = e.target
  
    // Check
    if (item.classList[0] === 'check-button') {
      const todolist = item.parentElement
      todolist.classList.toggle('checklist')
    }
  
    // Delete
    if (item.classList[0] === 'trash-button'){
      const todolist = item.parentElement
      todolist.remove()
    }
  }

button.addEventListener('click', clickButton)
list.addEventListener('click', okdel)
