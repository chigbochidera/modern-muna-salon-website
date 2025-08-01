
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, quote, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary flex items-center justify-center text-white text-lg font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < rating ? 'text-salon-gold fill-salon-gold' : 'text-muted-foreground'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
