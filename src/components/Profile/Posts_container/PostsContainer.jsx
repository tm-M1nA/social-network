import './posts.css'
import Post from './Post/Post'
import React from 'react'
import { actionAddNewPost } from '../../../data/actions'
let inputRef=React.createRef()
export default function PostsContainer(props){
    let posts=props.Posts
    function addPost(){
        props.dispatch(actionAddNewPost(inputRef.current.value))
    }
    return(
        <div className='Posts'>
            <h1>My Posts</h1>
            <input ref={inputRef}></input>
            <button onClick={addPost}>add new post</button>
            <br></br>
            {
                posts.map((e, i)=>{
                    return(
                        <Post key={i} post={e}></Post>
                    )
                })
            }
            
        </div>
    )
}