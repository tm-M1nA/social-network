import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
function classNames(mainClass, otherClasses){
    const classStr=Object.keys(otherClasses).filter((el)=>{
        return otherClasses[el]
    }).join(' ')
    return mainClass+' '+classStr
}
let classes=classNames('user', {active:true,friend:false,fav:true})
console.log(classes)
function myRender(store){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const state=store.state
    const methods=store.methods
    root.render(
        <React.StrictMode>
            <BrowserRouter>
            <App
             state={state}
             methods={methods}
             dispatch={store.dispatch}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
export {
    myRender, classNames
}