import React from "react";
import Card from "./card";
import useCounter from "./counter";
import "../../styles/index.css";

const Home = () => {
  const time = useCounter();

  return (
    <div className="container simpleCounter">
      <Card className="card iconClock" title={<i className="fa fa-clock iconClock"></i>} />
      <Card className="card months" title={time.tenThousands} />
      <Card className="card months" title={time.thousands} />
      <Card className="card weeks" title={time.hundreds} />
      <Card className="card days" title={time.tens} />
      <Card className="card hours" title={time.units} />
    </div>
  );
};

export default Home;
