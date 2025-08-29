import { useEffect, useState } from 'react';

export const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p className='subtext'>{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>;
};
