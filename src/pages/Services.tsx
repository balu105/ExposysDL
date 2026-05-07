import { motion } from "motion/react";
import { Code, Globe, Users, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const SERVICES = [
  {
    id: "software",
    title: "Software Development",
    description: "We know what it takes to design a product that will wow its future users. We help you assess, develop and test your product idea.",
    icon: Code,
    features: ["Fast Delivery", "High Security", "High Quality Standards", "Enterprise & Desktop Apps"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "web",
    title: "Web Application Development",
    description: "We help brands grow through digital transformation services and modern web application technologies.",
    icon: Globe,
    features: ["Ecommerce Platforms", "CMS Systems", "SaaS Platforms", "React & Cloud Apps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "outsource",
    title: "IT Outsource Services",
    description: "Cost-effective and reliable IT outsourcing services for startups and enterprises.",
    icon: Users,
    features: ["Dedicated Teams", "Full Stack Development", "Technical Support", "QA Testing"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "training",
    title: "Training & Development",
    description: "Industry-aligned training programs in Python, AI, ML, and Data Science.",
    icon: BookOpen,
    features: ["Python with ML/AI", "Data Science", "Web Development", "Chatbot Development"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <div className="space-y-16 sm:space-y-32 pb-20 sm:pb-32">
      {/* Header */}
      <section className="bg-gray-50 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Our Expertise</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6 max-w-4xl mx-auto">
            Future-Ready Solutions for <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">Intelligent Growth</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From strategic AI consulting to full-scale software engineering, we provide the technical mastery to transform your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-40">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              "flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}
          >
            <div className="flex-1 space-y-6 sm:space-y-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-950 tracking-tight">
                {service.title}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {service.features.map(feature => (
                  <div key={feature} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 font-bold tracking-wide hover:translate-x-2 transition-transform uppercase text-[10px] sm:text-xs"
                >
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gray-100 rounded-[1.5rem] sm:rounded-[2.5rem] -rotate-2 sm:-rotate-3 -z-10 opacity-60" />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
