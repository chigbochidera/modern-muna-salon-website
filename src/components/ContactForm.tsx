
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block font-medium">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          required
        />
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
