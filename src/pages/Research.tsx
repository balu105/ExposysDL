import { motion } from "motion/react";
import { Lightbulb, Rocket, BarChart4, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const RESEARCH_AREAS = [
  {
    title: "Startup Solutions",
    icon: Rocket,
    items: ["Domain Hosting", "Ecommerce Development", "Mobile App Development", "Quality Analysis", "Digital Marketing", "Maintenance & Support"]
  },
  {
    title: "Consultancy Projects",
    icon: BarChart4,
    items: ["Data Science", "Blockchain Tech", "IoT Implementation", "Security Audits", "NLP Engines", "Image Processing"]
  },
  {
    title: "Research Frontiers",
    icon: Lightbulb,
    items: ["Energy Optimization", "Humanoid Robotics", "Behavioral Security", "Medical Monitoring", "Advanced ML Models"]
  }
];

export default function Research() {
  return (
    <div className="space-y-16 sm:space-y-32 pb-20 sm:pb-32">
      <section className="bg-white border-b border-gray-100 pt-16 sm:pt-24 pb-32 sm:pb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-5 -skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Research & Development</h2>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-950 mb-8 leading-tight">
              Pushing the <span className="text-blue-600 underline decoration-blue-500/20 underline-offset-8">Boundaries</span> of Science
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-12">
              Our R&D labs focus on turning theoretical concepts into practical, industry-shaping solutions through rigorous testing and innovation.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-100 bg-white text-gray-600 text-[10px] sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">8+ Domains</div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-100 bg-white text-gray-600 text-[10px] sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">200+ Researchers</div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-100 bg-white text-gray-600 text-[10px] sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">Bangalore HQ</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {RESEARCH_AREAS.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-gray-100"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
                <area.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-950 mb-6 sm:mb-8">{area.title}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {area.items.map(item => (
                  <li key={item} className="flex items-center text-xs sm:text-sm font-medium text-gray-600 group cursor-default">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-950 mb-6 tracking-tight">Our Innovation Hub</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Located in Yelahanka, our hub is equipped with high-performance computing labs, robotics testing zones, and energy research stations. We welcome researchers from all backgrounds.
              </p>
              <div className="space-y-6">
                 {[
                   { title: "Eligibility", desc: "B.Tech, M.Tech, PhD, BCA, MCA, MBA" },
                   { title: "Key Focus", desc: "Sustainable Energy & Human-Centric AI" },
                   { title: "Network", desc: "Collaborations with Top Tier Indian Universities" }
                 ].map(item => (
                   <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-1">
                         <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                         <h4 className="font-bold text-gray-950">{item.title}</h4>
                         <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-2 -z-10 opacity-10" />
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1024"
                alt="Innovation Hub"
                className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-blue-600 p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to pioneer with us?</h3>
            <p className="text-blue-50 mb-10 max-w-2xl mx-auto text-lg">
               Whether you're a startup looking for solutions or a researcher seeking consultancy, our doors are open.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-sm tracking-wide hover:shadow-2xl transition-all inline-flex items-center"
            >
               Connect for Consultancy <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
         </div>
      </section>
    </div>
  );
}
