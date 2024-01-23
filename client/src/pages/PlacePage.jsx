import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingWidget from '../BookingWidget';
import PlaceGallery from '../PlaceGallery';
import AddressLink from '../AddressLink';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return 'Nope';

  return (
    <div className='mt-4 bg-gray-100 -mx-8 px-8 py-8'>
      <h1 className='text-2xl'>{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2'>
        <div className='bg-gray-300 rounded-l-xl p-4'>
          <div className='my-4'>
            <h2 className='font-semibold text-2xl'>Description</h2>
            {place.description}
          </div>
          <div className='flex justify-center pt-10 gap-6'>
            <div>
              <span className='font-semibold'>Check-in:</span> {place.checkIn}{' '}
            </div>
            <br />
            <div>
              <span className='font-semibold'>Check-out:</span> {place.checkOut}{' '}
            </div>
            <br />
            <div>
              <span className='font-semibold'>Max number of guests:</span>{' '}
              {place.maxGuests}
            </div>
            <br />
            <div>
              <span className='font-semibold'>Price: </span>${place.price} per
              night
            </div>
          </div>
          <div className='mt-4 text-gray-500'>
            <h2 className='font-semibold text-2xl'>Extra info</h2>
            {place.extraInfo}
          </div>
        </div>
        <BookingWidget place={place} />
      </div>
    </div>
  );
};

export default PlacePage;
