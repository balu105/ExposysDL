import { motion } from "motion/react";
import { Linkedin, Mail, Twitter } from "lucide-react";

const TEAM = [
  {
    name: "Y Vishnuvardhan",
    role: "Founder & CEO",
    bio: "Visionary leader focused on automation and research-driven technology solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Srinivas C Reddy",
    role: "Co-Founder",
    bio: "Expert in operations and scaling technology projects across multiple domains.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Team() {
  return (
    <div className="space-y-32 pb-32">
      <section className="bg-gray-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Executive Board</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6">
            Meet the <span className="text-blue-600">Visionaries</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our leadership team is dedicated to pushing the boundaries of what's possible in AI and Robotics.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-10 overflow-hidden rounded-[2.5rem]">
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 flex space-x-3 z-20 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-gray-950 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
