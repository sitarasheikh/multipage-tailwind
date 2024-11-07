import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-fuchsia-950 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">Travel Explorer</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300 transition">About Us</Link></li>
          
          <li><Link href="/contact" className="hover:text-yellow-300 transition">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
