import logo from "./social-media.png"
import './header.css'
export default function Header(){
    return(<header className="header">
            <img src={logo}></img>
            <p>social network</p>
        </header>)
}