import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";

function App() {
  return (
    <Router>
      
      <Header />

      


    
      <Footer />

  </Router>
  );
}

export default App;
