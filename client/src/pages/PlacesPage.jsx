import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PlacesFormPage from './PlacesFormPage';
import AccountNav from '../AccountNav';
import axios from 'axios';
import PlaceImg from '../PlaceImg';

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className='text-center'>
        <Link
          className='inline-flex gap-1 bg-primary text-white py-2 px-5 rounded-full'
          to={'/account/places/new'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v12m6-6H6'
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className='mt-4'>
        {places.length > 0 &&
          places.map((place) => (
            <Link
              key={place._id}
              to={'/account/places/' + place._id}
              className='flex items-center gap-4 cursor-pointer bg-gray-200 p-2 pl-4 pr-4 rounded-2xl'
            >
              <div className='flex w-32 h-32 bg-gray-300 shrink-0'>
                <PlaceImg place={place}/>
              </div>
              <div className='grow-0 shrink  p-2'>
                <h2 className='text-xl'>{place.title}</h2>
                <p className='text-sm mt-2'>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
