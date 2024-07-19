export interface Post {
  date: number | string
  title: string
  description: string
  author: Friend
}

export interface CurrentUser {
  password: string
  name: string
  id: number
}

export interface Friend {
  name: string
  id: number
}

export interface User {
  friends?: Friend[]
  id: number
  name: string
  password: string
}
