const todoList = {
  todos: [],
  // add todos
  add: function (todoText) {
    this.todos.push({
      todoText: todoText,
      isComplete: false
    })
    return this.todos
  },
  // delete todos
  delete: function (position) {
    this.todos.splice(position)
    return this.todos
  },
  // edit todos
  edit: function (position, todoText) {
    // let index = position - 1 // gets actual array index
    this.todos[position].todoText = todoText
    return this.todos
  },
  // toggle completed
  toggleComplete: function (position) {
    let todo = this.todos[position]
    todo.isComplete = !todo.isComplete // if todo.completed = true, set value to false. if false, set to true
    return this.todos[position].isComplete
  }
  // toggle all
}

exports.todoList = todoList
