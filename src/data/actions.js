function actionSendMessage(payload){
    return{type:'sendMessage', payload}
}
function actionAddNewPost(payload){
    return{type:'addNewPost', payload}
}
function actionSelectChat(payload){
    return{type:'selectChat', payload}
}
export{actionSendMessage, actionAddNewPost, actionSelectChat}