import test from 'ava'
import { todoList } from '../src/todoList'

// check that todoList is an object
test('todoList returns an object', t => {
  t.true(typeof todoList === 'object')
})

// check that todoList.add is a function
test('todoList.add returns a function', t => {
  t.true(typeof todoList.add === 'function')
})

// // test add function
test('todoList.add("test") adds a todo list item', t => {
  t.deepEqual(todoList.add('test one'), [{todoText: 'test one', isComplete: false}])
})

// add another todo item
test('todoList.add("test") adds a todo list item', t => {
  t.deepEqual(todoList.add('test two'), [{todoText: 'test one', isComplete: false}, {todoText: 'test two', isComplete: false}])
})

// todoList.edit is a function
test('todoList.edit() is a function', t => {
  t.true(typeof todoList.edit === 'function')
})

// edit todos
test('todoList.edit(0, "edited") edits the first todo item', t => {
  t.deepEqual(todoList.edit(0, 'edited'), [{todoText: 'edited', isComplete: false}, {todoText: 'test two', isComplete: false}])
})

test('todoList(0, "edited") edits the second todo item', t => {
  t.deepEqual(todoList.edit(1, 'edited too'), [{todoText: 'edited', isComplete: false}, {todoText: 'edited too', isComplete: false}])
})

// test delete function
test('todoList.delete(1) should delete the second todo item', t => {
  t.deepEqual(todoList.delete(1), [{todoText: 'edited', isComplete: false}])
})

// test delete function
test('todoList.delete(0) should delete the first todo item', t => {
  t.deepEqual(todoList.delete(0), [])
})
