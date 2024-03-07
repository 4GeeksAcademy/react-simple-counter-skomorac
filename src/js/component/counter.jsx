import { useState, useEffect } from "react";

const useCounter = () => {
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

  return time;
};

export default useCounter;
