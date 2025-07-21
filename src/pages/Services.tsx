import React from 'react';
import { Package, Wrench, Shield, Truck, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Marine Provisions",
      description: "Fresh provisions, dry goods, and specialized dietary requirements for crew comfort and nutrition.",
      features: ["Fresh fruits & vegetables", "Halal & Kosher options", "Frozen & refrigerated goods", "Beverages & snacks"]
    },
    {
      icon: Wrench,
      title: "Technical Supplies",
      description: "Comprehensive range of technical equipment, spare parts, and tools for vessel maintenance.",
      features: ["Engine spare parts", "Navigation equipment", "Safety instruments", "Maintenance tools"]
    },
    {
      icon: Shield,
      title: "Safety Equipment",
      description: "Life-saving appliances and safety gear meeting international maritime safety standards.",
      features: ["Life jackets & rafts", "Fire safety equipment", "Emergency supplies", "Personal protective equipment"]
    },
    {
      icon: Truck,
      title: "Deck & Engine Stores",
      description: "Essential stores for deck and engine room operations, from lubricants to cleaning supplies.",
      features: ["Marine lubricants", "Cleaning supplies", "Rope & cables", "Paint & coatings"]
    }
  ];

  const additionalServices = [
    "24/7 Emergency Supply",
    "Custom Procurement",
    "Inventory Management",
    "Port Clearance Assistance",
    "Logistics Coordination",
    "Quality Certification"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ship chandling solutions tailored to meet the unique needs of every vessel. 
              From provisions to technical supplies, we deliver excellence at every port.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg shadow-sky-500/10 overflow-hidden hover:shadow-xl hover:shadow-sky-500/20 hover:bg-white/20 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-800">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Complete support for all your maritime operational needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and reliable service delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Request Quote", description: "Submit your requirements through our online portal or contact our team directly." },
              { step: "02", title: "Confirmation", description: "Receive detailed quote and delivery schedule within 2 hours of your request." },
              { step: "03", title: "Procurement", description: "Our team sources and quality-checks all items according to your specifications." },
              { step: "04", title: "Delivery", description: "On-time delivery to your vessel with all necessary documentation and certifications." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-sky-200 mr-3" />
            <span className="text-xl text-sky-100">Available 24/7</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Supplies? We're Here to Help
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and experience our exceptional service firsthand.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-900/20"
          >
            Get Your Quote Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;