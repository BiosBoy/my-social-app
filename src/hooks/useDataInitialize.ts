"use client";
import { useEffect } from "react";

import data from "@/helpers/dataRandomizer";
import getPosts from "@/utils/getPosts";
import getUsers from "@/utils/getUsers";

const useDataInitialize = () => {
  useEffect(() => {
    const storedPosts = getPosts();
    const storedUsers = getUsers();

    if (storedPosts?.length > 0) {
      return;
    } else {
      localStorage.setItem("posts", JSON.stringify(data.posts));
    }

    if (storedUsers?.length > 0) {
      return;
    } else {
      localStorage.setItem("users", JSON.stringify(data.users));
    }
  }, []);
};

export default useDataInitialize;
