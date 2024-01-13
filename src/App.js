// import logo from './logo.svg';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import TodoList from "./components/TodoList";
import ThemeContext from "./Contexts/ThemeContext";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Header from "./components/Header";
// import UserForm from './components/UserForm';
// import TotalUser from './components/TotalUser';
// import Profile from './components/Profile';
// import NameCard from './components/NameCard';
// import Counter from './components/Counter';
// import Studen from './components/Studen';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <header className={`App-header ${theme === "light" ? "light" : "dark"}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>

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
