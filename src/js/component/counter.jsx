import React, { useState, useEffect } from "react";

const useCounter = () => {
    const [time, setTime] = useState({
      units: 0,
      tens: 0,
      hundreds: 0,
      thousands: 0,
      tenThousands: 0,
    });
  
    const [paused, setPaused] = useState(false);
  
    useEffect(() => {
      let interval;
  
      if (!paused) {
        interval = setInterval(() => {
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

                  if (
                    newTime.tenThousands === 9 &&
                    newTime.thousands === 9 &&
                    newTime.hundreds === 9 &&
                    newTime.tens === 9 &&
                    newTime.units === 9
                  ) {
                    clearInterval(interval);
                    alert("Limit reached!");
                    setPaused(true);
                  }
                }
              }
            }
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [paused]);

  const handlePause = () => {
    setPaused(true);
  };

  const handleResume = () => {
    setPaused(false);
  };

  const handleReset = () => {
    setPaused(false);
    setTime({
      units: 0,
      tens: 0,
      hundreds: 0,
      thousands: 0,
      tenThousands: 0,
    });
  };

  return { time, paused, handlePause, handleResume, handleReset };
};

export default useCounter;