import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CodingHours = () => {
  const [status, setStatus] = useState('pending');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wakatime.com/share/@Ch3mson/454e48bd-9913-410c-8cdf-bac1cf07502e.json');
        const jsonData = await response.json();
        if (jsonData && jsonData.data) {
          setData(jsonData.data);
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error fetching Wakatime data:', error);
        setStatus('error');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <Clock className='size-[18px]' />
        <h2 className='text-sm font-light'>Coding hours (since September 2024 with this plugin active)</h2>
      </div>
      <div className='font-title flex grow items-center justify-center text-4xl font-semibold'>
        {data ? Math.round(data.grand_total.total_seconds/3600) : 0 } Hours
      </div>
    </div>
  )
}

export default CodingHours;
