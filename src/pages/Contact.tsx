import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+11 (555) 123-4567',
      subDetails: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@wanderlust.com',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Travel Street',
      subDetails: 'world City, AC 12345'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subDetails: '9:00 AM - 6:00 PM EST'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-blue to-travel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            Ready to start planning your next adventure? We're here to help make your travel dreams come true.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-travel-gold opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-travel-ocean opacity-30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="font-body text-green-700">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-ocean focus:border-transparent transition-all duration-300 font-body"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-ocean focus:border-transparent transition-all duration-300 font-body"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-travel-ocean focus:border-transparent transition-all duration-300 font-body resize-none"
                    placeholder="Tell us about your travel plans or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-travel-ocean hover:bg-travel-blue text-white hover:text-travel-ocean font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-body"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <p className="font-body text-gray-600 text-lg mb-8">
                  We're here to help with all your travel needs. Reach out through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-travel-blue to-travel-cream p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-full shadow-md">
                        <info.icon className="h-6 w-6 text-travel-ocean" />
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h3>
                        <p className="font-body font-medium text-gray-700">
                          {info.details}
                        </p>
                        <p className="font-body text-sm text-gray-600">
                          {info.subDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
                  Find Us Here
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.00601234567890!3d40.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjQiTiA3NMKwMDAnMjEuNyJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="WanderLust Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-xl text-gray-600">
              Quick answers to common questions about our travel services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer: "We recommend booking 2-3 months in advance for international trips and 4-6 weeks for domestic travel to get the best rates and availability."
              },
              {
                question: "Do you offer travel insurance?",
                answer: "Yes, we partner with leading insurance providers to offer comprehensive travel insurance options that cover medical emergencies, trip cancellations, and more."
              },
              {
                question: "Can you help with visa requirements?",
                answer: "Absolutely! Our team provides detailed visa guidance and can assist with the application process for your destination countries."
              },
              {
                question: "What happens if I need to cancel or modify my trip?",
                answer: "Our flexible booking policies allow for modifications and cancellations. Specific terms depend on your booking type and timing. We're here to help with any changes needed."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-body font-semibold text-lg text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;