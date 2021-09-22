import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Containers/Login';
import Registration from './Containers/Registration';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Switch>
     <Route exact path='/Registartion' component={Registration}/>
     <Route exact path='/' component={Login}/>
     
     </Switch>
     </BrowserRouter>

     {/* <Login/> */}
     
     <Footer/>
    </div>
  );
}

export default App;
