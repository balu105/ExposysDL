import { motion } from "motion/react";
import { 
  CheckCircle2, Loader2, ArrowLeft, Smartphone, Calculator 
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ProjectFundingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: "",
    projectTitle: "",
    branch: "",
    guideName: "",
    guideEmail: "",
    guideContact: "",
    team: [
      { name: "", email: "", contact: "" },
      { name: "", email: "", contact: "" },
      { name: "", email: "", contact: "" },
      { name: "", email: "", contact: "" },
    ],
    paymentId: "",
    commencementDate: "2024-05",
    completionDate: "2025-05",
    scope: "",
    methodology: "",
    outcome: "",
    patentPossibility: "No",
    budget: {
      materials: "",
      labor: "",
      travel: "",
      report: "",
      misc: ""
    }
  });

  const totalBudget = Object.values(formData.budget).reduce((a, b) => Number(a || 0) + Number(b || 0), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const path = "project_proposals";
    try {
      await addDoc(collection(db, path), {
        ...formData,
        totalBudget,
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
          className="text-center max-w-md w-full p-8 border border-gray-100 rounded-[3rem] shadow-2xl shadow-blue-900/5"
        >
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4 text-gray-950">Submission Successful!</h3>
          <p className="text-gray-500 mb-8 font-medium">Your proposal has been logged with ID #{Math.random().toString(36).substring(7).toUpperCase()}. We will review it and get back via email.</p>
          <button 
            onClick={() => navigate("/project-funding")}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Return to Funding Hub
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link 
          to="/project-funding" 
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          BACK TO HUB
        </Link>

        <div className="bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="px-8 sm:px-12 py-10 border-b border-gray-50 bg-white">
             <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Project Proposal Application</h2>
             <h3 className="text-3xl font-display font-bold text-gray-950">Imagination Behind Technology™</h3>
          </div>

          <form onSubmit={handleSubmit} className="p-8 sm:px-12 sm:py-12 space-y-16">
            {/* College & Project Info */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section I: Academic Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input 
                  label="Name of College" 
                  placeholder="Enter college name" 
                  required 
                  value={formData.collegeName} 
                  onChange={(v: string) => setFormData({...formData, collegeName: v})} 
                />
                <Input 
                  label="Branch" 
                  placeholder="e.g. Computer Science" 
                  required 
                  value={formData.branch} 
                  onChange={(v: string) => setFormData({...formData, branch: v})} 
                />
              </div>
              <Input 
                label="Project Title" 
                placeholder="Title of your innovative project" 
                required 
                value={formData.projectTitle} 
                onChange={(v: string) => setFormData({...formData, projectTitle: v})} 
              />
            </div>

            {/* Guide Info */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section II: Internal Guide
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Input label="Guide Name" required value={formData.guideName} onChange={(v: string) => setFormData({...formData, guideName: v})} />
                <Input label="Email" type="email" required value={formData.guideEmail} onChange={(v: string) => setFormData({...formData, guideEmail: v})} />
                <Input label="Contact" required value={formData.guideContact} onChange={(v: string) => setFormData({...formData, guideContact: v})} />
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section III: Team Composition
              </h4>
              <div className="space-y-12">
                {formData.team.map((m, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                    <div className="absolute -left-3 top-0 bottom-0 flex items-center">
                      <div className="text-[10px] font-black text-blue-600/20 rotate-180 [writing-mode:vertical-lr] uppercase tracking-widest">MEMBER {i+1}</div>
                    </div>
                    <Input 
                      label="Full Name" 
                      placeholder={i === 0 ? "Required" : "Optional"}
                      required={i === 0} 
                      value={m.name} 
                      onChange={(v: string) => {
                        const newTeam = [...formData.team];
                        newTeam[i].name = v;
                        setFormData({...formData, team: newTeam});
                      }} 
                    />
                    <Input 
                      label="Email" 
                      required={i === 0} 
                      value={m.email} 
                      type="email"
                      onChange={(v: string) => {
                        const newTeam = [...formData.team];
                        newTeam[i].email = v;
                        setFormData({...formData, team: newTeam});
                      }} 
                    />
                    <Input 
                      label="Contact" 
                      required={i === 0} 
                      value={m.contact} 
                      onChange={(v: string) => {
                        const newTeam = [...formData.team];
                        newTeam[i].contact = v;
                        setFormData({...formData, team: newTeam});
                      }} 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Fee & Dates */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section IV: Logistics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                <Input 
                  label="Payment ID" 
                  required 
                  placeholder="Rs. 1000 ID (MOJO...)" 
                  value={formData.paymentId} 
                  onChange={(v: string) => setFormData({...formData, paymentId: v})} 
                />
                <DateSelector label="Commencement" value={formData.commencementDate} onChange={(v: string) => setFormData({...formData, commencementDate: v})} />
                <DateSelector label="Completion" value={formData.completionDate} onChange={(v: string) => setFormData({...formData, completionDate: v})} />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section V: Methodology
              </h4>
              <TextArea label="Scope / Objectives" required value={formData.scope} onChange={(v: string) => setFormData({...formData, scope: v})} />
              <TextArea label="Methodology / Idea" required value={formData.methodology} onChange={(v: string) => setFormData({...formData, methodology: v})} />
              <TextArea label="Expected Outcome" required value={formData.outcome} onChange={(v: string) => setFormData({...formData, outcome: v})} />
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Patent Possibility</label>
                <select 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-950 outline-none focus:border-blue-500 transition-all font-medium"
                  value={formData.patentPossibility}
                  onChange={e => setFormData({...formData, patentPossibility: e.target.value})}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-blue-600/20 mr-4" />
                Section VI: Estimated Budget
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <BudgetInput label="Materials" value={formData.budget.materials} onChange={(v: string) => setFormData({...formData, budget: {...formData.budget, materials: v}})} />
                <BudgetInput label="Labor" value={formData.budget.labor} onChange={(v: string) => setFormData({...formData, budget: {...formData.budget, labor: v}})} />
                <BudgetInput label="Travel" value={formData.budget.travel} onChange={(v: string) => setFormData({...formData, budget: {...formData.budget, travel: v}})} />
                <BudgetInput label="Report" value={formData.budget.report} onChange={(v: string) => setFormData({...formData, budget: {...formData.budget, report: v}})} />
                <BudgetInput label="Misc" value={formData.budget.misc} onChange={(v: string) => setFormData({...formData, budget: {...formData.budget, misc: v}})} />
              </div>
              <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center">
                   <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-600/20">
                     <Calculator className="w-6 h-6" />
                   </div>
                   <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Total Funding Requested</span>
                </div>
                <span className="text-4xl font-display font-black text-gray-950">₹{totalBudget.toLocaleString()}</span>
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg tracking-wide transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center disabled:opacity-50 active:scale-95"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit Final Proposal"}
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
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-950 outline-none focus:bg-white focus:border-blue-500 transition-all font-medium placeholder:text-gray-300 shadow-sm sm:shadow-none"
      />
    </div>
  );
}

function TextArea({ label, required, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <textarea 
        required={required}
        rows={4}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-950 outline-none focus:bg-white focus:border-blue-500 transition-all resize-none font-medium placeholder:text-gray-300"
      />
    </div>
  );
}

function BudgetInput({ label, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter truncate block px-1">{label}</label>
      <input 
        type="text"
        inputMode="numeric"
        value={value}
        onChange={e => {
          const val = e.target.value;
          // Only allow numbers
          if (val === '' || /^[0-9\b]+$/.test(val)) {
            onChange(val);
          }
        }}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-4 text-sm text-gray-950 outline-none focus:border-blue-500 font-bold text-center"
        placeholder="0"
      />
    </div>
  );
}

function DateSelector({ label, value, onChange }: any) {
  const years = Array.from({ length: 10 }, (_, i) => 2024 + i);
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const [year, month] = value.split("-");

  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <div className="flex space-x-2">
        <select 
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-4 text-xs text-gray-950 outline-none focus:border-blue-500 font-bold"
          value={year}
          onChange={e => onChange(`${e.target.value}-${month}`)}
        >
          {years.map(y => <option key={y} value={y} className="bg-white">{y}</option>)}
        </select>
        <select 
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-4 text-xs text-gray-950 outline-none focus:border-blue-500 font-bold"
          value={month}
          onChange={e => onChange(`${year}-${e.target.value}`)}
        >
          {months.map(m => <option key={m} value={m} className="bg-white">{m}</option>)}
        </select>
      </div>
    </div>
  );
}
