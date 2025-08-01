
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Adanna Obi',
    quote: 'Muna Style Me offers exceptional service! My hair has never looked better, and the staff is incredibly talented and friendly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
  {
    id: 2,
    name: 'Chioma Eze',
    quote: 'I love my regular manicure and pedicure sessions here. The attention to detail and hygienic practices are top-notch!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ngozi Afolabi',
    quote: 'The salon environment is so relaxing and professional. I always feel like royalty when I visit!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
  {
    id: 4,
    name: 'Tunde Johnson',
    quote: 'The best salon in Anambra! My wife and I both get our hair done here, and we are always satisfied with the results.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experiences at Muna Style Me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
