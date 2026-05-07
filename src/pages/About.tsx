import { motion } from "motion/react";
import { Building2, Target, Users, MapPin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-16 sm:space-y-32 pb-20 sm:pb-32">
      {/* Header */}
      <section className="bg-white pt-16 sm:pt-24 pb-20 sm:pb-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">About Exposys Data Labs</h2>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-8 leading-tight">
                Solving Global Problems through <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Pure Innovation</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Exposys Data Labs aims to solve real-world business problems through Automation, Big Data, Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <span className="text-sm font-bold text-gray-900">Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Building2 className="w-5 h-5" />
                   </div>
                   <span className="text-sm font-bold text-gray-900">Est. 2018</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-blue-600 rounded-[2rem] sm:rounded-[3rem] rotate-2 sm:rotate-3 -z-10 opacity-5" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1024"
                alt="Our Office"
                className="w-full h-[250px] sm:h-[500px] object-cover rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-gray-50 border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-8 shadow-sm">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-950 mb-6 tracking-tight">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To tap and train the best brainpower to solve real-world challenges through cutting-edge research, hands-on experience, and technological mastery in the fields of AI, Robotics, and Data Science.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-blue-600 text-white"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">Our Culture</h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              We foster a culture of perpetual learning and rapid prototyping. We believe that technology should be accessible, sustainable, and purely focused on human advancement and problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
         <h2 className="text-3xl font-display font-bold text-gray-950 mb-8 tracking-tight">Connect with our leadership</h2>
         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:hr@exposysdata.com" className="flex items-center space-x-2 text-blue-600 font-bold hover:underline">
               <Mail className="w-5 h-5" />
               <span>hr@exposysdata.com</span>
            </a>
            <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm tracking-wide hover:bg-blue-700 transition-all flex items-center shadow-lg shadow-blue-600/10">
              Send a Query <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
         </div>
      </section>
    </div>
  );
}
