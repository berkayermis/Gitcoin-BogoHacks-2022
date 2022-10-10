import React from 'react';
import Hero from '../components/hero';
import Testimonial from '../components/testimonial';

export default function App( ) {

  return (
    <>
      <Hero />
      <hr className='w-[70%] mx-auto border-neutral-900' />
      <Testimonial />
    </>
  );
}
