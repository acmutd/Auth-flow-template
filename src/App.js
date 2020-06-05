//import React from 'react';
import 'bulma/css/bulma.css';
import { useAuth0 } from './contexts/auth0-context';
//import { useAuth0, Auth0Context } from "./react-auth0-spa";
//import { Auth0Context } from "./react-auth0-spa";
import React, { useContext } from 'react';
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
  //const { isAuthenticated, user } = useContext(Auth0Context);//useAuth0();
  //const auth0 = useContext(Auth0Context);
  const { isAuthenticated, user } = useAuth0();

  console.log(user + " App");

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
      
    </div>
  );
}

export default App;
