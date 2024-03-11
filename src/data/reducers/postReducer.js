export default function postReducer(state, type, payload){
    if (type==='addNewPost'){
        let date=new Date()
        let d= date.getDate()
        let m=date.getMonth()+1
        let y=date.getFullYear()
        state.Posts.unshift({
            text:payload,
            date:d+'.'+m+'.'+y
        })
        return state
    }
    return state
}