import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path="/books" element={<Books/>}/>
        <Route  path="/addBooks" element={<AddBooks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
