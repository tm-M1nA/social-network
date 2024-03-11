export default function MessagesContent(props){
    if(props.currentChat){
        return(<div className='messagesContent'>
                   
            {props.currentChat.messages.map((message, idx)=>{
                return<p className={message.type} key={idx}>{message.text}</p>
            })}
        
        </div>)
    }
    else{
        return(
            <p>Start dialog</p>
        )
    }
}