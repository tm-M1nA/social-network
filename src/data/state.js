import Bill from "./Bill.jpeg"
import Jeff from "./Jeff.jpeg"
import Steve from "./Steve.jpeg"
import Pavel from './Pavel.jpg'
import { myRender } from "./lib"
import postReducer from "./reducers/postReducer"
import messageReducer from "./reducers/messageReducer"
const store={
    state:{
        Posts:[{
            text:'Hello', 
            date:'27.11.23'
        }, 
        {
            text:'i am...',
            date:'27.11.23'
        }, 
        {
            text:'Elon Musk',
            date:'27.11.23'
        },
        {
            text:'hhh',
            date:'27.11.23'
        }],
        currentChat:null,
        Chats:[
            {
                userID:0,
                messages:[
                    {
                        type:'firstSend',
                        text:'Hi',
                        message_id:0
                    },
                    {
                        type:'secondSend',
                        text:'Hello',
                        message_id:1
                    }
            
                ]
            },
            {
            userID:1,
            messages:[
                {
                    type:'firstSend',
                    text:'Hi',
                    message_id:0
                },
                {
                    type:'secondSend',
                    text:'Hello',
                    message_id:1
                }
        
            ]
        },
        {
            userID:2,
            messages:[
                {
                    type:'firstSend',
                    text:'wssaup',
                    message_id:0
                },
                {
                    type:'secondSend',
                    text:'okkeuy',
                    message_id:1
                }
        
            ]
        },
        {
            userID:3,
            messages:[
                {
                    type:'firstSend',
                    text:'what are u doing',
                    message_id:0
                },
                {
                    type:'secondSend',
                    text:'walk',
                    message_id:1
                }
        
            ]
        }
        ],
        Users:[{
            user_name:'Bill Gates',
            user_img:Bill,
            user_id:0
        },
        {
            user_name:'Jeff Bezos',
            user_img:Jeff,
            user_id:1
        },
        {
            user_name:'Steve Jobs',
            user_img:Steve,
            user_id:2
        },
        {
            user_name:'Pavel Durov',
            user_img:Pavel,
            user_id:3
        }]
    },

    dispatch(action){
        const type=action.type
        const payload=action.payload
        store.state=postReducer(store.state, type, payload)
        store.state=messageReducer(store.state, type, payload)
        myRender(store)
    },

    methods:{
        sendMessage(text, user_id){
            store.state.currentChat.messages.push({
                type:'secondSend', text,
                message_id:0
            })
            myRender(store)
        },
        addNewPost(postText){
            let date=new Date()
            
            let d= date.getDate()
            let m=date.getMonth()+1
            let y=date.getFullYear()
            store.state.Posts.unshift({
                text:postText,
                date:d+'.'+m+'.'+y
            })
            myRender(store)
            console.log(store.state.Posts)
        },
        selectChat(id){
            store.state.currentChat=store.state.Chats[id]
            myRender(store)
        }
    }
}

export {store}