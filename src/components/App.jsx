import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Feed from "./Feed.jsx";
import Connections from "./Connections.jsx";
import ConnectionRequests from "./ConnectionRequests.jsx";
import Chat from "./Chat.jsx";

const root = document.getElementById("root");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/connections" element={<Connections />}></Route>
            <Route path="/requests" element={<ConnectionRequests />}></Route>
            <Route path="/chat/:targetUserId" element={<Chat />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
