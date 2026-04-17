const PostDetails = () => {
  return (
    <div className="blog-list-item">
      <button> delete </button>

      <button> edit </button>

      <div className="blog-list-item-title"></div>
      <div className="blog-list-item-byline">a day ago</div>
      <div className="blog-list-item-lede">
        <img  alt="no content" />
      </div>
    </div>
  );
};

export default PostDetails;
