import React from 'react';
import {categories,segments,trendingProducts,features,processSteps} from './data.ts'
import { Search, ShoppingCart, User, ChevronLeft, ChevronRight, Package, Shield, Check, Palette } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif">𝓚</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Living</a>
              <a href="#" className="hover:text-gray-300">Storage</a>
              <a href="#" className="hover:text-gray-300">Dining</a>
              <a href="#" className="hover:text-gray-300">Bedroom</a>
               <a href="#" className="hover:text-gray-300">matress</a>
              <a href="#" className="hover:text-gray-300">Study</a>
               <a href="#" className="hover:text-gray-300">Office</a>
              <a href="#" className="hover:text-gray-300">Outdoor</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
              <User className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          alt="Hero"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Create Comfort</h1>
            <p className="text-xl mb-6">Make your home look elegant</p>
            <button className="bg-black text-white px-8 py-3 rounded">
              Find more
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Product Categories</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="grid grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center cursor-pointer hover:shadow-lg transition">
                  <img src={category.icon} alt={category.name} className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-sm">{category.name}</p>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Segments</h2>
          <div className="grid grid-cols-3 gap-6">
            {segments.map((segment, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group">
                <img src={segment.image} alt={segment.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{segment.title}</h3>
                    <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Trending products</h2>
            <div className="flex space-x-2">
              <button className="p-2 bg-white rounded-full shadow">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-full shadow">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Designing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Interior Designing</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer unique and creative interior design solutions that will transform your space into a stunning and functional environment.
          </p>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
              alt="Interior Design"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-3 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Us Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="font-bold mb-2">Step {index + 1}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Viber Stands Out */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Viber Stands Out?</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <Package className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">500+ Collections</h3>
              <p className="text-gray-600">Wide range of premium furniture</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock support</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Check className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Top-notch Quality</h3>
              <p className="text-gray-600">Premium materials and finish</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Palette className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Custom Designs</h3>
              <p className="text-gray-600">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Discover premium furniture and design solutions for your home.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Shop</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@viber.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Furniture St</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 px-4 py-2 rounded-l"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">© 2024 Viber. All rights reserved.</p>
              <div className="flex space-x-4">
                <img src="/visa.png" alt="Visa" className="h-8" />
                <img src="/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="/paypal.png" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}