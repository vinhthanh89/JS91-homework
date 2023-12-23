import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickIncrease = () =>{
    setCount(count + 1);
  }
  const handleClickReduce = () => {
    if (count > 0){
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h4>{count}</h4>
      <button className="button buttonIncrease" onClick={handleClickIncrease}>Increase</button>
      <button className="button buttonReduce" onClick={handleClickReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
