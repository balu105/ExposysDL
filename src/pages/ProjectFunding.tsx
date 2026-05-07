import { motion } from "motion/react";
import { 
  Zap, Cpu, Shield, Globe, Award, Calendar, ChevronRight, 
  Smartphone, Brain, Microscope, Leaf, Droplets, Home, Car, 
  FlaskConical, Stethoscope, Trash2, Sun, Wind, Rocket, Database,
  Link as LinkIcon, CheckCircle2
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const DOMAINS_A = [
  { id: 1, name: "IoT", icon: Cpu, desc: "Interconnected devices and smart infrastructure solutions." },
  { id: 2, name: "Data Science", icon: Database, desc: "Advanced analytics and predictive modeling for big data." },
  { id: 3, name: "Blockchain", icon: LinkIcon, desc: "Decentralized ledgers and secure transaction systems." },
  { id: 4, name: "Security / E-Security", icon: Shield, desc: "Cybersecurity frameworks and threat mitigation protocols." },
  { id: 5, name: "Artificial Intelligence", icon: Brain, desc: "Neural networks and autonomous system development." },
  { id: 6, name: "NLP", icon: Globe, desc: "Language processing and computational linguistics." },
  { id: 7, name: "Android Application", icon: Smartphone, desc: "Mobile ecosystem innovations and app architectures." },
  { id: 8, name: "Energy", icon: Sun, desc: "Smart grid technology and energy efficiency systems." },
  { id: 9, name: "Defence", icon: Shield, desc: "Strategic technology and defense-grade infrastructure." },
  { id: 10, name: "Robotics", icon: Rocket, desc: "Mechanical automation and robotic pathfinding." },
  { id: 11, name: "Humanoid", icon: Users, desc: "Anthropomorphic robotics and social interaction AI." },
  { id: 12, name: "Medical", icon: Stethoscope, desc: "Healthcare tech and bio-medical engineering." },
];

const DOMAINS_B = [
  { name: "Assistive Devices", icon: Award },
  { name: "Agriculture Equipment", icon: Leaf },
  { name: "Waste Management", icon: Trash2 },
  { name: "Solar Energy", icon: Sun },
  { name: "Lake De-frothing", icon: Droplets },
  { name: "GMO Crops", icon: Leaf },
  { name: "Rural Sanitation", icon: Home },
  { name: "Disaster Management", icon: Shield },
  { name: "Water Management", icon: Droplets },
  { name: "Housing & Environment", icon: Home },
  { name: "Energy Harvesting", icon: Wind },
  { name: "Automobile & Infrastructure", icon: Car },
  { name: "Tissue Culture", icon: FlaskConical },
  { name: "Molecular Docking", icon: Microscope },
  { name: "Biomarkers in Medicine", icon: Stethoscope },
];

const ELIGIBILITY = ["BCA", "MCA", "BE/B.Tech", "ME/M.Tech", "MBA", "Ph.D", "M.Sc"];

const STEPPER = [
  "Draft Proposal",
  "Submit Online",
  "Max 4 Members",
  "Pay Fee Rs.1000",
  "Upload Documents",
  "Save Receipt",
  "Final Submission"
];

const EVALUATION = [
  { title: "Expert Evaluation", desc: "Scientific review by domain specialists." },
  { title: "Nodal Centre Evaluation", desc: "Regional screening and feasibility study." },
  { title: "National Seminar", desc: "Presentation to the innovation council." },
  { title: "Sponsorship Approval", desc: "Final verification and fund allocation." },
  { title: "NEFT/Cheque Transfer", desc: "Direct disbursement to approved projects." }
];

const IMPORTANT_DATES = [
  { date: "Current Cycle", title: "Applications Open", desc: "Submit your proposals for the 2024-25 Innovation Batch." },
  { date: "Rolling Basis", title: "Technical Review", desc: "Initial scientific screening within 15 days of submission." },
  { date: "Continuous", title: "Evaluation Phase", desc: "Nodal centre review and feasibility assessment." },
  { date: "Final Phase", title: "Disbursement", desc: "Seminar presentation and fund allocation." }
];

function Users({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}

export default function ProjectFunding() {
  return (
    <div className="bg-white text-gray-950 min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gray-50/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.05),_transparent_50%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-[100vw] h-[100vw] bg-blue-100/40 blur-[120px] rounded-full" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">Imagination Behind Technology™</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-gray-950"
          >
            EXPOSYS DATA LABS<br />
            <span className="text-blue-600">INNOVATION HUB</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg mb-12 font-medium"
          >
            Empowering the next generation of researchers with strategic sponsorships, domain expertise, and world-class laboratory access.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/project-funding-form"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Apply Now
            </Link>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-bold text-sm tracking-wide transition-all shadow-sm">
              View Domains
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-bold text-sm tracking-wide transition-all shadow-sm">
              Contact HR
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-gray-400 text-xs font-mono flex flex-col items-center space-y-2 uppercase tracking-widest"
          >
            <p>Singanayakanahalli, Yelahanka, Bengaluru-560064</p>
            <div className="flex space-x-6">
              <span className="flex items-center"><Smartphone className="w-3 h-3 mr-1" /> +91 7795207065</span>
              <span className="flex items-center"><Smartphone className="w-3 h-3 mr-1" /> +91 8197203803</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Info */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 p-8 sm:p-20 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 relative overflow-hidden group text-center">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-all duration-700" />
            
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-4xl font-display font-bold mb-8 text-gray-950 italic">Fueling Future Innovations</h2>
              <p className="text-gray-500 text-xl leading-relaxed mb-12">
                Exposys Data Labs invites project proposals from Pre Final & Final year <span className="text-blue-600 font-bold underline underline-offset-4">BCA, MCA, BE/B.Tech, ME/M.Tech, Ph.D, MBA, M.Sc</span> students for comprehensive sponsorship and strategic mentorship.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Academic Backing", desc: "Special credit and validation for final year degree projects." },
                  { title: "Seed Funding", desc: "Research grants for specialized hardware, software & laboratory access." },
                  { title: "Expert Guidance", desc: "Direct mentorship from industry veterans and PhD-level researchers." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                    <h4 className="font-bold text-gray-950 mb-3 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class A Domains */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">Core Innovation</h2>
            <h3 className="text-4xl sm:text-5xl font-display font-bold text-gray-950">Class A Domains</h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {DOMAINS_A.map((domain) => (
              <motion.div 
                key={domain.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-gray-100 rounded-[2.5rem] group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <domain.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-950">{domain.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{domain.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Class B Domains */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-display font-bold text-gray-950">Class B: Social & Sustainable Engineering</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">Focusing on high-impact solutions for rural development, environment, and social welfare.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {DOMAINS_B.map((domain) => (
              <div 
                key={domain.name}
                className="p-6 bg-white border border-gray-100 rounded-2xl flex flex-col items-center text-center group hover:border-blue-200 transition-all shadow-sm"
              >
                <domain.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
                <span className="text-[10px] sm:text-xs font-bold text-gray-600 group-hover:text-gray-950 leading-tight">{domain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-display font-bold mb-12 text-gray-950">Who Can Apply?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {ELIGIBILITY.map((item) => (
              <span key={item} className="px-8 py-3 bg-white border border-gray-100 rounded-full font-bold text-sm tracking-widest text-blue-600 shadow-sm transition-all hover:bg-blue-50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 relative overflow-hidden bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-display font-bold mb-16 text-center text-gray-950">Submission Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {STEPPER.map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-6 bg-white border border-gray-100 rounded-2xl h-full flex flex-col items-center text-center shadow-sm group-hover:border-blue-200 transition-all">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white mb-4 shadow-lg shadow-blue-600/20">
                    {i+1}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed text-gray-500 group-hover:text-gray-950 transition-colors">{step}</span>
                </div>
                {i < STEPPER.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Process */}
      <section className="py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.2),_transparent_70%)]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-950">Rigorous Evaluation Process</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              Every proposal undergoes a multi-stage review process to ensure scientific validity and industrial feasibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVALUATION.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 bg-gray-50 border border-gray-100 rounded-3xl group hover:bg-white hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-blue-600/40">
                  {i + 1}
                </div>
                <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-950">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-display font-bold mb-12 text-center text-gray-950">Submission Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {IMPORTANT_DATES.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-gray-100 rounded-3xl text-center shadow-sm">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-6" />
                <div className="text-xl font-display font-black text-gray-950 mb-1">{item.date}</div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{item.title}</div>
                <p className="text-[10px] text-gray-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl sm:text-5xl font-display font-bold mb-8 text-gray-950">Ready to pioneer?</h3>
          <p className="text-gray-500 mb-12 text-lg font-medium">Submit your project proposal today and join our elite hub of researchers.</p>
          <Link 
            to="/project-funding-form"
            className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg tracking-wide transition-all shadow-2xl shadow-blue-600/30 active:scale-95"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
