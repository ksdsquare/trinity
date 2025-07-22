import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    vesselName: '',
    port: '',
    eta: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 2 hours!');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to get started? Our maritime experts are standing by 24/7 to assist with your vessel supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568 (Emergency)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@trinity-shipping.com</p>
                    <p className="text-gray-600">quotes@trinity-shipping.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Panniyur<br />Chennai<br />United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                    <p className="text-gray-600">Office: Mon-Fri 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-sky-500/10">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-700">
                  All inquiries are responded to within 2 hours during business hours, 
                  and within 4 hours for emergency requests outside normal business hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl shadow-sky-500/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="Shipping Company Ltd."
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vesselName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vessel Name
                    </label>
                    <input
                      type="text"
                      id="vesselName"
                      name="vesselName"
                      value={formData.vesselName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="MV Ocean Explorer"
                    />
                  </div>

                  <div>
                    <label htmlFor="port" className="block text-sm font-medium text-gray-700 mb-2">
                      Port of Call
                    </label>
                    <input
                      type="text"
                      id="port"
                      name="port"
                      value={formData.port}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800 placeholder-gray-600"
                      placeholder="Port of Los Angeles"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eta" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Time of Arrival
                  </label>
                  <input
                    type="datetime-local"
                    id="eta"
                    name="eta"
                    value={formData.eta}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements & Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-none text-gray-800 placeholder-gray-600"
                    placeholder="Please describe your supply requirements, quantities needed, and any special instructions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-sky-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Request</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll respond to your inquiry within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Emergency Supplies Needed?</h2>
          <p className="text-xl text-red-100 mb-8">
            For urgent supply requests outside business hours, call our emergency hotline.
          </p>
          <a
            href="tel:+15551234568"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 shadow-lg shadow-red-900/20"
          >
            <Phone className="h-6 w-6 mr-2" />
            Emergency Hotline: +1 (555) 123-4568
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;