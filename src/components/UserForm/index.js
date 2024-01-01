import { useState } from "react";

const UserForm = ({ addSubmitUser }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 0,
    gender: "male",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addSubmitUser(userInfo);
  };

  const handleChange = (event) => {
    const value =
      event.target.name === "age"
        ? parseInt(event.target.value, 10)
        : event.target.value;
    setUserInfo({
      ...userInfo,
      [event.target.name]: value,
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="userName">
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" onChange={handleChange} name="name" />
      </div>
      <div className="userAge">
        <label htmlFor="age">Age : </label>
        <input type="number" id="age" onChange={handleChange} name="age" />
      </div>
      <div className="userGender">
        <span>Gender : </span>
        <select name="gender" id="" onChange={handleChange}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
