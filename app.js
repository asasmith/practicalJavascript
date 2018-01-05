console.log('hello world')

// display should show todoText
// display should tell you if todos is empty
// display should show completed

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
  delete: function(position) {
    let index = position -1 // gets actual array index
    this.todos.splice(index, 1)
    this.display()
  }
}
