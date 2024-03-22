import Login from "./login";
import SignUp from "./signup";
import Landing from "./landing";
import Verification from "./verification";
import { Route, Routes } from "react-router-dom";

function Unauthenticated() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/verify" element={<Verification />}></Route>
    </Routes>
  );
}
export default Unauthenticated;
