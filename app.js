// there should be a 'Display Todos' button and a 'Toggle All' button
// clicking 'Display Todos' should run todoList.display()
// clicking 'Toggle All' should run todoList.toggleAll()

const todoList = {
   
  todos: [],
  add: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },
  edit: function(position, todoText) {
    let index = position - 1 // gets actual array index
    this.todos[index].todoText = todoText
  },
  toggleCompleted: function(position) {
    let index = position - 1 //gets actual array index 
    let todo = this.todos[index] 
    todo.completed = !todo.completed //if todo.completed = true, set value to false. if false, set to true
  },
  toggleAll: function() {
    let totalTodos = this.todos.length
    let completedTodos = 0
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].completed) {
        completedTodos += 1
      }
    }
    // if everything is true, make everything false

    if(completedTodos === totalTodos) {
      for(let i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false
      }
    } else {
      for(let i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true
      }
    }

    // otherwise make everything true
    console.log(completedTodos)
  },
  delete: function(position) {
    let index = position -1 // gets actual array index
    this.todos.splice(index, 1)
  }
}

// change buttons to use onclick attr

const handlers = {
  addTodo: function() {
    let addTodoInput = document.getElementById('add-todo-input')
    todoList.add(addTodoInput.value)
    addTodoInput.value = '' // clear value
    views.display()
  },
  editTodo: function() {
    let todoIndexPosition = document.getElementById('edit-todo-position')
    let editedTodoInput = document.getElementById('edited-todo-input')
    todoList.edit(todoIndexPosition.valueAsNumber, editedTodoInput.value)
    todoIndexPosition.value = '' // clear value
    editedTodoInput.value = '' // clear value 
    views.display()
  },
  deleteTodo: function() {
    let todoIndexPosition = document.getElementById('delete-todo-position')
    todoList.delete(todoIndexPosition.valueAsNumber)
    todoIndexPosition.value = ''
    views.display()
  },
  toggleCompleted: function() {
    debugger;
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
  display: function() {
    let ul = document.getElementById('todo-list')
    ul.innerHTML = ''
    for(let i = 0; i < todoList.todos.length; i++) {
      let li = document.createElement('li')
      let todo = todoList.todos[i]
      let todoText = ''
      if(todo.completed === false) {
        todoText = `( ) ${todo.todoText }`
      } else {
        todoText = `(x) ${todo.todoText }`
      }
      li.textContent = todoText
      ul.appendChild(li)
    }
  }
}
