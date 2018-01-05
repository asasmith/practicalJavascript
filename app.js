// there should be a 'Display Todos' button and a 'Toggle All' button
// clicking 'Display Todos' should run todoList.display()
// clicking 'Toggle All' should run todoList.toggleAll()

const todoList = {
   
  todos: [],
  display: function() {
    if(this.todos.length === 0) {
      console.log('you don\'t have any todos')
    } else {
    console.log('Todos:')
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].completed) {
        console.log('[x] ' + this.todos[i].todoText)
        } else {
          console.log('[ ] ' + this.todos[i].todoText)
        }
      }
    }
  },
  add: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.display()
  },
  edit: function(position, todoText) {
    let index = position - 1 // gets actual array index
    this.todos[index].todoText = todoText
    this.display()
  },
  toggleCompleted: function(position) {
    let index = position - 1 //gets actual array index 
    let todo = this.todos[index] 
    todo.completed = !todo.completed //if todo.completed = true, set value to false. if false, set to true
    this.display()
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
    this.display()
  },
  delete: function(position) {
    let index = position -1 // gets actual array index
    this.todos.splice(index, 1)
    this.display()
  }
}

var displayBtn = document.getElementById('displayBtn')
displayBtn.addEventListener('click', function() {
  todoList.display()
})
const toggleAllBtn = document.getElementById('toggleAllBtn')
toggleAllBtn.addEventListener('click', function() {
  todoList.toggleAll()
})
