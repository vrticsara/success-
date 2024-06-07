import { Link, Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
