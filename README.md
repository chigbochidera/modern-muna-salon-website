# Muna Style Me Salon - Beauty & Wellness Website

A modern, responsive website for **Muna Style Me Salon**, a premier beauty salon located in Anambra, Nigeria. This project showcases the salon's services, allows customers to book appointments, and provides an elegant online presence.

## 🌟 About the Project

**Muna Style Me Salon** is a luxury beauty establishment offering a comprehensive range of beauty and wellness services. This website serves as the digital front door to the salon, providing customers with easy access to service information, booking capabilities, and salon details.

### Key Features

- **Modern, Responsive Design** - Optimized for all devices
- **Service Showcase** - Detailed information about all salon services
- **Online Booking System** - Easy appointment scheduling
- **Contact Information** - Multiple ways to reach the salon
- **Testimonials** - Customer reviews and feedback
- **Dark/Light Theme** - User preference support

## 🎨 Services Offered

The salon provides a wide range of beauty services including:

- **Hair Services**
  - Professional hair styling and cutting
  - Hair coloring and treatments
  - Hair extensions
- **Nail Services**
  - Manicures and pedicures
  - Nail art and designs
- **Beauty Treatments**
  - Facial treatments
  - Professional makeup services
- **Special Packages**
  - Bridal packages
  - Special occasion styling

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-muna-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section component
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...             # Other components
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Services.tsx    # Services listing
│   ├── ServiceDetail.tsx # Individual service page
│   ├── Booking.tsx     # Booking form
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── data/               # Static data
│   └── services.ts     # Service information
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### Pages
- **Home** - Hero section, service highlights, testimonials
- **Services** - Complete service catalog with pricing
- **Service Detail** - Individual service information
- **Booking** - Appointment booking form
- **Contact** - Contact information and form

### Features
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components
- **Performance** - Optimized loading and rendering
- **SEO Ready** - Meta tags and structured data

## 🎨 Design System

The project uses a comprehensive design system built with:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent component design
- **Custom color palette** reflecting the salon's brand
- **Typography** optimized for readability
- **Spacing system** for consistent layouts

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🌙 Theme Support

- **Light Mode** - Clean, bright interface
- **Dark Mode** - Elegant dark theme
- **System Preference** - Automatic theme detection
- **Manual Toggle** - User-controlled theme switching

## 🔧 Customization

### Adding New Services
Edit `src/data/services.ts` to add or modify salon services:

```typescript
export const services = [
  {
    id: 9,
    title: 'New Service',
    description: 'Service description',
    price: 'From ₦X,XXX',
    image: 'image-url',
    slug: 'new-service'
  }
];
```

### Styling Customization
- Modify `tailwind.config.ts` for theme customization
- Update component styles in individual component files
- Customize color palette in CSS variables

## 📞 Contact Information

**Muna Style Me Salon**
- **Location**: Anambra, Nigeria
- **Services**: Hair styling, coloring, extensions, manicures, pedicures, facials, makeup, bridal packages
- **Pricing**: Starting from ₦3,500 for basic services

## 🤝 Contributing

This is a private project for Muna Style Me Salon. For any suggestions or improvements, please contact the salon directly.

## 📄 License

This project is proprietary and created specifically for Muna Style Me Salon.

## 🙏 Acknowledgments

- **Chidera Chigbo** - Project owner and salon proprietor
- **shadcn/ui** - Beautiful component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing frontend framework

---

**Built with ❤️ for Muna Style Me Salon**
