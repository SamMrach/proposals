import MyButton from "./components/MyButton";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './components/Modal';
import ContextProvider from './ContextProvider';
import Container from "./Container";
import { Provider } from 'react-redux';
import {ourStore} from "./reducer";
document.addEventListener('DOMContentLoaded',()=>{
    // waitForElement().then(elem=>{
    //     insertButton();
    //     insertDrawer();
    // })

    insertButton();
    insertDrawer();
  
})
function waitForElement(){
    return new Promise((resolve,reject)=>{
        if(document.getElementsByClassName('form-group up-form-group')[2])
        return resolve(document.getElementsByClassName('form-group up-form-group')[2])
        const observer = new MutationObserver(mutations => {
            if (document.getElementsByClassName('form-group up-form-group')[2]) {
                resolve(document.getElementsByClassName('form-group up-form-group')[2]);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    })
}
const insertButton=()=>{
    let container=document.createElement('div');
    container.style.cssText="height:40px,display:block,border:1px solid black";
    //let coverElement=document.getElementsByClassName('form-group up-form-group')[2];
    let coverElement=document.getElementsByClassName('theme-choice')[0];
        coverElement.prepend(container);
    var Cont=Container(MyButton);
        ReactDOM.render(
            <Provider store={ourStore} >
                <Cont/>
            </Provider>
            ,
            container
        )
}
const insertDrawer=()=>{
    let div=document.createElement('div');
    div.className="ourDrawer";
    div.style.cssText='display:block;height:100vh;width:250px';
    document.body.appendChild(div);
    let ModalContainer=Container(Modal);
    ReactDOM.render(
        <Provider store={ourStore}>
          <ModalContainer/>
        </Provider>
                ,
        div
    )
}