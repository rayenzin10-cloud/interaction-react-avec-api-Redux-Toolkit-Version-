import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpost, deletepost } from "../redux/productreducer";
import { useNavigate } from "react-router-dom";
const PostDetails = (props) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => {
    return state.post.data;
  });
  useEffect(() => {
    dispatch(getdata());
  }, []);
  return (
    <div className="blog-list-item">
      {data.map((el, i) => {
        return (
      <button onClick={() => {
                  dispatch(deleteproduct(el.id));
                }}> delete </button>

      <button onClick={() => {
                  nav("/create", { state: { post: el } });
                }}> edit </button>

      <div className="blog-list-item-title">{el.title}</div>
      <div className="blog-list-item-byline">{el.content}</div>
      <div className="blog-list-item-lede">
        <img src={el.imageUrl}  alt="no content" />
      </div>
        );
      })}
    </div>
  );
};

export default PostDetails;
