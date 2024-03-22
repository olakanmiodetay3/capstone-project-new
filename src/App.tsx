import "./App.css";
import { useUser } from "./providers/user";
import { ToastContainer } from "react-toastify";
import Authenticated from "./pages/Authenticated";
import Unauthenticated from "./pages/UnAuthenticated";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const userContext = useUser();
  const currentUser = userContext?.currentUser;

  return (
    <>
      <ToastContainer theme="light" position="top-right" />
      {currentUser ? <Authenticated /> : <Unauthenticated />};
    </>
  );
}

export default App;
