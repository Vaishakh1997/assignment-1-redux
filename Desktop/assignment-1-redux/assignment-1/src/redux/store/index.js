import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import postReducer from '../reducers/postReducer.js'

const thunkMiddleware = [thunk]

export const store = createStore(postReducer, applyMiddleware(...thunkMiddleware))