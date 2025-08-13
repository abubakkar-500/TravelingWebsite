import React from 'react';
import { Shield, FileText, Cookie, Eye, Lock, UserCheck } from 'lucide-react';

const Policies = () => {
  const policyCategories = [
    {
      icon: Shield,
      title: 'Privacy Policy',
      id: 'privacy',
      color: 'from-travel-blue to-travel-ocean'
    },
    {
      icon: FileText,
      title: 'Terms & Conditions',
      id: 'terms',
      color: 'from-travel-ocean to-travel-cream'
    },
    {
      icon: Cookie,
      title: 'Cookie Policy',
      id: 'cookies',
      color: 'from-travel-cream to-travel-gold'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-blue via-travel-cream to-travel-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Policies & Terms
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            Your trust and privacy are important to us. Here's how we protect your information and outline our service terms.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-gray-800 opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policyCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.id}`}
                className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">{category.title}</h3>
                    <p className="font-body opacity-90">Click to read more</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-travel-ocean p-3 rounded-full mr-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-gray-800">Privacy Policy</h2>
            </div>
            <p className="font-body text-gray-600 text-lg">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-travel-ocean mr-3" />
                  Information We Collect
                </h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, make a booking, subscribe to our newsletter, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Travel preferences and booking history</li>
                    <li>Payment information (processed securely through encrypted channels)</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-travel-ocean mr-3" />
                  How We Use Your Information
                </h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process bookings and manage your travel arrangements</li>
                    <li>Send you booking confirmations and important travel updates</li>
                    <li>Provide customer support and respond to your inquiries</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our website and services based on your feedback</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 text-travel-ocean mr-3" />
                  Information Sharing
                </h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With travel service providers (hotels, airlines) necessary to complete your booking</li>
                    <li>With payment processors to handle transactions securely</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-travel-cream p-6 rounded-xl">
                <h4 className="font-heading text-lg font-bold text-gray-800 mb-2">Data Security</h4>
                <p className="font-body text-gray-600">
                  We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-travel-gold p-3 rounded-full mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-gray-800">Terms & Conditions</h2>
            </div>
            <p className="font-body text-gray-600 text-lg">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Booking Terms</h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    By making a booking through WanderLust, you agree to the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All bookings are subject to availability and confirmation</li>
                    <li>Full payment is required at the time of booking unless otherwise specified</li>
                    <li>Prices are subject to change until booking is confirmed</li>
                    <li>You must provide accurate and complete information for all travelers</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Cancellation Policy</h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    Cancellation terms vary depending on the type of booking and timing:
                  </p>
                  <div className="bg-travel-blue p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>More than 30 days:</strong> Full refund minus processing fees</li>
                      <li><strong>15-30 days:</strong> 50% refund of tour costs</li>
                      <li><strong>Less than 15 days:</strong> No refund for tour costs</li>
                      <li><strong>Flight cancellations:</strong> Subject to airline policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Travel Insurance</h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    We strongly recommend purchasing comprehensive travel insurance to protect your investment:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Coverage for trip cancellation, interruption, and delays</li>
                    <li>Medical and emergency evacuation coverage</li>
                    <li>Baggage and personal effects protection</li>
                    <li>24/7 emergency assistance services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Liability</h3>
                <div className="font-body text-gray-600">
                  <p>
                    WanderLust acts as an agent for various travel service providers. Our liability is limited to the amount paid for our services. We are not responsible for delays, cancellations, or changes made by airlines, hotels, or other service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-travel-cream border-2 border-travel-gold p-3 rounded-full mr-4">
                <Cookie className="h-8 w-8 text-travel-gold" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-gray-800">Cookie Policy</h2>
            </div>
            <p className="font-body text-gray-600 text-lg">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">What Are Cookies?</h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience and allow certain features to function properly.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Types of Cookies We Use</h3>
                <div className="space-y-6">
                  <div className="bg-travel-blue p-4 rounded-lg">
                    <h4 className="font-body font-bold text-travel-ocean mb-2">Essential Cookies</h4>
                    <p className="font-body text-gray-700">
                      Required for the website to function properly. These include cookies that enable you to log into secure areas and use shopping cart features.
                    </p>
                  </div>

                  <div className="bg-travel-cream p-4 rounded-lg">
                    <h4 className="font-body font-bold text-travel-gold mb-2">Performance Cookies</h4>
                    <p className="font-body text-gray-700">
                      Help us understand how visitors interact with our website by collecting information anonymously. This helps us improve our website performance.
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-body font-bold text-gray-800 mb-2">Marketing Cookies</h4>
                    <p className="font-body text-gray-700">
                      Used to track visitors across websites to display relevant advertisements and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Managing Cookies</h3>
                <div className="font-body text-gray-600 space-y-4">
                  <p>
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the cookie consent banner on our website to accept or reject non-essential cookies</li>
                    <li>Change your browser settings to block or delete cookies</li>
                    <li>Use browser plugins or extensions to manage cookie preferences</li>
                    <li>Contact us directly to opt-out of specific cookie categories</li>
                  </ul>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                    <p className="font-body text-yellow-800">
                      <strong>Please note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-travel-ocean to-travel-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Questions About Our Policies?
          </h2>
          <p className="font-body text-xl text-travel-blue mb-8">
            If you have any questions about these policies, please don't hesitate to contact us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-travel-gold hover:bg-travel-cream text-white hover:text-gray-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Policies;