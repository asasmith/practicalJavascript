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
    this.todos.splice(position, 1)
    return this.todos
  }
  // edit todos
  // toggle completed
  // toggle all
}

exports.todoList = todoList
