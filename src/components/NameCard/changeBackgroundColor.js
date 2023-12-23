const changeBackGround = (gender) => {
    if (gender === "male") {
        return "red"
    }else if (gender === "female"){
        return "blue"
    }else {
        return "white"
    }
}

export {changeBackGround};
