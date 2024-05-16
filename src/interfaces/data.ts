export interface Post {
  date: number | string;
  title: string;
  description: string;
  author: Friend;
}

export interface CurrentUser {
  password: string;
  name: string;
  id: string;
}

export interface Friend {
  name: string;
  id: string;
}

export interface User {
  friends?: Friend[];
  id: string;
  name: string;
  password: string;
}
