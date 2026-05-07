import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PageContainer } from "./components/layout/PageContainer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Internship from "./pages/Internship";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Promotions from "./pages/Promotions";
import Workshops from "./pages/Workshops";
import Research from "./pages/Research";
import ProjectFunding from "./pages/ProjectFunding";
import ProjectFundingForm from "./pages/ProjectFundingForm";
import Freelancer from "./pages/Freelancer";
import FreelancerForm from "./pages/FreelancerForm";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/software" element={<Services />} />
          <Route path="/services/web" element={<Services />} />
          <Route path="/services/outsource" element={<Services />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/training" element={<Services />} />
          <Route path="/research/*" element={<Research />} />
          <Route path="/research" element={<Research />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/project-funding" element={<ProjectFunding />} />
          <Route path="/project-funding-form" element={<ProjectFundingForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/freelancer-form" element={<FreelancerForm />} />
          <Route path="/payment" element={<Payment />} />
          {/* Add more routes as needed */}
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}
