import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from './store/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Auth from './components/auth';

import WithPageLayout from './components/page-layout';

import NotFound from './areas/not-found';

import HomePage from './areas/home-page';
import Builder from './areas/resume-builder/builder';
import SampleTemplate from './areas/sample-template';
import PreviewResume from './areas/preview-resume';
import ExportDocument from './areas/export-document';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={WithPageLayout(HomePage)}/>
                <Auth.PrivateRoute path='/builder' component={WithPageLayout(Builder)}/>
                <Auth.PrivateRoute path='/previewer' component={WithPageLayout(PreviewResume)}/>
                <Auth.PrivateRoute path='/export' component={ExportDocument}/>
                <Route exact path='/sample' component={SampleTemplate}/>
                <Route path='/login' component={Auth.Login}/>
                <Route path='/callback' component={Auth.Callback} />
                <Route path='*' component={WithPageLayout(NotFound)}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
