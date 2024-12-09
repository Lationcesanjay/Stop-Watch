import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false);  
  const [intervalId, setIntervalId] = useState(null); 

   const startStopwatch = () => {
    setRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);      setIntervalId(id);
  };

   const stopStopwatch = () => {
    setRunning(false);
    clearInterval(intervalId);  
  };

   const resetStopwatch = () => {
    setRunning(false);
    setTime(0);
    clearInterval(intervalId);  
  };

   useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

   const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Stopwatch</h1>
        
        <div className="text-4xl font-bold text-gray-800 mb-6">
          {formatTime(time)}
        </div>

        <div className="space-x-4">
          {!running ? (
            <button
              onClick={startStopwatch}
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopStopwatch}
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Stop
            </button>
          )}
          
          <button
            onClick={resetStopwatch}
            className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
