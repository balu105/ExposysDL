import { motion } from "motion/react";
import { 
  CheckCircle2, Loader2, ArrowLeft, ExternalLink 
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FreelancerForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    percentage10: "",
    percentage12: "",
    ug: "",
    pg: "",
    jobRole: "Data Science",
    paymentId: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const path = "freelancer_applications";
    try {
      await addDoc(collection(db, path), {
        ...formData,
        status: "Pending",
        submittedAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full p-8 border border-gray-100 rounded-[3rem] shadow-2xl shadow-blue-900/5 text-gray-950"
        >
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4">Application Logged!</h3>
          <p className="text-gray-500 mb-8 font-medium">Your details have been saved. Now, click below to complete your registration payment.</p>
          
          <a 
            href="https://www.instamojo.com/@Exposysdatalabs/l54f664e289414d8dace37d223d6272f1/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 mb-4"
          >
            CLICK TO PAY ₹5,000/-
          </a>
          
          <button 
            onClick={() => navigate("/freelancer")}
            className="w-full px-8 py-4 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-all"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link 
          to="/freelancer" 
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          BACK TO INFO
        </Link>

        <div className="bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="px-8 sm:px-12 py-10 border-b border-gray-50">
             <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">frelancer</h2>
             <h3 className="text-3xl font-display font-bold text-gray-950 leading-tight">We're building a platform for you to experience, explore and evolve</h3>
             
             <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
               <p className="text-gray-500 text-sm font-medium leading-relaxed">
                <span className="font-bold text-gray-700">Freelancer Job Description:</span> Freelancers are self-employed individuals who are not contractually bound to one specific employer. Freelancers can work in virtually any sector, though most work in marketing and communications, creative arts, and information technology.
               </p>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 sm:px-12 sm:py-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Name *" placeholder="Your Full Name" required value={formData.name} onChange={(v: string) => setFormData({...formData, name: v})} />
              <Input label="Email *" type="email" placeholder="email@example.com" required value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} />
              <Input label="Phone *" placeholder="+91 00000 00000" required value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} />
              <Input label="Job Roles *" placeholder="e.g. Data Science" required value={formData.jobRole} onChange={(v: string) => setFormData({...formData, jobRole: v})} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="10 Percentage *" placeholder="e.g. 85%" required value={formData.percentage10} onChange={(v: string) => setFormData({...formData, percentage10: v})} />
              <Input label="12th Percentage/Diploma *" placeholder="e.g. 82%" required value={formData.percentage12} onChange={(v: string) => setFormData({...formData, percentage12: v})} />
              <Input label="UG *" placeholder="Course, Year & College" required value={formData.ug} onChange={(v: string) => setFormData({...formData, ug: v})} />
              <Input label="PG" placeholder="Course details if applicable" value={formData.pg} onChange={(v: string) => setFormData({...formData, pg: v})} />
            </div>

            <div className="pt-8 border-t border-gray-50 space-y-10">
              <div className="max-w-md mx-auto space-y-8">
                <div className="text-center">
                  <a 
                    href="https://www.instamojo.com/@Exposysdatalabs/l54f664e289414d8dace37d223d6272f1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                  >
                    <span className="text-lg underline underline-offset-8">CLICK HERE (Registration Fee Rs. 5000/-)</span>
                    <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-4">Required registration before submission</p>
                </div>

                <Input 
                  label="Payment ID *" 
                  placeholder="Paste your Instamojo Payment ID" 
                  required 
                  value={formData.paymentId || ""} 
                  onChange={(v: string) => setFormData({...formData, paymentId: v})} 
                />
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full py-6 bg-gray-950 hover:bg-black text-white rounded-2xl font-bold text-lg tracking-wide transition-all shadow-xl flex items-center justify-center disabled:opacity-50 active:scale-95"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Complete Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder, required, value, onChange, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-950 outline-none focus:bg-white focus:border-blue-500 transition-all font-medium placeholder:text-gray-300"
      />
    </div>
  );
}
