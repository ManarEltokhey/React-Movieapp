
import './App.css';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';
import NavbarComponent from './NavbarComponent';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Movies from './pages/Movies';
import NotFound from './NotFound';
import ViewMovie from './pages/ViewMovie';
import { LangContext } from './Context/LangContext';
import { useState } from 'react';
import {useSelector} from "react-redux";
import Favourite from './pages/Favoutite';


function App() {
  const theme = useSelector((state) => state.themeR.theme)
  const [contextLang,setContextLang]=useState("EN")
  return (
    <div className={ `App ${theme == "Dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <LangContext.Provider value={{contextLang,setContextLang}}>
      <BrowserRouter> 
      <NavbarComponent/>
      <Switch> 
      <Route exact  path={"/"} component={Movies} />
      <Route exact  path={"/login"} component={LoginComponent} />
      <Route exact  path={"/register"} component={RegistrationComponent} />
      <Route exact path={"/view/:id"} component={ViewMovie} />
      <Route exact  path={"/favourite"} component={Favourite} />
      <Route exact path={"*"} component={NotFound} />
     </Switch> 
     </BrowserRouter>
     </LangContext.Provider>
    </div>
    
  );
}

export default App;
