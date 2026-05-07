import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const JOBS = [
  {
    title: "Software Developer - Python / Django Full Stack",
    location: "Bengaluru, India (On-site)",
    type: "Full-time",
    description: "Looking for an experienced developer with strong skills in Python, Django, and modern frontend frameworks.",
  },
  {
    title: "3D Animator & UI Designer",
    location: "Bengaluru, India (Remote/Hybrid)",
    type: "Full-time",
    description: "Creative individual to work on humanoid robotics mockups and interactive user interfaces.",
  },
  {
    title: "Web Developer",
    location: "Bengaluru, India (On-site)",
    type: "Full-time",
    description: "Experienced in React, Tailwind, and building scalable web applications.",
  },
  {
    title: "Research Analyst - AI/ML",
    location: "Bengaluru, India (On-site)",
    type: "Contract",
    description: "Working on cutting-edge research projects in prediction and behavior patterns.",
  }
];

export default function Careers() {
  return (
    <div className="space-y-32 pb-32">
      <section className="bg-white pt-20 pb-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Careers</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6">
            Join the <span className="text-blue-600">Revolution</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We are hiring talented professionals passionate about building futuristic applications and solving world-scale problems.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
           <h3 className="text-2xl font-display font-bold text-gray-950">Current Openings</h3>
           <div className="text-sm font-bold text-gray-400">{JOBS.length} positions found</div>
        </div>

        <div className="space-y-6">
          {JOBS.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-950 group-hover:text-blue-600 transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <Briefcase className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      Updated 2 days ago
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{job.description}</p>
                </div>
                <div>
                   <Link
                    to="/contact"
                    className="w-full md:w-auto px-6 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group-hover:shadow-md"
                   >
                     Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-gray-50 border border-gray-100 p-12 md:p-20 rounded-[3rem] text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-950 mb-6">Don't see a fit?</h3>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
               We're always looking for exceptional talent. If you have a specific expertise in AI, ML, or Robotics, send your resume to our HR department.
            </p>
            <a href="mailto:hr@exposysdata.com" className="text-blue-600 font-bold hover:underline text-lg">
               hr@exposysdata.com
            </a>
         </div>
      </section>
    </div>
  );
}
