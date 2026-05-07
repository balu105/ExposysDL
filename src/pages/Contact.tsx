import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, User, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cn } from "@/src/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const path = "contact_submissions";
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
    <div className="space-y-20 sm:space-y-32 pb-20 sm:pb-32">
      {/* Header */}
      <section className="bg-gray-50 pt-16 sm:pt-24 pb-20 sm:pb-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600 opacity-[0.03] skew-x-6 -translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6"
          >
            Let's Start a <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4"
          >
            Have a question, project idea, or partnership inquiry? Reach out to our technical experts and researchers.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-12 lg:sticky lg:top-32">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-950 mb-8 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  {
                    title: "Headquarters",
                    content: "P.M.R Residency, Yelahanka, Bengaluru - 560064",
                    icon: MapPin,
                    sub: "Opp Nithyotsava Wedding Hall"
                  },
                  {
                    title: "Phone Support",
                    content: "+91 7795207065",
                    icon: Phone,
                    sub: "Mon-Sat, 9AM-6PM IST"
                  },
                  {
                    title: "Email Inquiry",
                    content: "hr@exposysdata.com",
                    icon: Mail,
                    sub: "Technical & Careers"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:border-blue-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950 mb-1 text-sm">{item.title}</h4>
                      <p className="text-gray-900 text-sm font-medium mb-1">{item.content}</p>
                      <p className="text-gray-500 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full aspect-video sm:aspect-[21/9] lg:aspect-video rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.150841288071!2d77.56594238489714!3d13.152433391363067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae214007e4bc3f%3A0xaadb0832c2758993!2sExposys%20Data%20Labs!5e1!3m2!1sen!2sin!4v1778138970595!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:mb-0 mb-12">
            <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-2xl relative">
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
                    <h3 className="text-2xl font-display font-bold text-gray-950 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-8">Thank you for reaching out. A team member will contact you shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide hover:shadow-lg transition-all"
                    >
                      Send Another Message
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
                      <h3 className="text-2xl font-display font-bold text-gray-950 mb-2">Send us a message</h3>
                      <p className="text-gray-500 text-sm">Fill out the form below and we'll connect with you soon.</p>
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
                            placeholder="e.g. Advait Kumar"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              required
                              type="email"
                              className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                              placeholder="advait@domain.com"
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="tel"
                              className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                              placeholder="+91 00000 00000"
                              value={formData.phone}
                              onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Your Message</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-400" />
                          <textarea
                            required
                            rows={5}
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium resize-none"
                            placeholder="Tell us about your project or inquiry..."
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
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
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
