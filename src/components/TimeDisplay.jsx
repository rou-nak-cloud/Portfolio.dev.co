import { useEffect, useState } from 'react';

export const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p className='text-neutral-300 text-sm md:text-base text-pretty pl-7'>{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>;
};
