import { useState } from 'react';
import Image from './Image';

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className='absolute left-0 right-0 ml-auto mr-auto bg-white min-w-full min-h-screen'>
        <div className='p-8 grid justify-center gap-2 left-0 right-0 ml-auto mr-auto max-w-6xl'>
          <h2 className='text-3xl'>Photos of {place.title}</h2>
          <button
            onClick={() => setShowAllPhotos(false)}
            className='fixed shadow-md flex gap-1 items-center w-fit px-4 py-2 rounded-2xl right-12'
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
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
            <span>Close photos</span>
          </button>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className='pt-2 p-4'>
                <Image src={photo} alt='' />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className='relative rounded-3xl'>
      <div className='grid gap-2 grid-cols-[2fr_1fr]'>
        <div>
          {place.photos?.[0] && (
            <Image
              onClick={() => setShowAllPhotos(true)}
              className='aspect-square object-cover cursor-pointer'
              src={place.photos[0]}
              alt=''
            />
          )}
        </div>
        <div>
          <div className='grid gap-2'>
            {place.photos?.[1] && (
              <Image
                onClick={() => setShowAllPhotos(true)}
                className='aspect-square object-cover cursor-pointer'
                src={place.photos[1]}
                alt=''
              />
            )}
            <div className='overflow-hidden'>
              {place.photos?.[2] && (
                <Image
                  onClick={() => setShowAllPhotos(true)}
                  className='aspect-square object-cover relative bottom-2 cursor-pointer'
                  src={place.photos[2]}
                  alt=''
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className='flex gap-1 items-center absolute bottom-4 right-2 p-2 bg-white rounded-2xl shadow-md shadow-gray-500'
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
              d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
            />
          </svg>
          <span>Show more photos</span>
        </button>
      </div>
    </div>
  );
};

export default PlaceGallery;
