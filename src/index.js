import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from './layout/home/home'
import AboutUs from './layout/about-us/about-us'

import * as serviceWorker from './serviceWorker'
import App from './App'
import rootReducer from './redux/reducers/index'

import './index.sass'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about-us" component={AboutUs} />
					<Route> <div> 404</div> </Route>
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.querySelector(".page__inner")
);


serviceWorker.unregister()
