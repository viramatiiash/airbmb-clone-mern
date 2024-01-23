import { useContext, useEffect, useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => { 
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const bookThisPlace = async () => {
    const response = await axios.post('/bookings', {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price:
        differenceInCalendarDays(new Date(checkOut), new Date(checkIn)) *
        place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className='bg-gray-300 rounded-r-xl p-4'>
      <div className='bg-white rounded-xl p-6 text-center'>
        <div className='my-4 border p-2 rounded-2xl px-4 py-2'>
          <p className='text-left'>Check-in date:</p>
          <input
            type='date'
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className='my-4 border p-2 rounded-2xl px-4 py-2'>
          <p className='text-left'>Check-out date:</p>
          <input
            type='date'
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className='my-4 border p-2 rounded-2xl px-4 py-2'>
          <p className='text-left'>Number of guests:</p>
          <input
            type='number'
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
        {checkIn && checkOut && (
          <>
            <div className='my-4 border p-2 rounded-2xl px-4 py-2'>
              <p className='text-left'>Type your full name:</p>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Vira Matiiash'
              />
            </div>
            <div className='my-4 border p-2 rounded-2xl px-4 py-2'>
              <p className='text-left'>Type your phone number:</p>
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='+380123456789'
              />
            </div>
          </>
        )}
        <button onClick={bookThisPlace} className='secondary mt-2'>
          Book this place for{' '}
          {checkIn && checkOut && (
            <span>
              {differenceInCalendarDays(new Date(checkOut), new Date(checkIn)) *
                place.price}
              $
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
