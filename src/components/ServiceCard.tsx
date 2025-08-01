
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  slug: string;
}

const ServiceCard = ({ title, description, price, image, slug }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-salon-gold text-salon-dark px-3 py-1 rounded-full font-medium">
            {price}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/services/${slug}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
        >
          <span className="border-b border-transparent group-hover:border-primary/80 transition-colors">Learn more</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
