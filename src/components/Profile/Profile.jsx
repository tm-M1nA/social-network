import PostsContainer from "./Posts_container/PostsContainer"
import avatar from "./elon_musk.jpeg"
import './profile.css'

export default function Profile(props){
    return(
        <div>
            <h2>Ilon Musk</h2>
            <img src={avatar} className="first"></img>
            <PostsContainer Posts={props.Posts} dispatch={props.dispatch}></PostsContainer>

        </div>
    )

}