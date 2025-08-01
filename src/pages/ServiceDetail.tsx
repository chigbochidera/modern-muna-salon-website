
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarIcon } from 'lucide-react';

// Import the services data
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the service with the matching slug
  const service = services.find(service => service.slug === slug);
  
  // If the service doesn't exist, redirect to the services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/services"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-salon-gold text-salon-dark px-4 py-2 rounded-full font-semibold text-lg">
                  {service.price}
                </div>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{service.title}</h1>
              
              <p className="text-muted-foreground text-lg mb-6">
                {service.description}
              </p>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>At Muna Style Me, we pride ourselves on delivering exceptional {service.title.toLowerCase()} services tailored to your unique style and preferences.</p>
                <p>Our professional stylists use only premium products and the latest techniques to ensure you leave our salon looking and feeling your absolute best.</p>
                <p>Whether you're preparing for a special occasion or simply treating yourself to some well-deserved pampering, our {service.title.toLowerCase()} service is designed to exceed your expectations.</p>
              </div>
              
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/booking" className="inline-flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Book this service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
