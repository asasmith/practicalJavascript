import test from 'ava'
import todoList from '../src/todoList'

// check that todoList is an object
test('todoList.todoList returns an object', t => {
  t.true(typeof todoList.todoList === 'object')
})

// check that todoList.add is a function
test('todoList.todoList.add returns a function', t => {
  t.true(typeof todoList.todoList.add === 'function')
})

// test add function
test('todoList.add("test") adds a todo list item', t => {
  t.deepEqual(todoList.todoList.add('test one'), [{todoText: 'test one', isComplete: false}])
  t.log(todoList.todoList.todos)
})

// add onther todo item
test('todoList.add("test") adds a todo list item', t => {
  t.deepEqual(todoList.todoList.add('test two'), [{todoText: 'test one', isComplete: false}, {todoText: 'test two', isComplete: false}])
  t.log(todoList.todoList.todos)
})

// test delete function
test('todoList.delete(1) should delete the second todo item', t => {
  t.deepEqual(todoList.todoList.delete(1), [{todoText: 'test one', isComplete: false}])
  t.log(todoList.todoList.todos)
})

// test delete function
test('todoList.delete(0) should delete the first todo item', t => {
  t.deepEqual(todoList.todoList.delete(0), [])
  t.log(todoList.todoList.todos)
})
