
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to schedule an appointment? Reach out to us through any of the methods below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
                <Map />
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <p>123 Beauty Avenue, Anambra, Nigeria</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <p><a href="tel:+2348001234567" className="hover:underline">+234 800 123 4567</a></p>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <p><a href="mailto:info@munastyleme.com" className="hover:underline">info@munastyleme.com</a></p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" asChild>
                    <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2" size={18} />
                      Chat with Us on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
