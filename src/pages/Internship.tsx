import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { CheckCircle2, GraduationCap, Briefcase, Award, ArrowRight, Loader2, Globe, User, Mail, Phone, Building2, Calendar, Target } from "lucide-react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cn } from "@/src/lib/utils";

export default function Internship() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    domain: "",
    duration: "1 month",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep < 2) {
      setActiveStep(2);
      return;
    }
    setLoading(true);
    const path = "internship_registrations";
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

  const BENEFITS = [
    { title: "Industry Exposure", icon: Globe, desc: "Work on live industry projects" },
    { title: "Expert Guidance", icon: GraduationCap, desc: "Mentorship from data scientists" },
    { title: "Internship Certificate", icon: Award, desc: "Globally recognized certification" },
    { title: "Real-time Projects", icon: Briefcase, desc: "Hands-on implementation" },
    { title: "Placement Support", icon: Target, desc: "Career guidance and referrals" },
  ];

  return (
    <div className="space-y-20 md:space-y-32 pb-20 md:pb-32">
      {/* Header */}
      <section className="bg-gray-50 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-600 opacity-[0.03] -skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                Exposys Internship Program 2026
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6 leading-tight">
              Bridge the Gap Between <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Education & Industry</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Join our intensive research-driven programs designed to turn talented students into industry-ready professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-12 lg:sticky lg:top-32">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                Program Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((b) => (
                  <div key={b.title} className="group p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      <b.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 mb-1">{b.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-[0.03] -translate-y-1/2 translate-x-1/2 rounded-full" />
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">Selection Process</h3>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Online Registration", desc: "Submit your basic details and domain preference." },
                  { step: "02", title: "Technical Evaluation", desc: "Solve a domain-specific mini project task." },
                  { step: "03", title: "Result & Onboarding", desc: "Get selected and start your learning journey." }
                ].map((s) => (
                  <div key={s.step} className="flex space-x-6">
                    <div className="text-2xl font-display font-black text-blue-600/10 flex-shrink-0 leading-none">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1 uppercase tracking-wide">{s.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-2xl relative mb-12 lg:mb-0">
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
                  <h3 className="text-2xl font-display font-bold text-gray-950 mb-2">Application Received!</h3>
                  <p className="text-gray-500 mb-8">We'll review your details and send the selection task to your email.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setActiveStep(1);
                    }}
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide hover:shadow-lg transition-all"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <div key="form" className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-display font-bold text-gray-950">Registration</h3>
                      <div className="flex space-x-1">
                        <div className={cn("w-8 h-1 rounded-full", activeStep >= 1 ? "bg-blue-600" : "bg-gray-100")} />
                        <div className={cn("w-8 h-1 rounded-full", activeStep >= 2 ? "bg-blue-600" : "bg-gray-100")} />
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-8">
                      {activeStep === 1 ? "Step 1: Personal & Contact Information" : "Step 2: Educational & Professional Focus"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {activeStep === 1 ? (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                required
                                type="text"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                placeholder="e.g. Rahul Sharma"
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
                                placeholder="rahul@domain.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                required
                                type="tel"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                placeholder="+91 00000 00000"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">College / University</label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                required
                                type="text"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                placeholder="e.g. NIT Bangalore"
                                value={formData.college}
                                onChange={e => setFormData({ ...formData, college: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Preferred Domain</label>
                            <div className="relative">
                              <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                              <select
                                required
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium appearance-none"
                                value={formData.domain}
                                onChange={e => setFormData({ ...formData, domain: e.target.value })}
                              >
                                <option value="">Select Domain</option>
                                <option value="machine-learning">Machine Learning</option>
                                <option value="ai-robotics">AI & Robotics</option>
                                <option value="data-science">Data Science</option>
                                <option value="web-apps">Web Application Dev</option>
                                <option value="cyber-security">Cyber Security</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Duration</label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                              <select
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium appearance-none"
                                value={formData.duration}
                                onChange={e => setFormData({ ...formData, duration: e.target.value })}
                              >
                                <option value="1 month">1 Month (Mini Project)</option>
                                <option value="3 months">3 Months (Standard)</option>
                                <option value="6 months">6 Months (Advanced)</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex space-x-4 pt-4">
                      {activeStep === 2 && (
                        <button
                          type="button"
                          onClick={() => setActiveStep(1)}
                          className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-200 transition-all"
                        >
                          Back
                        </button>
                      )}
                      <button
                        disabled={loading}
                        type="submit"
                        className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center disabled:opacity-50"
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            {activeStep === 1 ? "Next Step" : "Complete Registration"}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

