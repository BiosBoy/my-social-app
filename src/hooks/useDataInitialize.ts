"use client";
import { useEffect } from "react";

import data from "@/helpers/dataRandomizer";
import getPosts from "@/api/getPosts";
import getUsers from "@/api/getUsers";
import setPosts from "@/api/setPosts";
import setUsers from "@/api/setUsers";

const useDataInitialize = () => {
  useEffect(() => {
    const storedPosts = getPosts();
    const storedUsers = getUsers();

    if (storedPosts?.length > 0) {
      return;
    } else {
      // @ts-ignore
      setPosts(data.posts);
    }

    if (storedUsers?.length > 0) {
      return;
    } else {
      // @ts-ignore
      setUsers(data.users);
    }
  }, []);
};

export default useDataInitialize;
