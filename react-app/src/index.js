import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo';
import {apolloClient} from './apollo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './main.css';

import Header from './component/header/Header';

import Login from './component/authentication/Login';
import Register from './component/authentication/Register';

import ConferenceNavigation from './ConferenceNavigation';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Header/>

        <Switch>
          <Route path="/authentication/login" component={Login}/>
          <Route path="/authentication/register" component={Register}/>

          <Route path="/" component={ConferenceNavigation}/>
        </Switch>

      </div>
    </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
