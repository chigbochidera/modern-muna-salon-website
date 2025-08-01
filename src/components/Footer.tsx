
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-display font-bold mb-3">
              Muna Style <span className="text-salon-gold">Me</span>
            </h3>
            <p className="mb-3 text-white/80 text-sm">
              Premier beauty salon in Anambra, Nigeria offering exceptional hair styling, 
              manicures, pedicures, and beauty treatments in a luxurious setting.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-salon-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-salon-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Book Appointment', path: '/booking' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-salon-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Hair Styling',
                'Manicure',
                'Pedicure',
                'Facial Treatments',
                'Makeup',
                'Hair Extensions'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-white/80 hover:text-salon-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-salon-gold" />
                <span className="text-white/80">123 Beauty Avenue, Anambra, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-salon-gold" />
                <span className="text-white/80">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-salon-gold" />
                <span className="text-white/80">info@munastyleme.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0 text-salon-gold" />
                <div className="text-white/80">
                  <p>Mon-Fri: 9am - 7pm</p>
                  <p>Sat: 10am - 6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-4 text-center text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} Muna Style Me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
