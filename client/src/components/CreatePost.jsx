import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addpost } from "../redux/postreducer";
function CreatePost() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const add = (e) => {
    e.preventDefault()
    dispatch(
      addproduct({
        title: title,
        content: content,
        imageUrl: image,
      }),
    );
    nav("/")
  };
  return (
    <div className="blog-list-item">
      <h1 className="New-Post-Title">New Post</h1>

      <form className="New-Post-Form" onSubmit={add}>
        <input
          id="title"
          type="text"
          className="search"
          placeholder="Title"
          required
          minLength="3"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <textarea
          id="content"
          className="post "
          placeholder="Content..."
          required
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <textarea
          id="image"
          className="post "
          placeholder="Image..."
          required
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <button className="btn btn-secondary searchButton" type="submit">
          publish
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
