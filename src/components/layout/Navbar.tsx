import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Cpu } from "lucide-react";
import { cn } from "@/src/lib/utils";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  {
    name: "SERVICES",
    path: "/services",
    submenu: [
      { name: "Software Development", path: "/services/software" },
      { name: "Web App Development", path: "/services/web" },
      { name: "IT Outsource Services", path: "/services/outsource" },
      { name: "Internship", path: "/internship" },
      { name: "Training", path: "/training" },
    ],
  },
  {
    name: "RESEARCH",
    path: "/research",
    submenu: [
      { name: "Startup Solutions", path: "/research/startups" },
      { name: "Freelancing Projects", path: "/research/freelancing" },
      { name: "Consultancy Projects", path: "/research/consultancy" },
    ],
  },
  { name: "PROMOTIONS", path: "/promotions" },
  { name: "CAREERS", path: "/careers" },
  { name: "PROJECT FUNDING", path: "/project-funding" },
  { name: "FREELANCER", path: "/freelancer" },
  {
    name: "ABOUT US",
    path: "/about",
    submenu: [
      { name: "About Us", path: "/about" },
      { name: "Team", path: "/team" },
    ],
  },
  { name: "WORKSHOPS", path: "/workshops" },
  { name: "CONTACT US", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExpandedMobileSubmenu(null);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnt6cP2feLtVBrE2orPw1XZNtonHP7e-OGA&s" 
              alt="Exposys Data Labs"
              className="h-8 sm:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-display font-bold tracking-tighter text-blue-600 leading-none uppercase">
                Exposys
              </span>
              <span className="text-[10px] sm:text-xs lg:text-xl font-display font-light tracking-tighter text-gray-900 leading-none uppercase">
                Data Labs
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 mr-4 border-r border-gray-100 pr-6">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center text-[10px] font-semibold tracking-widest text-gray-600 hover:text-blue-600 transition-colors uppercase py-2 whitespace-nowrap",
                      location.pathname === item.path && "text-blue-600"
                    )}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-2.5 h-2.5" />}
                  </Link>

                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-0 w-56 bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden py-2"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <a 
              href="https://www.instamojo.com/@Exposysdatalabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-[10px] font-bold tracking-widest rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10 whitespace-nowrap"
            >
              ONLINE PAYMENT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between group">
                    <Link
                      to={item.path}
                      className="flex-1 block px-3 py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button 
                        onClick={() => setExpandedMobileSubmenu(expandedMobileSubmenu === item.name ? null : item.name)}
                        className="p-3 text-gray-400 hover:text-blue-600"
                      >
                        <ChevronDown className={cn("w-4 h-4 transition-transform", expandedMobileSubmenu === item.name && "rotate-180")} />
                      </button>
                    )}
                  </div>
                  
                  {item.submenu && expandedMobileSubmenu === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pl-6 space-y-1"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-3 py-2 text-xs text-gray-500 hover:text-blue-600 font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <div className="pt-4 px-3">
                <a 
                  href="https://www.instamojo.com/@Exposysdatalabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-widest shadow-lg shadow-blue-600/10"
                >
                  ONLINE PAYMENT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
