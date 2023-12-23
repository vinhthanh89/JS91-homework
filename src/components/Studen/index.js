import { useState } from "react";
import "./style.css";

const Studen = () => {
  const [studen, setStuden] = useState({
    name: "John",
    level: 1,
    isActive: true,
  });

  const increaseLevel = () => {
    setStuden((prev) => {
      return {
        ...prev,
        level: prev.level + 1,
      }
    });
  };

  const decreaseLevel = () => {
    if (studen.level > 1) {
      setStuden((prev) => {
        return {
          ...prev,
          level: prev.level - 1,
        }
      });
    }
  };

  const changeStudenStatus = () => {
      setStuden(prevStuden => ({
        ...prevStuden,
        isActive: !prevStuden.isActive,
      }));
  }

  
  return (
    <div className="studenInfo" style={{backgroundColor: studen.isActive ? 'green' : 'gray'}}>
      <h2 className="name">Name: {studen.name}</h2>
      <h3 className="level">Level: {studen.level}</h3>
      <div>
        <button onClick={increaseLevel}>Increase</button>
        <button onClick={decreaseLevel}>Decrease</button>
      </div>
      <div>
        <button onClick={changeStudenStatus}>Change Status</button>
      </div>
    </div>
  );
};

export default Studen;
