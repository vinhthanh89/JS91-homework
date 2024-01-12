// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ThemeContext from "./Contexts/ThemeContext";
// import UserForm from './components/UserForm';
// import TotalUser from './components/TotalUser';
// import Profile from './components/Profile';
// import NameCard from './components/NameCard';
// import Counter from './components/Counter';
// import Studen from './components/Studen';

function App() {
  const [theme, setTheme] = useState("light");
  // const [users , setUsers] = useState([]);

  // const handleUserSubmitted = (newUser) =>{
  //   setUsers([...users,newUser])
  // }
  // console.log(users);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <header className={`App-header ${theme ? "light" : "dark"}`}>
          <TodoList />

          {/* <TodoItem todo="do homework"/> */}
          {/* <UserForm addSubmitUser={handleUserSubmitted}/>
        <TotalUser usersData={users}/> */}
          {/* <Counter></Counter>
        <Studen></Studen> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Profile /> */}
          {/* <NameCard name="Alice" age="35" gender="female" />
        <NameCard name="Peter" age="24" gender="male" />
        <NameCard name="John" age="31" gender="" />
        <NameCard name="Mary" age="28" gender="dsad" /> */}
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
