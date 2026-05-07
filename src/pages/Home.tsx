import { motion } from "motion/react";
import { ArrowRight, Bot, Shield, Globe, Cpu, Zap, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const SOLUTIONS = [
  {
    title: "Energy",
    description: "Creating BRICK energy systems combining solar and wind to save costs in coming years.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Humanoid",
    description: "A 5ft robot that handles domestic work, from grocery ordering to teaching children.",
    icon: Bot,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Defense",
    description: "Advanced drone surveillance devices with modern monitoring and defense capabilities.",
    icon: Shield,
    color: "bg-slate-50 text-slate-600",
  },
  {
    title: "Blockchain",
    description: "Building secure record management systems using distributed ledger technologies.",
    icon: Globe,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Medical",
    description: "Cutting-edge healthcare monitoring technologies for remote and local clinics.",
    icon: Cpu,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "AI Projects",
    description: "Automation, predictive analysis, and intelligent systems for modern enterprises.",
    icon: Brain,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "ML Projects",
    description: "Fraud detection, recommendation engines, and high-performance smart analytics.",
    icon: Database,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "E-Security",
    description: "Behavior Pattern Security Socket for intelligent and adaptive authentication.",
    icon: Shield,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-20 sm:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                Imagination Behind Technology™
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-950 mb-6 leading-[1.1]"
            >
              Building the Future with <span className="text-blue-600">Advanced Research</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto px-4"
            >
              Specializing in AI, Robotics, Blockchain, and Energy Solutions to solve real-world challenges through innovation and data science.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-sm tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/internship"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-950 border border-gray-200 rounded-full font-bold text-sm tracking-wide hover:bg-gray-50 transition-all"
              >
                Internship Openings
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Our Solutions</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-950">
              Innovative products for a smarter world
            </h3>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            From humanoid robots to advanced defense surveillance, we are crafting technology that transforms how we live and work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300", item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-950 mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20 sm:py-32 overflow-hidden relative border-y border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-[0.03] skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Research & Impact</h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-gray-950 mb-8 leading-tight">
                Driving innovation from Yelahanka to the world
              </h3>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
                Based in Bengaluru, the Silicon Valley of India, Exposys Data Labs aims to solve real-world business problems through cutting-edge research and automation.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gray-950 mb-1">500+</div>
                  <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide font-semibold">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gray-950 mb-1">200+</div>
                  <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide font-semibold">Collaborations</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1024"
                alt="Research Excellence"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hidden md:block border border-gray-100 max-w-[280px]">
                <p className="text-gray-900 font-medium leading-relaxed italic text-sm">
                  "Exposys Data Labs aims to tap and train the best brainpower to solve real-world challenges."
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase">Y</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tight">Y Vishnuvardhan</div>
                    <div className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-blue-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
            Ready to shape the future together?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold text-sm tracking-wide hover:shadow-xl transition-all"
            >
              Get in touch
            </Link>
            <Link
              to="/careers"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-700 text-white rounded-full font-bold text-sm tracking-wide hover:bg-blue-800 border border-blue-500 transition-all"
            >
              View Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
