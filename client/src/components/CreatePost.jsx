function CreatePost() {
  return (
    <div className="blog-list-item">
      <h1 className="New-Post-Title">New Post</h1>

      <form className="New-Post-Form">
        <input
          id="title"
          type="text"
          className="search"
          placeholder="Title"
          required
          minLength="3"
        />

        <textarea
          id="content"
          className="post "
          placeholder="Content..."
          required
        />

        <textarea
          id="image"
          className="post "
          placeholder="Image..."
          required
        />

        <button className="btn btn-secondary searchButton" type="submit">
          publish
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
