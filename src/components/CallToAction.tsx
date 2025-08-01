
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607008829749-c0f284a49841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')] bg-cover bg-center"></div>
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
          
          <div className="relative py-10 md:py-14 px-6 md:px-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Transformation?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Book your appointment today and experience the luxury and expertise that Muna Style Me offers. Your journey to looking and feeling your best starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="font-medium shadow-md" asChild>
                <Link to="/booking">Book Appointment</Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-medium shadow-md"
                asChild
              >
                <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2" size={18} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
