"use client"

import { Heart, Sparkles, Star, Users } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Programs", id: "feature" },
            { name: "Success Stories", id: "testimonial" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="EmpowerHer"
          button={{
            text: "Join Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Empowering Women to Lead"
          description="Join our community of strong, ambitious women breaking barriers and creating lasting change in their industries and communities."
          tag="Women Empowerment"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Confident professional women in leadership roles"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Mission"
          description={[
            "We believe every woman has the power to create extraordinary change. Our mission is to provide the tools, resources, and community support needed to unlock that potential.",
            "Through mentorship, leadership programs, and a supportive network, we help women overcome obstacles and achieve their goals in business and life."
          ]}
          buttons={[
            { text: "Join Our Community", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Programs"
          description="Comprehensive programs designed to empower women at every stage of their journey"
          tag="Programs"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Leadership Development",
              description: "Build confidence and leadership skills through hands-on workshops, executive coaching, and real-world challenges that prepare you for success.",
              imageSrc: "https://images.pexels.com/photos/8761534/pexels-photo-8761534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Women leadership training workshop"
            },
            {
              id: "02",
              title: "Mentorship Network",
              description: "Connect with successful women leaders who provide guidance, support, and valuable insights to accelerate your professional growth.",
              imageSrc: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Women business mentoring meeting"
            },
            {
              id: "03",
              title: "Career Advancement",
              description: "Navigate career transitions, negotiate effectively, and break through glass ceilings with strategic planning and practical tools.",
              imageSrc: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional woman celebrating career success"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Leadership Team"
          description="Meet the inspiring women leading our mission to empower others"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Founder & CEO",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, Founder & CEO",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarah-johnson" },
                { icon: "Twitter", url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Director of Programs",
              imageSrc: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Rodriguez, Director of Programs",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/maria-rodriguez" },
                { icon: "Globe", url: "https://mariarodriguez.com" }
              ]
            },
            {
              id: "3",
              name: "Jessica Chen",
              role: "Community Manager",
              imageSrc: "https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jessica Chen, Community Manager",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/jessica-chen" },
                { icon: "Twitter", url: "https://twitter.com/jessicachen" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Success Stories"
          description="Real women sharing their transformation journeys"
          tag="Testimonials"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Amanda Foster",
              handle: "@amandafoster",
              testimonial: "This community changed my life. I went from being afraid to speak up in meetings to leading my own team within 8 months. The support and mentorship here is incredible.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Foster, successful businesswoman"
            },
            {
              id: "2",
              name: "Rachel Kim",
              handle: "@rachelkimceo",
              testimonial: "The leadership program gave me the confidence to start my own business. Now I'm running a successful startup and inspiring other women to chase their dreams too.",
              imageSrc: "https://images.pexels.com/photos/5119202/pexels-photo-5119202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rachel Kim, entrepreneur and CEO"
            },
            {
              id: "3",
              name: "Lisa Martinez",
              handle: "@lisamartinez",
              testimonial: "I never thought I could negotiate for the salary I deserved. Thanks to the career advancement program, I increased my income by 40% and feel empowered every day.",
              imageSrc: "https://images.pexels.com/photos/5717577/pexels-photo-5717577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Martinez, empowered professional"
            },
            {
              id: "4",
              name: "Maya Patel",
              handle: "@mayapatel",
              testimonial: "The mentorship network connected me with industry leaders who believed in me. I'm now in a C-suite position and paying it forward by mentoring others.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maya Patel, executive leader"
            },
            {
              id: "5",
              name: "Jennifer Wong",
              handle: "@jenniferwong",
              testimonial: "This community taught me that supporting other women isn't just nice to do - it's essential for all of us to succeed. Together, we're unstoppable.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Wong, business leader"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Future?"
          description="Join thousands of women who are breaking barriers and creating the change they want to see. Let's start your empowerment journey today."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "profession", type: "text", placeholder: "Current Role/Industry", required: false }
          ]}
          textarea={{
            name: "goals",
            placeholder: "Tell us about your goals and what you hope to achieve...",
            rows: 4,
            required: false
          }}
          buttonText="Begin My Journey"
          imageSrc="https://images.pexels.com/photos/6003787/pexels-photo-6003787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Women supporting each other in empowerment community"
          mediaPosition="right"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="EmpowerHer"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Mission", href: "about" },
                { label: "Success Stories", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Leadership Program", href: "feature" },
                { label: "Mentorship Network", href: "feature" },
                { label: "Career Advancement", href: "feature" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Join Community", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}