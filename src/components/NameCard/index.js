import "./style.css"
import {changeBackGround} from "./changeBackgroundColor"

const NameCard = (props) => {
    // const changeBackGround = () => {
    //     if (props.gender == "male") {
    //         return "red"
    //     }else if (props.gender == "female"){
    //         return "blue"
    //     }else {
    //         return "white"
    //     }
    // }
    return (
        <div className="NameCard" style ={{backgroundColor:changeBackGround(props.gender)}}>
            <h4 className="name">Name : {props.name}</h4>
            <h4 className="age">Age : {props.age}</h4>
            <h4 className="gender">Gender : {props.gender}</h4>
        </div>
    )
}

export default NameCard