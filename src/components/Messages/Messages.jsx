import './messages.css'
import React from 'react'
import img from './elon_musk.jpeg'
import MessagesContent from './MessagesContent/MessagesContent'
import Dialogs from './Dialogs/Dialogs'
import { actionSendMessage } from '../../data/actions'
let input_ref=React.createRef()
export default function Messages(props){
    function send(){
        props.dispatch(actionSendMessage(input_ref.current.value))
    }
    return(
        <div className='Messages'>
            <Dialogs Users={props.Users} dispatch={props.dispatch}></Dialogs>
            <div className='Chat'>
                <MessagesContent currentChat={props.CurrentChat}></MessagesContent>
                <div className='message_control'>
                    <input className='sendInput' ref={input_ref}></input>
                    <button className='sendButton' onClick={send}>send</button>
                </div>
            </div> 
        </div>
    )
}