import styled from 'styled-components'

export const Todos = styled.div`
  display: flex;
  gap: 24px;

  width: 100%;
  height: 100%;
`

export const TodosLoading = styled.div``

export const Todo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 325px;
  height: 100%;
  max-height: 325px;
  padding: 24px;

  color: #000;

  background-color: #fff;
  box-shadow: 0 0 12px 0 #999;
`

export const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TodoParagraph = styled.p``

export const TodoMain = styled.div``

export const TodoFooter = styled.div``
