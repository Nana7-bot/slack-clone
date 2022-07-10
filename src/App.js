import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";
import { provider } from "./firebaseConfig";
import { actionType } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  firebase.auth().onAuthStateChanged((currentUser) => {
    dispatch({
      type: actionType.SET_USER,
      user: currentUser.displayName,
    });
  });

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          {/* ////////////////////////////////
            Header
          ////////////////////////////////// */}
          <Header />

          <div className="app__body">
            {/* ////////////////////////////////
            Sidebar
          ////////////////////////////////// */}
            <Sidebar />

            {/* ////////////////////////////////
            React-Router --> Chat Screen
          ////////////////////////////////// */}
            <Routes>
              <Route path="/" element={<Chat />}></Route>

              <Route path="/room/:roomId" element={<Chat />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
