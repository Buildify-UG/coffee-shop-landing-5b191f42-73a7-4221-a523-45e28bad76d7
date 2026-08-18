import { Coffee, Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function CoffeeShop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">Brew Haven</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="text-amber-900 hover:text-amber-700 transition">Menu</a>
            <a href="#hours" className="text-amber-900 hover:text-amber-700 transition">Hours</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495474472645-4c71bcdd2e18?w=1920&h=800&fit=crop"
          alt="Coffee shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Brew Haven</h2>
            <p className="text-xl">Artisan Coffee Crafted with Passion</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Beverages */}
          <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Beverages</h3>
            <div className="space-y-4">
              {[
                { name: 'Espresso', price: '$3.50' },
                { name: 'Americano', price: '$4.00' },
                { name: 'Cappuccino', price: '$5.50' },
                { name: 'Latte', price: '$5.50' },
                { name: 'Macchiato', price: '$4.50' },
                { name: 'Cortado', price: '$4.00' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-2 border-b border-amber-100">
                  <span className="text-amber-900">{item.name}</span>
                  <span className="font-semibold text-amber-700">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries & Food */}
          <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Pastries & Food</h3>
            <div className="space-y-4">
              {[
                { name: 'Croissant', price: '$4.50' },
                { name: 'Blueberry Muffin', price: '$5.00' },
                { name: 'Chocolate Cake', price: '$6.00' },
                { name: 'Avocado Toast', price: '$8.50' },
                { name: 'Breakfast Sandwich', price: '$9.00' },
                { name: 'Granola Bowl', price: '$7.50' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-2 border-b border-amber-100">
                  <span className="text-amber-900">{item.name}</span>
                  <span className="font-semibold text-amber-700">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="bg-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Hours of Operation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-amber-800/50 rounded-lg p-6 border border-amber-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Weekdays
              </h3>
              <p className="text-amber-100">Monday - Friday</p>
              <p className="text-2xl font-semibold mt-2">6:00 AM - 8:00 PM</p>
            </div>

            <div className="bg-amber-800/50 rounded-lg p-6 border border-amber-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" /> Weekends
              </h3>
              <p className="text-amber-100">Saturday - Sunday</p>
              <p className="text-2xl font-semibold mt-2">7:00 AM - 9:00 PM</p>
            </div>
          </div>

          <p className="text-center text-amber-100 mt-8 text-sm">Closed on major holidays</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-amber-700" />
              <h3 className="text-xl font-bold text-amber-900">Location</h3>
            </div>
            <p className="text-amber-800">
              123 Coffee Street<br />
              Portland, OR 97214<br />
              <span className="text-sm text-amber-700">Downtown District</span>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-amber-700" />
              <h3 className="text-xl font-bold text-amber-900">Phone</h3>
            </div>
            <p className="text-amber-800">
              <a href="tel:+15035551234" className="hover:text-amber-700 transition">
                (503) 555-1234
              </a>
              <br />
              <span className="text-sm text-amber-700">Call for catering inquiries</span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-8 border border-amber-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-amber-700" />
              <h3 className="text-xl font-bold text-amber-900">Email</h3>
            </div>
            <p className="text-amber-800">
              <a href="mailto:hello@brewhaven.com" className="hover:text-amber-700 transition">
                hello@brewhaven.com
              </a>
              <br />
              <span className="text-sm text-amber-700">Response within 24 hours</span>
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-8 border border-amber-200 h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-2" />
            <p className="text-amber-900 font-semibold">123 Coffee Street, Portland, OR</p>
            <p className="text-amber-700 text-sm mt-1">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="w-4 h-4" />
            © 2024 Brew Haven. All rights reserved.
          </p>
          <p className="text-amber-100 text-sm">
            Brewing excellence since 2015 • Locally sourced • Ethically traded
          </p>
        </div>
      </footer>
    </div>
  );
}
