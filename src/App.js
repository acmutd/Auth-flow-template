import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";

// styles
import "./App.css";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" render={(props) => <Profile {...props}/>}/>
            <PrivateRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
