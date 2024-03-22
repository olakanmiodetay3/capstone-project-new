import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Analytics from "./analytics";
import PostScreen1 from "./post-screen-1";
function Authenticated() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/analytics" element={<Analytics />}></Route>
      <Route path="/write" element={<PostScreen1 />}></Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
export default Authenticated;
