import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {reducers} from './reducers'
import {App} from './app';
import {LoginContainer} from './pages/login';
import {StudentListContainer} from './pages/student-list';
import {StudentDetailContainer} from './pages/student-detail';

let store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
   <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={LoginContainer}/>
            <Route path="login" component={LoginContainer}/>
            <Route path="student-list" component={StudentListContainer}/>
            <Route path="student-detail" component={StudentDetailContainer}/>
          </Route>
        </Router>
      </div>
   </Provider>
  , document.getElementById('root'));