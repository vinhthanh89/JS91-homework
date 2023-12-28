const TotalUser = ({usersData}) => {
    const totalUser = usersData.length;
    const totalAge = () => usersData.reduce((sumAge,user) => (sumAge + user.age),0);
    const totalMale = () => usersData.filter(item => item.gender === "male").length;
    const totalFemale = () => usersData.filter(item => item.gender === "female").length;

    return (
        <div>
            <h4>Total User : {totalUser} </h4>
            <h4>Total Age : {totalAge()}</h4>
            <h4>Total Male : {totalMale()}</h4>
            <h4>Total Female : {totalFemale()}</h4>
        </div>
    )

}

export default TotalUser