import { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count]); 

  return (
    <div className='w-[300px] p-4'>
      <p>Progress Bar</p>
      <ProgressBar completed={count} />
      {count >= 100 ? <p>Completed</p> : <p>Loading</p>}
    </div>
  );
}

export default App;