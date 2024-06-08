import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //   },
  // ]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<Error404 />}></Route>
          {/* <Route path="/user/:id" element={<User />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
