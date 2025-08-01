
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

// Get the first 3 services for the highlights section
const featuredServices = services.slice(0, 3);

const ServiceHighlights = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional beauty services designed to enhance your natural beauty and provide a luxurious experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
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
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
