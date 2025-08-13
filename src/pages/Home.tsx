import React from 'react';
import { Star, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      description: 'Experience the breathtaking sunsets and iconic white-washed buildings of this Greek island paradise.',
      image: 'https://as2.ftcdn.net/v2/jpg/00/50/81/95/1000_F_50819585_Ex4mMcIscWycR2w8tKHQQ2uq5N1ijR7o.jpg',
      price: '$1,299',
      duration: '7 days'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      description: 'Discover tropical beaches, ancient temples, and lush rice terraces in this Indonesian gem.',
      image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$899',
      duration: '10 days'
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      description: 'Explore the ancient Incan citadel nestled high in the Andes Mountains.',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$1,599',
      duration: '8 days'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: 'WanderLust made our dream vacation to Santorini absolutely perfect! Every detail was carefully planned.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Miguel Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      comment: 'The Bali trip exceeded all expectations. Professional service and unforgettable experiences!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Emma Chen',
      location: 'Sydney, Australia',
      rating: 5,
      comment: 'Machu Picchu was life-changing! WanderLust\'s guides were knowledgeable and friendly.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-travel-gold">Adventure</span>
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 animate-slide-up">
            Explore the world's most beautiful destinations with our expertly crafted travel experiences
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-travel-ocean hover:bg-travel-blue text-white hover:text-travel-ocean font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-slide-up"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-travel-gold rounded-full animate-float opacity-70"></div>
        <div className="absolute bottom-32 right-20 w-6 h-6 bg-travel-blue rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-travel-cream rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Destinations
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations that offer unforgettable experiences and breathtaking beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-travel-gold text-white px-3 py-1 rounded-full font-semibold">
                    {destination.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-travel-ocean mr-2" />
                    <h3 className="font-heading text-xl font-semibold text-gray-800">
                      {destination.name}
                    </h3>
                  </div>
                  
                  <p className="font-body text-gray-600 mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-travel-ocean">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-body text-sm font-medium">{destination.duration}</span>
                    </div>
                    <button className="bg-travel-blue hover:bg-travel-ocean text-travel-ocean hover:text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-travel-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Travelers Say
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers who trusted us with their dream vacations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-body font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="font-body text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-travel-gold fill-current" />
                  ))}
                </div>
                
                <p className="font-body text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-travel-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold font-heading mb-2">50+</div>
              <div className="font-body text-travel-blue">Destinations</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold font-heading mb-2">10K+</div>
              <div className="font-body text-travel-blue">Happy Travelers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold font-heading mb-2">15</div>
              <div className="font-body text-travel-blue">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold font-heading mb-2">99%</div>
              <div className="font-body text-travel-blue">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-travel-ocean p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="font-heading text-2xl font-bold">WanderLust</span>
              </div>
              <p className="font-body text-gray-300 mb-4">
                Your trusted travel companion for unforgettable adventures around the globe.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li><Link to="/about" className="text-gray-300 hover:text-travel-blue transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-travel-blue transition-colors">Contact</Link></li>
                <li><Link to="/policies" className="text-gray-300 hover:text-travel-blue transition-colors">Policies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 font-body text-gray-300">
                <p>📧 info@wanderlust.com</p>
                <p>📞 +11 (555) 123-4567</p>
                <p>📍 123 Travel St, world City</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center font-body text-gray-300">
            <p>&copy; 2025 WanderLust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;