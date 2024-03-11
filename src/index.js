import './index.css'
import { myRender } from './data/lib';
import {store} from './data/state';
import { actionSelectChat, actionSendMessage } from './data/actions';

myRender(store)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

