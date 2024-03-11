export default function messageReducer(state, type, payload){
    if (type==='sendMessage'){
        state.currentChat.messages.push({
            type:'secondSend', text:payload,
            message_id:0
        })
        return state
    }

    if(type==='selectChat'){
        state.currentChat=state.Chats[payload]
        state.Users=state.Users.map((el)=>{
            el.active=false
            return el
        })
        state.Users[payload].active=true
        return state 
    }
    return state
}