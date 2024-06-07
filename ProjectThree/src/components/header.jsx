import { Button } from "@mui/material";

import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <Link to="/">MyBlogWebsite</Link>
      </div>
      <div className="actions">
        <Button>
          <Link to={"/about"}>About</Link>
        </Button>
        <Button>
          <Link to={"/contact"}>Contact</Link>
        </Button>
      </div>
    </div>
  );
}
