import { useLayoutEffect, useEffect, useState } from 'react'

import * as S from './styles'

import { todoAPI } from 'services/todo'
import { I_Todo } from 'services/todo/models'

export const Todos = () => {
  const [todos, setTodos] = useState<I_Todo[]>()

  const [getTodos, { data: getTodosData, isSuccess: getTodosSuccess, isFetching: todosFetching }] =
    todoAPI.useLazyGetTodosQuery()

  useLayoutEffect(() => {
    getTodos()
  }, [])

  useEffect(() => {
    if (getTodosData) setTodos(getTodosData)
  }, [getTodosData])

  if (todosFetching) return <S.TodosLoading>Loading...</S.TodosLoading>

  if (todos && getTodosSuccess)
    return (
      <S.Todos>
        {todos.map((todo) => {
          return (
            <S.Todo key={todo.id}>
              <S.TodoHeader>
                <S.TodoParagraph>{todo.id}</S.TodoParagraph>
                <S.TodoParagraph>{todo.title}</S.TodoParagraph>
              </S.TodoHeader>
              <S.TodoMain>{todo.description}</S.TodoMain>
              <S.TodoFooter>
                Author:
                {todo.author.email}
              </S.TodoFooter>
            </S.Todo>
          )
        })}
      </S.Todos>
    )

  return <div>empty list of todos</div>
}
