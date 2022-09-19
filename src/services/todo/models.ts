type T_TodoAuthor = {
  email: string
  id: number
}

export interface I_Todo {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  description: string
  author: T_TodoAuthor
}
