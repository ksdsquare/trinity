import React from 'react';
import { ArrowRight, Ship, Anchor, Compass, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg className="w-full h-24 text-white/20 animate-pulse" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* Floating Ship Animation */}
        <div className="absolute top-1/4 right-10 animate-bounce opacity-30">
          <Ship className="h-16 w-16 text-white transform rotate-12" />
        </div>
        <div className="absolute top-1/3 left-10 animate-pulse opacity-20">
          <Anchor className="h-12 w-12 text-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted
              <span className="block text-sky-200">Maritime Partner</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed">
              Comprehensive ship chandling services worldwide. From provisions to technical supplies, 
              we keep your vessels sailing smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-900/20"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/20 hover:backdrop-blur-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trinity Shipping?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience in maritime logistics, Trinity Shipping delivers excellence in every aspect of ship chandling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Ship,
                title: "24/7 Availability",
                description: "Round-the-clock service to meet your urgent maritime needs, anywhere in the world."
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "All products meet international maritime standards with full certification and traceability."
              },
              {
                icon: Compass,
                title: "Global Network",
                description: "Extensive network covering major ports worldwide for seamless supply chain management."
              },
              {
                icon: Anchor,
                title: "Expert Team",
                description: "Experienced maritime professionals who understand the unique needs of vessel operations."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-sky-600 group-hover:text-sky-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Set Sail with Us?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Get in touch today for a personalized quote and experience the Trinity Shipping difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-900/20"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;