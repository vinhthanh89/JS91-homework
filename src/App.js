// import logo from './logo.svg';
import './App.css';
// import Profile from './components/Profile';
// import NameCard from './components/NameCard';
import Counter from './components/Counter';
import Studen from './components/Studen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Studen></Studen>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Profile /> */}
        {/* <NameCard name="Alice" age="35" gender="female" />
        <NameCard name="Peter" age="24" gender="male" />
        <NameCard name="John" age="31" gender="" />
        <NameCard name="Mary" age="28" gender="dsad" /> */}
      </header>
    </div>
  );
}

export default App;
