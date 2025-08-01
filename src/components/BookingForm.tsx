
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const services = [
  { id: 'hair-styling', name: 'Hair Styling' },
  { id: 'hair-coloring', name: 'Hair Coloring' },
  { id: 'hair-extensions', name: 'Hair Extensions' },
  { id: 'manicure', name: 'Manicure' },
  { id: 'pedicure', name: 'Pedicure' },
  { id: 'facial', name: 'Facial Treatment' },
  { id: 'makeup', name: 'Makeup Service' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

const BookingForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to choose a date for your appointment.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: `Your appointment has been booked for ${format(date, 'PPP')} at ${formData.time}`,
      });
      setFormData({ name: '', email: '', phone: '', service: '', time: '', notes: '' });
      setDate(undefined);
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="service" className="block font-medium">
          Select Service
        </label>
        <Select 
          value={formData.service} 
          onValueChange={(value) => handleSelectChange('service', value)}
          required
        >
          <SelectTrigger id="service">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map(service => (
              <SelectItem key={service.id} value={service.id}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="date" className="block font-medium">
            Select Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="time" className="block font-medium">
            Select Time
          </label>
          <Select 
            value={formData.time} 
            onValueChange={(value) => handleSelectChange('time', value)}
            required
          >
            <SelectTrigger id="time">
              <SelectValue placeholder="Choose a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map(time => (
                <SelectItem key={time} value={time}>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="notes" className="block font-medium">
          Special Requests (Optional)
        </label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Any specific requests or notes for your appointment"
          rows={4}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Book Appointment'}
      </Button>
    </form>
  );
};

export default BookingForm;
