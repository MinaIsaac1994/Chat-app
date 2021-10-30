import "./App.css";
import Chat from "./component/Chat";
import SignIn from "./component/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
