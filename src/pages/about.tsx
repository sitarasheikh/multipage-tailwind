import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600">We are a company that offers the best travel experiences.</p>
        
        {/* Our Mission */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To provide unforgettable travel experiences that enrich lives and broaden horizons.
          </p>
        </section>

        {/* Our Team */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <p className="text-gray-600 mt-2">
            Our team is made up of dedicated professionals who are passionate about travel.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">
            We provide customized travel plans, great customer service, and amazing destinations.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}