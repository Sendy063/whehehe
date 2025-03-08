import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-2xl font-bold mb-2 text-center">Contact</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Name:</label>
          <input type="text" id="name" name="name" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block">Message:</label>
          <textarea id="message" name="message" className="border rounded p-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">Kirim</button>
      </form>
    </section>
  );
}

export default Contact;
