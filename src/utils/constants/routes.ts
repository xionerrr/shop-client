export enum ROUTES {
  home = 'home',
  settings = 'settings',
  chat = 'chat',
  todos = 'todos',
  todo = 'todo/:todoId',
  createTodo = 'todo/create',
  updateTodo = 'todo/update/:todoId',

  auth = 'auth',

  notFound = '*',
}
