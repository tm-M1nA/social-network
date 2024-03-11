import { actionSelectChat } from "../../../data/actions"
import { classNames } from "../../../data/lib"

export default function Dialogs(props){
    console.log(props.Users)
        return(<div className='dialogs'>
                    {props.Users.map((user,idx)=>{
                        return(
                            <div className={classNames('dialog-item', {userActive:user.active})} key={idx} onClick={()=>{
                                props.dispatch(actionSelectChat(idx))
                            }}>
                        
                                <img className="dialogImg" src={user.user_img}></img>
                                <div className="dialog-info">
                                    <p className='dialog-person'>{user.user_name}</p>
                                    <p className='dialog-lastMes'>Message</p>
                                </div>
                            </div>               
                        )
                    })}
                    
                </div>
        )
}