import {combineReducers} from 'redux';
import postReducer from './postReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import testReducer from './testReducer';
import selectTestReducer from "./selectTestReducer"

export default combineReducers ({
  post: postReducer,
  todo: todoReducer,
  auth: authReducer,
  tests: testReducer,
  selectedTest: selectTestReducer,
});