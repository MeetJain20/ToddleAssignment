import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Post from "./components/Post/Post";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}
          ></Route>
          <Route exact path="/post" element={<Post />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
