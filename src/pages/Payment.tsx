import { motion } from "motion/react";
import { CreditCard, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function Payment() {
  return (
    <div className="space-y-16 sm:space-y-32 pb-20 sm:pb-32">
      {/* Header */}
      <section className="bg-gray-50 pt-16 sm:pt-24 pb-20 sm:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-[0.02] skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Secure Gateway</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6">
            Simplified <span className="text-blue-600 underline underline-offset-8 decoration-blue-100">Transactions</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Authorized portal for consultancy fees, course registrations, and professional service payments.
          </p>
        </div>
      </section>

      {/* Payment Card */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -translate-y-1/2 translate-x-1/2 rounded-full -z-10" />
          
          <div className="flex items-center space-x-4 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50">
             <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Zap className="w-6 h-6" />
             </div>
             <div>
                <h4 className="font-bold text-gray-950 text-sm">Official Payment Gateway</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.1em] mt-1 font-semibold">Exposys Data Labs • Instamojo</p>
             </div>
          </div>

          <div className="space-y-6">
             <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-gray-900">How to proceed:</h3>
                <ul className="space-y-3">
                   {[
                      "Click the 'Pay Now' button below to open the secure portal.",
                      "Enter the 'Purpose of Payment' as instructed by our team.",
                      "Enter the specific 'Amount' for your transaction.",
                      "Choose your preferred payment mode (UPI, Card, Netbanking)."
                   ].map((step, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-600">
                         <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                         <span>{step}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="flex items-center space-x-3 text-emerald-600 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">PCI-DSS Compliant • 256-bit SSL Encryption</span>
             </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
             <a 
               href="https://www.instamojo.com/@Exposysdatalabs/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30 flex items-center justify-center group"
             >
                Proceed to Secure Gateway <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
             <div className="flex justify-center space-x-6 mt-8 opacity-40 grayscale contrast-150">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/UPI-Logo-vector.svg" alt="UPI" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
             </div>
             <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest font-medium">
                By proceeding, you agree to our <a href="#" className="text-blue-500 hover:underline">Payment Terms & Refund Policy</a>
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
