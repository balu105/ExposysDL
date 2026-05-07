# Exposys Data Labs - Professional R&D Web Application

A modern, high-performance web application built for **Exposys Data Labs**, a leading research and development firm specializing in AI, Machine Learning, Data Science, and Automation.

## 🚀 Key Features

- **Interactive UI**: Polished interfaces built with Tailwind CSS and smooth animations powered by Framer Motion.
- **Dynamic Content**: Dedicated pages for Research, Internships, Workshops, and Professional Services.
- **Form Integration**: Functional "Contact Us" and "Workshop Registration" forms connected to Firebase Firestore.
- **Secure Payments**: Integrated portal for professional service payments via Instamojo.
- **Responsive Design**: Mobile-first architecture ensuring a seamless experience across all devices.
- **Map Integration**: Custom Google Maps embedding for campus and headquarters discovery.

## 🛠 Tech Stack

- **Frontend**: React 18+ (Vite)
- **Styling**: Tailwind CSS (Mobile-first, Utility-based)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend/Database**: Firebase Firestore
- **Type Safety**: TypeScript

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components (Layout, Navigation, Footer)
│   ├── pages/            # Application views (Home, About, Services, Research, etc.)
│   ├── lib/              # Utility functions and Firebase configuration
│   ├── App.tsx           # Main routing and application logic
│   └── index.css         # Global styles and Tailwind imports
├── public/               # Static assets
└── firestore.rules       # Security rules for database protection
```

## 🌐 Pages Overview

- **Home**: Hero section, core domains, and impact statistics.
- **About**: Company mission, vision, and core values.
- **Services**: Detailed breakdown of R&D consultancy and technical training.
- **Research**: Overview of scientific domains and lab focus areas.
- **Internships**: Career development opportunities for students and graduates.
- **Workshops**: Free educational sessions on AI and modern technologies.
- **Payment**: Secure gateway for project and training fees.
- **Contact**: Multi-channel reach-out form and headquarters mapping.

## 🔒 Security & Privacy

The application utilizes Firebase Security Rules to ensure that user data submitted via forms is protected. Payment transactions are handled through a PCI-DSS compliant secure gateway (Instamojo).

---

*This project was developed with a focus on professional aesthetics and technical excellence.*
