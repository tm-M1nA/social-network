import './post.css'
import avatar from "./elon_musk.jpeg"
export default function Post(props){
    let post=props.post
    return(
        <div className='Post'>
            
            <p>Ilon Musk</p>
            <img src={avatar} className="second"></img>
            <br></br>
            <p>{post.text}</p>
            <small>{
                post.date
            }</small>
        </div>
    )
}