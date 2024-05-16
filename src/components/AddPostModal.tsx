"use client";
import { FormEvent, useState } from "react";
import getPosts from "../utils/getPosts";
import { useAuth } from "@/auth/AuthContext";
import { createPortal } from "react-dom";

const AddPostModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const posts = getPosts();
    posts.push({
      author: {
        name: currentUser?.name,
        id: currentUser?.id,
      },
      title,
      description,
      date: new Date().toISOString(),
    });
    localStorage.setItem("posts", JSON.stringify(posts));
    setIsOpen(false);
    setTitle("");
    setDescription("");
    window.location.reload();
  };

  return (
    <div className="addPost">
      <button type="submit" onClick={() => setIsOpen(true)}>
        (+)
      </button>
      {isOpen &&
        createPortal(
          <div className="modal">
            <p>Add new post</p>
            <form onSubmit={handleSubmit}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="submitPostBtn">
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                  Save
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setIsOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </form>
          </div>,
          document.querySelector("body") as Element
        )}
    </div>
  );
};

export default AddPostModal;
