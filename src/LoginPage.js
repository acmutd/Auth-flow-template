import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import { Container, Button } from "@material-ui/core";

const LoginPage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <Container>
        <div className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
            <h1>Authentication Status: {isAuthenticated}</h1>
              <Button
                variant="contained"
                color="primary"
                onClick={loginWithRedirect}
              >
                Sign in with ACM
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={logout}
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
