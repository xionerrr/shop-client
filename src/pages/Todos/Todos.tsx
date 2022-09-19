import { Typography } from 'antd'
import { useLayoutEffect, useState } from 'react'

import * as S from './styles'

import { todoAPI } from 'services/todo'
import { I_Todo } from 'services/todo/models'

export const Todos = () => {
  const [todos, setTodos] = useState<I_Todo[]>()

  const {
    data: getTodosData,
    isSuccess: getTodosSuccess,
    isError: getTodosError,
  } = todoAPI.useGetTodosQuery()

  useLayoutEffect(() => {
    if (getTodosData) setTodos(getTodosData)
  }, [getTodosData])

  if (getTodosError) return <div>error</div>

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
