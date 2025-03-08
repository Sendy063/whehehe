/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <h2 className="text-2xl font-bold mb-4">Sendy Setyawan</h2>
      <h2 className="text-2xl font-bold mb-4">Masih kuliah</h2>
      <div className="flex flex-col items-center mb-4">
        <img src="path/1.jpg" alt="Your Photo" className="w-32 h-32 rounded-full mb-4" />
        <p className="text-base md:text-lg text-center">Cita-cita saya kapal laut</p>
      </div>
    </section>
  );
}

export default About;
