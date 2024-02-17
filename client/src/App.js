import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from "./components/Auth/Auth.js";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <GoogleOAuthProvider clientId="276546729668-shlh8all9uh65t5puhufrbhsv5snhvni.apps.googleusercontent.com">
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                    </GoogleOAuthProvider>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;