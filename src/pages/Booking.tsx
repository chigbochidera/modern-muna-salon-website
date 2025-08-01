
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
                <p className="text-muted-foreground">
                  Schedule your visit to Muna Style Me and let our experts enhance your beauty.
                </p>
              </div>
              
              <div className="bg-card shadow-lg rounded-lg p-6 md:p-8">
                <BookingForm />
              </div>
              
              <div className="mt-8 text-center text-muted-foreground">
                <p>Need help with booking? Call us at <a href="tel:+2348001234567" className="text-primary hover:underline">+234 800 123 4567</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
