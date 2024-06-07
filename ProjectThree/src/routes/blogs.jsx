import { useState } from "react";
import "./blogs.css";
import Post from "../components/post";
import CreatePost from "../components/create-post";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (post) => {
    setPosts([...posts, post]);
  };

  const handleDeletePost = (idx) => {
    setPosts(posts.filter((_, i) => i !== idx));
  };

  return (
    <div className="blogs">
      <CreatePost handleCreatePost={handleCreatePost} />
      <div className="blog-list">
        {posts.map((post, idx) => (
          <Post
            handleDeletePost={handleDeletePost}
            idx={idx}
            username={post.username}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}
