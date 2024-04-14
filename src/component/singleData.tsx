import React from 'react';
import { useParams } from 'react-router-dom';

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

function SingleData({ weatherData }: Props) {
    const { cityName } = useParams();

    const cityRecord = weatherData?.records.find(record => record.fields.name === cityName);

    if (!cityRecord) {
        return <div>City not found</div>;
    }

    const { fields } = cityRecord;

    return (
        <div className='px-5 md:px-0'>
            <div className='flex justify-center md:mt-20 mt-10 md:text-4xl text-2xl font-semibold hover:text-blue-800 cursor-pointer'>
                <h1>City Name :- {fields.name}</h1>
            </div>

            <div className='md:flex md:justify-between md:mx-60 text-2xl mt-8 md:mt-16'>
                <p className='border border-black px-8 py-5 rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300'>Country :- {fields.cou_name_en}</p>
                <p className='border border-black px-8 py-5 mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300 '>Timezone :- {fields.timezone}</p>
            </div>

            <div className='md:flex md:justify-between md:mt-16 mt-8 md:mx-60 text-2xl'>
                <p className='border border-black px-6 py-4 text-xl rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300'>modification_date :- {fields.modification_date}</p>
                <p className='border border-black px-8 py-5 mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300'>geoname_id :- {fields.geoname_id}</p>
            </div>

            <div className='md:flex md:justify-between md:mt-16 mt-8 md:mx-60 text-2xl'>
                <p className='border border-black px-8 py-5 rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300 '>country_code :- {fields.country_code}</p>
                <p className='border border-black px-8 py-5  mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-sm shadow-black hover:scale-110 duration-300'>population :- {fields.population}</p>
            </div>



        </div>
    );
}

export default SingleData;


