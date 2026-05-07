import { motion } from "motion/react";
import { Briefcase, Clock, Globe, Award, CheckCircle2, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const BENEFITS = [
  { title: "Experience Certificate", icon: Award, desc: "Official proof of your professional contribution." },
  { title: "Flexible Timings", icon: Clock, desc: "4-Month duration that fits your schedule." },
  { title: "Work From Home", icon: Globe, desc: "100% remote work environment." },
  { title: "Training 20hrs", icon: CheckCircle2, desc: "Professional training in niche domains." },
  { title: "IIT/NIT Mentorship", icon: Users, desc: "Work directly with teams from premier institutes." },
  { title: "Industry Exposure", icon: Briefcase, desc: "Direct participation in commercial projects." },
  { title: "Offer Letter", icon: CheckCircle2, desc: "Official documentation of your role." }
];

export default function Freelancer() {
  return (
    <div className="bg-white min-h-screen text-gray-950 pb-32">
      {/* Hero */}
      <section className="bg-gray-50/50 pt-32 pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
          >
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase text-center">Freelance Professional Program</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-950 mb-8 tracking-tighter text-center">
            Experience. Explore. <span className="text-blue-600">Evolve.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-12 text-center text-center">
            Build your portfolio by working on real-world industry projects with elite engineering teams from IITs and NITs.
          </p>

          <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-blue-900/5 max-w-lg mx-auto mb-16 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Registration Fee</span>
            <div className="text-4xl font-display font-black text-gray-950">₹5,000/-</div>
            <p className="text-xs text-gray-400 mt-2 font-medium">Includes training, certificate, and lifetime network access.</p>
          </div>

          <div className="flex justify-center">
            <Link 
              to="/freelancer-form"
              className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg tracking-wide hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Why Join Us?</h2>
          <h3 className="text-3xl font-display font-bold text-gray-950">Benefits For Students</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all mx-auto lg:mx-0">
                <b.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-gray-950 mb-2 text-center lg:text-left">{b.title}</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed text-center lg:text-left">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-bold mb-8 text-gray-950">Job Description</h3>
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Freelancers are self-employed individuals who are not contractually bound to one specific employer. 
              Our platform allows you to work in virtually any sector, though most work focuses on 
              <span className="text-blue-600 font-bold mx-1">Marketing and Communications</span>, 
              <span className="text-blue-600 font-bold mx-1">Creative Arts</span>, and 
              <span className="text-blue-600 font-bold mx-1">Information Technology</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
