import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnt6cP2feLtVBrE2orPw1XZNtonHP7e-OGA&s" 
                  alt="Exposys Data Labs"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold tracking-tighter text-white leading-none uppercase">
                  Exposys <span className="text-blue-600">Data Labs</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-gray-500 mt-1 uppercase">
                  Research & Development
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Exposys Data Labs aims to solve real-world business problems through Automation, Big Data, Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/software" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Software Development</Link></li>
              <li><Link to="/services/web" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Web Application Development</Link></li>
              <li><Link to="/services/outsource" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">IT Outsource Services</Link></li>
              <li><Link to="/internship" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Internship Programs</Link></li>
              <li><Link to="/training" className="text-gray-400 text-sm hover:text-blue-500 transition-colors">Training & Courses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  P.M.R Residency, Ground Floor, No-5/3 Sy. No.10/6-1, Yelahanka, Bengaluru - 560064
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 7795207065</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hr@exposysdata.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to get the latest updates on AI and Robotics.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-900 border-none rounded-l-md px-4 py-3 text-sm w-full focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-md transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col items-center text-center">
          <p className="text-gray-500 text-xs mb-4">
            © 2026 Exposys Data Labs. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
