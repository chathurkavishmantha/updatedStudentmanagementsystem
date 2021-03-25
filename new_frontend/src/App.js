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
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      
      <Header />

      


    
      <Footer />

  </Router>
  );
}

export default App;
