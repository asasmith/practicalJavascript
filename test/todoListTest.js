import test from 'ava'
import todoList from '../src/todoList'

// check that todoList is an object
test('todoList.todoList returns an object', t => {
  t.true(typeof todoList.todoList === 'object')
})
