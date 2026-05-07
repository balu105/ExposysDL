import { motion } from "motion/react";
import { MessageSquare, Smartphone, Play, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROMOTIONS = [
  {
    title: "SMS Support",
    description: "Adaptive routing and compliance engine mechanisms ensure optimal delivery for your business alerts and notifications.",
    icon: Smartphone,
    features: ["Global Routing", "High Throughput", "Real-time Monitoring", "Compliance Guaranteed"]
  },
  {
    title: "Chat Bot Solutions",
    description: "Intelligent conversational agents designed for travel, shopping, and hospitality services.",
    icon: MessageSquare,
    features: ["Travel Chat Bot", "Shopping Chat Bot", "24/7 Automation", "Natural Language Processing"]
  },
  {
    title: "Ads Making",
    description: "Professional promotional advertisements and content creation for various industries.",
    icon: Play,
    features: ["Car Dealers", "Super Markets", "Cloth Shops", "High Quality Production"]
  }
];

export default function Promotions() {
  return (
    <div className="space-y-32 pb-32">
       <section className="bg-gray-50 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-5 -translate-y-1/2 rounded-full border border-blue-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Promotions & Media</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-950 mb-6">
            Amplify Your <span className="text-blue-600">Digital Presence</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From automated communication to cinematic brand stories, we provide the tools to reach your customers effectively.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROMOTIONS.map((promo, idx) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-500/5 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
                <promo.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-950 mb-4">{promo.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {promo.description}
              </p>
              <ul className="space-y-3 mb-10">
                {promo.features.map(f => (
                  <li key={f} className="flex items-center space-x-2 text-xs font-bold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-600/10"
              >
                Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
