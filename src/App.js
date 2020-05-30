import React from 'react';
import 'bulma/css/bulma.css';
// import { Auth0Context } from './contexts/auth0-context';
// import { Auth0Context } from "./react-auth0-spa"
import { useAuth0 } from "./react-auth0-spa";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
  const { isAuthenticated, user } = useAuth0();

  console.log(isAuthenticated);
  console.log(user);

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
    </div>
  );
}

export default App;
