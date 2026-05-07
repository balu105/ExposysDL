import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Award, BookOpen, CheckCircle2, ArrowRight, Loader2, User, Mail, Briefcase, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cn } from "@/src/lib/utils";

export default function Workshops() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    workshop: "AI for Tomorrow",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const path = "workshop_registrations";
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20 md:space-y-32 pb-20 md:pb-32">
      <section className="bg-gray-50 pt-16 md:pt-24 pb-20 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-blue-600 opacity-[0.03] skew-x-12 -translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              Educational Workshops
            </span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6">
            Free One-Day <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">AI Workshop</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Gain hands-on experience in Artificial Intelligence, Facial Recognition, and Voice Assistants with our industry experts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-12 lg:sticky lg:top-32">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                Workshop Agenda
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex space-x-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0 group-hover:border-blue-200 group-hover:scale-110 transition-all">AM</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Morning Session</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">AI Workflow, Industry Trends, and Real World Applications exploration. Understanding the core foundations of modern neural networks.</p>
                  </div>
                </div>
                <div className="flex space-x-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0 group-hover:border-blue-200 group-hover:scale-110 transition-all">PM</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Afternoon Session</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Facial Recognition, Voice Assistant setup, and Hands-on implementation of AI logic for interactive systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
               <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center">
                 <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                 What's Included
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Participation Certificate", icon: Award, desc: "Recognized industry credential" },
                    { title: "Hands-on Sessions", icon: BookOpen, desc: "Practical lab implementation" },
                    { title: "Python & NLP Tools", icon: CheckCircle2, desc: "Resource toolkit provided" },
                    { title: "Networking Lunch", icon: Users, desc: "Connect with peers & experts" }
                  ].map(item => (
                    <div key={item.title} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                       <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5" />
                       </div>
                       <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                       <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-2xl relative lg:mb-0 mb-12">
             <AnimatePresence mode="wait">
               {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-950 mb-2">Registration Successful!</h3>
                    <p className="text-gray-500 mb-8">We've sent the workshop details and event link to your registered email.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide hover:shadow-lg transition-all"
                    >
                      Register Someone Else
                    </button>
                  </motion.div>
               ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Limited Seats Remaining</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-950 mb-2">Reserve Your Seat</h3>
                      <p className="text-gray-500 text-sm">Please provide your details to secure your spot in the upcoming session.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            required
                            type="text"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                            placeholder="e.g. Sarah Johnson"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            required
                            type="email"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                            placeholder="sarah@university.edu"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Occupation / Student</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 underline" />
                          <input
                            required
                            type="text"
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                            placeholder="e.g. Data Analyst / Final Year Student"
                            value={formData.occupation}
                            onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                          />
                        </div>
                      </div>

                      <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center disabled:opacity-50"
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Secure My Registration
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-center text-gray-400 font-medium tracking-wide">
                        *By registering, you agree to our terms and conditions for educational events.
                      </p>
                    </form>
                  </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

