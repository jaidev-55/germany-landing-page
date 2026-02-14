import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import HighDemandJobsSection from "@/components/HighDemandJobsSection";
import IndianStudentsSection from "@/components/IndianStudentsSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSections";
import StatsCard from "@/components/StatsCard";
import StudentJourneySection from "@/components/StudentJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyGermany from "@/components/WhyGermany";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Herosection />
      <StatsCard />
      <PartnersSection />
      <WhyGermany />
      <StudentJourneySection />
      <ServicesSection />
      <IndianStudentsSection />
      <HighDemandJobsSection />
      <TestimonialsSection />
      <LeadCaptureForm />
      <Footer />
    </div>
  );
};

export default Home;
