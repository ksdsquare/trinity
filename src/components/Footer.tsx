import React from 'react';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-sky-400" />
              <span className="font-bold text-xl">Trinity Shipping</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted maritime supply partner, providing comprehensive ship chandling services worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Marine Provisions</li>
              <li>Technical Supplies</li>
              <li>Deck & Engine Stores</li>
              <li>Safety Equipment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-300">info@bluewavemarine.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Port District, Maritime Plaza<br />Harbor City, HC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Trinity Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;