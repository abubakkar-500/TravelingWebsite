import React from 'react';
import image01 from '../public/image01.png';
import image02 from '../public/image02.png';
import image03 from '../public/image03.png';
import pak from '../public/pak 03.jpg';

import { Users, Target, Heart, Award, MapPin, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alexandra Rivers',
      role: 'Founder & CEO',
      bio: 'Travel enthusiast with 15+ years of experience in creating unforgettable journeys around the world.',
      image: image01,
      specialties: ['Adventure Travel', 'Cultural Tours']
    },
    {
      id: 2,
      name: 'Marcus Thompson',
      role: 'Travel Director',
      bio: 'Expert in luxury travel and destination management, dedicated to crafting personalized experiences.',
      image: image02,
      specialties: ['Luxury Travel', 'Group Tours']
    },
    {
      id: 3,
      name: 'Sophia Chen',
      role: 'Experience Designer',
      bio: 'Creative mind behind our unique itineraries, passionate about sustainable and authentic travel.',
      image: image03,
      specialties: ['Eco Tourism', 'Photography Tours']
    }
  ];

  const achievements = [
    { icon: Award, title: 'Best Travel Agency 2023', subtitle: 'Global Travel Awards' },
    { icon: Users, title: '10,000+ Happy Travelers', subtitle: 'Satisfied Customers' },
    { icon: Globe, title: '50+ Destinations', subtitle: 'Worldwide Coverage' },
    { icon: Heart, title: '99% Satisfaction Rate', subtitle: 'Customer Reviews' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-blue to-travel-ocean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              About WanderLust
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
              We are passionate travel experts dedicated to creating extraordinary experiences that inspire, educate, and transform lives through the power of travel.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-travel-gold opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-travel-cream opacity-30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 font-body text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2009, WanderLust was born from a simple belief: travel has the power to change lives, broaden perspectives, and create lasting memories that define who we are.
                </p>
                <p>
                  What started as a small travel blog has evolved into a comprehensive travel company serving thousands of adventurers worldwide. We specialize in creating authentic, immersive experiences that go beyond typical tourist attractions.
                </p>
                <p>
                  Our team of travel experts, local guides, and destination specialists work tirelessly to craft personalized journeys that match your dreams and exceed your expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={pak}
                alt="Travel planning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-travel-gold p-4 rounded-2xl shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-travel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-travel-ocean p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To inspire and facilitate transformative travel experiences that connect people with diverse cultures, natural wonders, and themselves. We believe travel is not just about destinations, but about the journey of personal growth and global understanding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-travel-gold p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                To become the world's most trusted travel companion, known for creating authentic, sustainable, and life-enriching travel experiences that foster global citizenship and environmental responsibility for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate travel experts dedicated to making your dream journey a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-travel-ocean font-semibold mb-3">{member.role}</p>
                  <p className="font-body text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-travel-blue text-travel-ocean px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="font-body text-xl text-gray-600">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-travel-ocean p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="font-body text-gray-600">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-travel-ocean to-travel-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="font-body text-xl text-travel-blue mb-8">
            Let our experienced team help you create the perfect travel experience
          </p>
          <a
            href="/contact"
            className="inline-block bg-travel-gold hover:bg-travel-cream text-white hover:text-gray-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Plan Your Trip Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;