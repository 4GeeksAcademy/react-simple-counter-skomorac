import React, { useState, useEffect } from "react";
import Card from "./card";
import "../../styles/index.css";

// create your first component
const Home = () => {
  const [time, setTime] = useState({
    units: 0,
    tens: 0,
    hundreds: 0,
    thousands: 0,
    tenThousands: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let newTime = { ...prevTime };

        newTime.units = (prevTime.units + 1) % 10;

        if (prevTime.units === 9) {
          newTime.tens = (prevTime.tens + 1) % 10;
          if (prevTime.tens === 9) {
            newTime.hundreds = (prevTime.hundreds + 1) % 10;
            if (prevTime.hundreds === 9) {
              newTime.thousands = (prevTime.thousands + 1) % 10;
              if (prevTime.thousands === 9) {
                newTime.tenThousands = (prevTime.tenThousands + 1) % 10;

                // Check if the limit is reached (99999)
                if (
                  newTime.tenThousands === 9 &&
                  newTime.thousands === 9 &&
                  newTime.hundreds === 9 &&
                  newTime.tens === 9 &&
                  newTime.units === 9
                ) {
                  clearInterval(interval);
                  alert("Limit reached!");
                }
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
