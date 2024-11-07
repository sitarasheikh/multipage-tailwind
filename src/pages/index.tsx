import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import React from 'react';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[500px] text-center text-white flex flex-col justify-center" style={{ backgroundImage: "url('/images/hero-travel.jpeg')" }}>
          <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold mb-4">Explore the World with Us</h1>
            <p className="text-xl mb-6">Find your next adventure at breathtaking destinations.</p>
            <button className="bg-yellow-500 text-fuchsia-950 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-yellow-600 transition">
              Start Your Journey
            </button>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/paris.jpeg" alt="Paris" width={500}  height={300} 
              className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 font-semibold">Paris</div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image  src="/images/maldives.jpeg" alt="Maldives" width={500}  height={300} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 font-semibold">Maldives</div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image  src="/images/tokyo.jpeg" alt="Tokyo" width={500}  height={300} 
              className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 font-semibold">Tokyo</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-yellow-500 text-blue-900 py-16 text-center">
          <h3 className="text-3xl font-bold">Ready to Travel?</h3>
          <p className="mt-4">Join thousands of travelers around the world.</p>
          <button className="mt-6 bg-fuchsia-900 text-white px-8 py-3 font-semibold rounded-lg shadow-md hover:bg-fuchsia-950 transition">
            Book Now
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
