import Appbar from "../components/Appbar";
import { Outlet } from "react-router";
export default function Root() {
    return (
      <>
        <Appbar />
        <Outlet />
      </>
    );
  }
  