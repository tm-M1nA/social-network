import './users.css'
export default function Users(props){
    return(
        <div className="users">
            {props.Users.map((item)=>{
                return(
                    <div className="Bill" key={item.user_id}>
                        <img src={item.user_img} className="Bill_img"></img>
                        <h3 className="Bill_profile">{item.user_name}</h3>
                        <p>Hello im {item.user_name}!</p>
                    </div>
                )   
            })}
             
        </div>
    )
}