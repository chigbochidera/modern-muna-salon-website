
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Discover Your</span>
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Premier beauty salon in Anambra offering exceptional hair styling, manicures, 
              pedicures, and beauty treatments in a luxurious setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <div className="flex items-center">
                <Scissors size={20} className="text-primary mr-2" />
                <span>Premium Service</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                <span>Expert Stylists</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-salon-gold/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Muna Style Me Salon"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-24 bg-gradient-to-b from-transparent to-background absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default Hero;
