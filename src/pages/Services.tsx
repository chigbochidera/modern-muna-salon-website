
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive range of beauty services designed to enhance your natural beauty and provide a luxurious experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  image={service.image}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
