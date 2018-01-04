console.log('hello world')

// todoList.addTodo should add objects
// // todoList.changeTodo should change the todoText property
// // todoList.toggleCompleted should change the completed property
//
const todoList = {
   
todos: [],
  display: function() {
    console.log('Todos:')
    for(let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText, this.todos[i].completed)
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
