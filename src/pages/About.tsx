import React from 'react';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Trinity Shipping
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over three decades, we've been the trusted partner for maritime professionals worldwide, 
              delivering exceptional ship chandling services with unwavering commitment to quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1992 by Captain James Morrison, Trinity Shipping began as a small family business 
                  serving local fishing fleets. With a deep understanding of maritime needs and an unwavering 
                  commitment to service excellence, we quickly gained the trust of vessel operators.
                </p>
                <p>
                  Today, we've grown into a global network serving commercial vessels, cruise ships, offshore 
                  platforms, and naval fleets across six continents. Our success is built on the same principles 
                  that guided us from day one: quality, reliability, and putting our customers first.
                </p>
                <p>
                  As the maritime industry evolves, so do we. We continuously invest in technology, sustainability 
                  initiatives, and our team to ensure we remain your most trusted maritime partner for decades to come.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-gray-800 shadow-lg shadow-sky-500/10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide comprehensive, reliable, and innovative ship chandling solutions that keep the 
                  world's maritime fleet operating safely and efficiently, while building lasting partnerships 
                  based on trust, quality, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Three decades of maritime excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, number: "30+", label: "Years of Experience" },
              { icon: Globe, number: "150+", label: "Ports Worldwide" },
              { icon: Users, number: "5000+", label: "Satisfied Customers" },
              { icon: Award, number: "99.8%", label: "On-time Delivery" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reliability",
                description: "We understand that your schedule is critical. Our commitment to on-time delivery and consistent quality has earned us the trust of maritime professionals worldwide."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methodologies to improve our services, streamline operations, and provide better value to our customers."
              },
              {
                title: "Sustainability",
                description: "We're committed to environmental stewardship, offering eco-friendly products and implementing sustainable practices across our operations."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;