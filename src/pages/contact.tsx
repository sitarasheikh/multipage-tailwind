import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600">Get in touch with us for inquiries or support.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="name">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="email">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="message">Message</label>
              <textarea id="message" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" rows={4}></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-fuchsia-950 font-semibold py-2 rounded-md hover:bg-yellow-600">Send Message</button>
           
          </form>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">Feel free to reach out via any of the following channels:</p>
            <ul className="text-gray-600 space-y-2">
              <li>Email: info@company.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
