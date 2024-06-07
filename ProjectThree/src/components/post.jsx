import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function Post(props) {
  const { username, content, idx, handleDeletePost } = props;

  const handleDelete = () => {
    handleDeletePost(idx);
  };

  return (
    <React.Fragment>
      <CardContent>
        <Avatar />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {username}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </React.Fragment>
  );
}
