import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./firebase";

import Header from "./Header";
import Sidebar from './Sidebar';
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Login from "./Login";

import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from "./features/userSlice";


import './App.css';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  useEffect(() => {
    
    auth.onAuthStateChanged((user) => {
      if(user) {
        // user logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, []);

  return (
    <Router>

      {!user ? ( <Login />) : (

      <div className="app">
        <Header />

      <div className="app__body"> 
        <Sidebar />

        <Switch>
          <Route path="/mail" >
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>

        </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>

  )
}

export default App;
