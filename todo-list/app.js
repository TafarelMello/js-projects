const getData = () => {
  return JSON.parse(localStorage.getItem('todoList')) ?? []
}

const localStorageDB = getData()

const setData = (db) => {
  localStorage.setItem('todoList', JSON.stringify(db))
}

const cleanItems = () => {
  const todoList = document.getElementById('todo-list')
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

const LoadItems = () => {
  cleanItems()

  localStorageDB.forEach((item, index) =>
    createElementItem(item.task, item.status, index),
  )
}

const createElementItem = (task, status, index) => {
  const item = document.createElement('label')
  item.classList.add('todo-item')
  item.innerHTML = `
            <input type="checkbox" ${status} data-id=${index} />
            <div>${task}</div>
            <input type="button" value="X" data-id=${index} />
            `
  document.getElementById('todo-list').appendChild(item)
}

const insertItem = (event) => {
  let key = event.key
  let text = event.target.value

  if (key === 'Enter') {
    localStorageDB.push({
      task: text,
      status: '',
    })

    setData(localStorageDB)
    LoadItems()

    event.target.value = ''
  }
}

const removeItem = (id) => {
  localStorageDB.splice(id, 1)

  setData(localStorageDB)
  LoadItems()
}

const updateItem = (id) => {
  localStorageDB[id].status = localStorageDB[id].status === '' ? 'checked' : ''

  setData(localStorageDB)
  LoadItems()
}

const clickItem = (event) => {
  let element = event.target

  if (element.type === 'button') {
    let id = element.dataset.id

    removeItem(id)
  } else if (element.type === 'checkbox') {
    let id = element.dataset.id

    updateItem(id)
  }
}

document.getElementById('new-item').addEventListener('keypress', insertItem)

document.getElementById('todo-list').addEventListener('click', clickItem)

LoadItems()
