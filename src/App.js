import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widgets/Widgets";
import { useStateValue } from "./context/userContext";
function App() {
  const { state: {user} } = useStateValue();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
