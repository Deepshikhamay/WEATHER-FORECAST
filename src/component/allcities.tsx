import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface WeatherRecord {
  datasetid: string;
  recordid: string;
  fields: {
    coordinates: [number, number];
    cou_name_en: string;
    label_en: string;
    feature_code: string;
    population: number;
    dem: number;
    geoname_id: string;
    name: string;
    ascii_name: string;
    alternate_names: string;
    admin1_code: string;
    feature_class: string;
    country_code: string;
    timezone: string;
    modification_date: string;
  };
  record_timestamp: string;
}

interface Props {
  weatherData: {
    records: WeatherRecord[];
  };
}

function AllCities({ weatherData }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = weatherData?.records.filter(record =>
    record.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* header */}
      <div className='flex justify-between'>
        <p className='block lg:hidden font-semibold md:text-[35px] text-[25px]'>Weather</p>
        <p className='font-semibold md:text-[35px] text-[25px]  hidden lg:block'>Weather
          <span className='font-semibold ml-4 md:text-[35px] text-[25px]'>Forecast</span> </p>
        <div className='flex'>
          <input
            type="text"
            placeholder="Search City..."
            className="border border-gray-300 px-4 py-2 rounded-lg"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className='rounded-lg border-2 border-blue-500 hover:border-blue-600 bg-blue-500 text-white hover:bg-blue-600 px-2 mx-1 cursor pointer hidden md:block'> search  </button>
        </div>
      </div>
      {/* tables */}
      <div className='flex justify-between mt-8 pb-3 border-b border-blue-500'>
        <div className='md:text-[22px] text-[20px] font-medium'>
          Cities
        </div>
        <div className='md:text-[22px] text-[20px] font-medium'>
          Country
        </div>
        <div className='md:text-[22px] text-[20px] font-medium'>
          Timezone
        </div>
      </div>

      {/* Mapping filtered records */}
      {filteredRecords?.map((record, i) => (
        <div key={i} className='flex justify-between mt-4 pb-3 border-b border-blue-500'>
          <Link 
            to={`/${record.fields.name}`} 
            state={{ recordData: record, country: record.fields.cou_name_en, timezone: record.fields.timezone,}} 
            className='hover:text-[#4f4f4f] md:text-[16px] text-[12px]' 
            target="_blank" rel="noopener noreferrer"
          >
            {record.fields.name}
          </Link>
          <div className='md:text-[16px] text-[12px]'>{record.fields.cou_name_en}</div>
          <div className='md:text-[16px] text-[12px]'>{record.record_timestamp}</div>
        </div>
      ))}

    </div>
  )
}

export default AllCities;
