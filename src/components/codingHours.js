import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CodingHours = () => {
  const [status, setStatus] = useState('pending');
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=');
  //       const jsonData = await response.json(); // Ensure you await the json() method.
  //       console.log(jsonData)
  //       setData(jsonData.data); // Corrected the path to access the data.
  //       setStatus('success');
  //     } catch (error) {
  //       console.error('Error fetching Wakatime data:', error);
  //       setStatus('error');
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <Clock className='size-[18px]' />
        <h2 className='text-sm font-light'>Coding hours</h2>
      </div>
      <div className='font-title flex grow items-center justify-center text-4xl font-semibold'>
        1684 hrs
      </div>
    </div>
  )
}

export default CodingHours;
