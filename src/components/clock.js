'use client';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const getTimeZone = () => {
    const month = time.getMonth(); // 0 = January, 11 = December
    return month >= 8 || month <= 3 ? 'America/Toronto' : 'America/Halifax';
  };

  const getCity = () => {
    const month = time.getMonth(); // 0 = January, 11 = December
    return month >= 8 || month <= 3 ? 'Waterloo, Ontario' : 'Halifax, Nova Scotia';
  };
return (
  <div>
    {getCity()}&nbsp;•&nbsp;(GMT{getTimeZone() === 'America/Toronto' ? '-4' : '-3'})&nbsp;
    {time.toLocaleTimeString('en-US', { timeZone: getTimeZone(), hour12: true })}
  </div>
  );
}