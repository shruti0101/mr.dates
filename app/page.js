import Image from "next/image";
import HeroDatesExact from "@/components/Hero";
import AboutSection from "@/components/About";
import Check from "@/components/Check";
import Category from "@/components/Category";
import Slider from "@/components/Slider";
import Countup from "@/components/Countup";
import Whychoose from "@/components/Whychoose"
import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
import Benefit from "@/components/Benefits";
import LeadingDatesSupplier from "@/components/LeadingDatesSupplier";
import FaqDatesSupplier from "@/components/Faq";
export default function Home() {
  return (
  <>
  <HeroDatesExact></HeroDatesExact>

  <AboutSection></AboutSection>
  <Check></Check>
  <Category></Category>

  <Countup></Countup>
 
  <Whychoose></Whychoose>
    <LeadingDatesSupplier></LeadingDatesSupplier>
       <Slider></Slider>
  <Banner></Banner>
  <Testimonial></Testimonial>
  <Benefit></Benefit>
  <FaqDatesSupplier></FaqDatesSupplier>

  </>
  );
}
