import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./create-post.css";

export default function CreatePost(props) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const { handleCreatePost } = props;

  const handlePost = () => {
    handleCreatePost({ username: username, content: content });
    setContent("");
  };

  return (
    <div className="create-post">
      <div>
        <div>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="your-post">
          <TextField
            id="outlined-basic"
            label="Your post"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <Button variant="contained" onClick={handlePost}>
          Post
        </Button>
      </div>
    </div>
  );
}
