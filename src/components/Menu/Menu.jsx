import { Link, NavLink } from 'react-router-dom'
import './menu.css'

export default function Menu(){
    return(
        <div className='menu'>
            <div className='menu_content'>
                <ul>
                    <li><NavLink to='/'>Profile</NavLink></li>
                    <li><NavLink to='messages'> Messages</NavLink></li>
                    <li><NavLink to='users'>Users</NavLink></li>
                </ul>
            </div>
        </div>
    )

}