import React from "react";
import Card from "./card";
import useCounter from "./counter";
import "../../styles/index.css";

const Home = () => {
  const { time, paused, handlePause, handleResume, handleReset } = useCounter();

  return (
    <div className="container simpleCounter">
      <Card className="card iconClock" title={<i className="fa fa-clock iconClock"></i>} />
      <Card className="card tenThousands" title={time.tenThousands} />
      <Card className="card thousands" title={time.thousands} />
      <Card className="card hundreds" title={time.hundreds} />
      <Card className="card tens" title={time.tens} />
      <Card className="card units" title={time.units} />

      <div className="buttons-container">
        <button onClick={paused ? handleResume : handlePause}>
          {paused ? "Start" : "Pause"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Home;
