export interface Post {
  date: number;
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
  friends: Friend[];
  id: 1;
  name: string;
  password: string;
}
