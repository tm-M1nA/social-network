import './main.css'
import Profile from '../Profile/Profile'
import Messages from '../Messages/Messages'
import Users from '../Users/Users'
import { Route, Routes } from 'react-router-dom'
import { Users_images } from '../../data/state'
export default function Main(props){
    return(
        <div className='main'>
            <Routes>

                <Route
                path='messages'
                element={
                <Messages
                Chats={props.state.Chats} 
                Users={props.state.Users}
                CurrentChat={props.state.currentChat}
                dispatch={props.dispatch}
                ></Messages>}></Route>

                <Route
                path='/' element={<Profile 
                Posts={props.state.Posts}
                dispatch={props.dispatch}
                ></Profile>}></Route>

                <Route
                path='users'
                element={
                <Users
                Users={props.state.Users}
                ></Users>}></Route>
            </Routes>
            
            

        </div>
    )
}