/*
  const todoList = {
    todos: [],
    add: function (todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      })
    },
    edit: function (position, todoText) {
      let index = position - 1 // gets actual array index
      this.todos[index].todoText = todoText
    },
    toggleCompleted: function (position) {
      let index = position - 1 // gets actual array index
      let todo = this.todos[index]
      todo.completed = !todo.completed // if todo.completed = true, set value to false. if false, set to true
    },
    toggleAll: function () {
      let totalTodos = this.todos.length
      let completedTodos = 0

  // remove this for loop
  // for(let i = 0; i < this.todos.length; i++) {
  //  if(this.todos[i].completed) {
  //    completedTodos += 1
  //  }
  // }

      this.todos.forEach(function (todo) {
        if (todo.completed) {
          completedTodos += 1
        }
      })

      this.todos.forEach(function (todo) {
  // if everything is true, make everything false
        if (completedTodos === totalTodos) {
          todo.completed = false
  // otherwise make everything true
        } else {
          todo.completed = true
        }
      })
    },
    delete: function (position) {
      this.todos.splice(position, 1)
    }
  }
// change buttons to use onclick attr
//

const handlers = {
  addTodo: function () {
    let addTodoInput = document.getElementById('add-todo-input')
    todoList.add(addTodoInput.value)
    addTodoInput.value = '' // clear value
    views.display()
  },
  editTodo: function () {
    let todoIndexPosition = document.getElementById('edit-todo-position')
    let editedTodoInput = document.getElementById('edited-todo-input')
    todoList.edit(todoIndexPosition.valueAsNumber, editedTodoInput.value)
    todoIndexPosition.value = '' // clear value
    editedTodoInput.value = '' // clear value
    views.display()
  },
  deleteTodo: function (position) {
    todoList.delete(position)
    views.display()
  },
  toggleCompleted: function () {
    let todoIndexPosition = document.getElementById('toggle-completed-todo-position')
    todoList.toggleCompleted(todoIndexPosition.valueAsNumber)
    todoIndexPosition.value = ''
    views.display()
  },
  toggleAll: function () {
    todoList.toggleAll()
    views.display()
  }
}

const views = {
  display: function () {
    let ul = document.getElementById('todo-list')
    ul.innerHTML = ''
/* for(let i = 0; i < todoList.todos.length; i++) {
      let li = document.createElement('li')
      let todo = todoList.todos[i]
      let todoText = ''
      if(todo.completed === false) {
        todoText = `( ) ${todo.todoText}`
      } else {
        todoText = `(x) ${todo.todoText}`
      }
      li.textContent = todoText
      li.id = i
      li.appendChild(this.createDeleteButton())
      ul.appendChild(li)
    }
*/
/*
    todoList.todos.forEach(function (todo, index) {
      let li = document.createElement('li')
      // let todo = todos
      let todoText = ''
      if (todo.completed === false) {
        todoText = `( ) ${todo.todoText}`
      } else {
        todoText = `(x) ${todo.todoText}`
      }
      li.textContent = todoText
      li.id = index
      li.appendChild(this.createDeleteButton())
      ul.appendChild(li)
    }, this)
  },
  createDeleteButton: function () {
    let button = document.createElement('button')
    button.textContent = 'delete'
    button.classList.add('delete-button')
    return button
  },
  setUpEventListeners: function () {
    const todosUl = document.querySelector('ul')

    todosUl.addEventListener('click', function (event) {
      let arrIndex = event.target.parentNode.id
      // get element clicked

      if (event.target.className === 'delete-button') {
        // run handlers.deleteTodo()
        handlers.deleteTodo(arrIndex)
      }
    })
  }
}

views.setUpEventListeners()
*/
