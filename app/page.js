
import HeroDatesExact from "@/components/Hero";
import AboutSection from "@/components/About";
import Check from "@/components/Check";
import Category from "@/components/Category";
// import Slider from "@/components/Slider";
import Countup from "@/components/Countup";
import Whychoose from "@/components/Whychoose"
import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
import Benefit from "@/components/Benefits";
import LeadingDatesSupplier from "@/components/LeadingDatesSupplier";
import FaqDatesSupplier from "@/components/Faq";
import Cta from "@/components/Cta";

import Parallex from "@/components/Parallex";

export default function Home() {
  return (
  <>
  <HeroDatesExact></HeroDatesExact>
   {/* <Slider></Slider> */}
  <AboutSection></AboutSection>
  <Check></Check>
    <Category></Category>
  



  <Countup></Countup>
 
  <Whychoose></Whychoose>
    
    <LeadingDatesSupplier></LeadingDatesSupplier>
     <Parallex></Parallex>
  <Banner></Banner>


  <Testimonial></Testimonial>
   <Cta></Cta>
  <Benefit></Benefit>
  <FaqDatesSupplier></FaqDatesSupplier>

  </>
  );
}
