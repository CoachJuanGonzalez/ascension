import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationFormSchema, type ApplicationFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Target, Shield, Brain, Check, Calendar, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden"
      aria-label="Hero section"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 hero-gradient z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold tracking-[0.3em] uppercase text-sm font-medium mb-6 fade-in-up" data-testid="text-hero-tagline">
          Private Mentorship
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 fade-in-up text-foreground" data-testid="text-hero-title">
          ASCENSION
        </h1>
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold italic mb-8 fade-in-up" data-testid="text-hero-subheadline">
          Become Undeniable.
        </p>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up" data-testid="text-hero-description">
          Discipline, strength, and embodied presence for men building a powerful and functional body — inside and out.
        </p>
        <div className="fade-in-up">
          <Button
            size="lg"
            className="bg-gold text-black font-semibold px-10 py-6 text-lg border border-gold-dark"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-cta"
          >
            REQUEST PRIVATE ACCESS
          </Button>
        </div>
        <p className="text-muted-foreground text-sm mt-6 fade-in-up" data-testid="text-hero-note">
          Application required · Limited monthly capacity
        </p>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up" aria-hidden="true">
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="py-24 px-6 grain-overlay" aria-label="Social proof" data-testid="section-social-proof">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 fade-in-up text-foreground" data-testid="text-social-proof-title">
          Join Men Who Are Raising Their Standards
        </h2>
        <p className="text-muted-foreground text-lg mb-10 fade-in-up" data-testid="text-social-proof-intro">
          Clients commonly report:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            "Stronger routines within weeks",
            "Increased confidence and self-control",
            "Noticeable physical changes within 8–12 weeks",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`text-benefit-${i}`}
            >
              <Check className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-social-proof-cta"
          >
            APPLY FOR MENTORSHIP
          </Button>
        </div>
      </div>
    </section>
  );
}

function IdentitySection() {
  return (
    <section className="py-24 px-6 bg-card grain-overlay" aria-label="Identity section" data-testid="section-identity">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8 fade-in-up text-foreground" data-testid="text-identity-title">
          This is not fitness. <span className="italic text-gold">This is identity.</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 fade-in-up" data-testid="text-identity-description">
          Ascension is for men who refuse average standards. You don't just train your body — you forge discipline, nervous system control, and self-command.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { before: "Chaos", after: "Structure" },
            { before: "Excuses", after: "Standards" },
            { before: "Hesitation", after: "Presence" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`text-transformation-${i}`}
            >
              <p className="text-muted-foreground line-through mb-2">{item.before}</p>
              <p className="text-gold font-serif text-2xl italic">{item.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const pillars = [
    {
      icon: Target,
      title: "STRUCTURE",
      description: "Custom protocols built around your goals, schedule, and capacity. No generic plans.",
    },
    {
      icon: Shield,
      title: "DISCIPLINE",
      description: "High-accountability coaching, weekly check-ins, and behavior correction systems.",
    },
    {
      icon: Brain,
      title: "EMBODIMENT",
      description: "Train the nervous system: breathwork, presence under pressure, emotional regulation, mental conditioning.",
    },
  ];

  return (
    <section className="py-24 px-6 grain-overlay" aria-label="The three pillars" data-testid="section-pillars">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 fade-in-up text-foreground" data-testid="text-pillars-title">
          The Three Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Card
              key={i}
              className="bg-card border-card-border p-8 text-center hover-elevate fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`card-pillar-${i}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <pillar.icon className="w-8 h-8 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl mb-4 tracking-wider text-foreground" data-testid={`text-pillar-title-${i}`}>{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-pillar-desc-${i}`}>{pillar.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-pillars-cta"
          >
            APPLY FOR MENTORSHIP
          </Button>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="py-24 px-6 bg-card grain-overlay" aria-label="Transformation section" data-testid="section-transformation">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 fade-in-up text-foreground" data-testid="text-transformation-title">
          Transform the body. <span className="italic text-gold">Elevate the standard.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-up" data-testid="text-transformation-subtitle">
          Not perfection. Progress earned through discipline.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-up">
            <Card className="bg-muted border-card-border aspect-[4/3] flex items-center justify-center" data-testid="card-before">
              <div className="text-center p-8">
                <p className="text-muted-foreground uppercase tracking-widest text-sm mb-2">Before</p>
                <p className="text-muted-foreground/60">Average physique placeholder</p>
              </div>
            </Card>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: "100ms" }}>
            <Card className="bg-muted border-gold/30 aspect-[4/3] flex items-center justify-center" data-testid="card-after">
              <div className="text-center p-8">
                <p className="text-gold uppercase tracking-widest text-sm mb-2">After</p>
                <p className="text-muted-foreground/60">Strong athletic physique placeholder</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-center mb-6 fade-in-up" data-testid="text-results-intro">
            Clients commonly report:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Stronger habits within weeks",
              "Higher self-respect and consistency",
              "Visible body changes in 8–12 weeks",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 fade-in-up"
                style={{ transitionDelay: `${i * 100}ms` }}
                data-testid={`text-result-${i}`}
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-transformation-cta"
          >
            APPLY FOR MENTORSHIP
          </Button>
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="py-24 px-6 grain-overlay" aria-label="Authority and method" data-testid="section-authority">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 fade-in-up text-foreground" data-testid="text-authority-title">
          Built on real-world performance principles
        </h2>
        <ul className="space-y-4">
          {[
            "Strength training focused on compound movement patterns",
            "Conditioning inspired by fighter preparation",
            "Recovery and nervous system regulation",
            "Psychological discipline frameworks",
            "Identity-based habit formation",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 fade-in-up"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`text-principle-${i}`}
            >
              <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section className="py-24 px-6 bg-card grain-overlay" aria-label="Schedule consultation" data-testid="section-consultation">
      <div className="max-w-2xl mx-auto text-center">
        <Calendar className="w-12 h-12 text-gold mx-auto mb-6 fade-in-up" aria-hidden="true" />
        <h2 className="font-serif text-3xl md:text-4xl mb-6 fade-in-up text-foreground" data-testid="text-consultation-title">
          Schedule Your Strategy Session
        </h2>
        <p className="text-muted-foreground text-lg mb-10 fade-in-up" data-testid="text-consultation-description">
          Discuss your goals with an experienced coach. Spots are limited — book intentionally.
        </p>
        <div className="fade-in-up">
          <Button
            size="lg"
            className="bg-gold text-black font-semibold px-10 py-6 text-lg border border-gold-dark"
            data-testid="button-book-call"
          >
            BOOK A CALL
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Who is this for?",
      answer: "Men seeking self-mastery through discipline and strength.",
    },
    {
      question: "Do I need to be fit already?",
      answer: "No. The program adapts to your current level.",
    },
    {
      question: "What does the mentorship include?",
      answer: "Custom plans, accountability, nervous system training, structured progression.",
    },
    {
      question: "How soon do people see changes?",
      answer: "Stronger habits within 3–4 weeks; physical changes commonly appear within 8–12 weeks.",
    },
    {
      question: "How does the application work?",
      answer: "Submit the form. Applications reviewed within 24–48 hours.",
    },
  ];

  return (
    <section className="py-24 px-6 grain-overlay" aria-label="Frequently asked questions" data-testid="section-faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 fade-in-up text-foreground" data-testid="text-faq-title">
          The Questions We Know You Have
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-card-border rounded-md px-6 fade-in-up"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="text-left font-medium text-foreground py-5" data-testid={`faq-trigger-${i}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5" data-testid={`faq-answer-${i}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ApplicationSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      fitnessLevel: "",
      goals: "",
      motivation: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "We'll review your application within 24–48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 px-6 bg-card grain-overlay" aria-label="Application submitted" data-testid="section-application-success">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center fade-in-up">
            <Check className="w-10 h-10 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 fade-in-up text-foreground" data-testid="text-success-title">
            Application Received
          </h2>
          <p className="text-muted-foreground text-lg fade-in-up" data-testid="text-success-message">
            Thank you for applying to Ascension Private Mentorship. We'll review your application and contact you within 24–48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 px-6 bg-card grain-overlay" aria-label="Application form" data-testid="section-application">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 fade-in-up text-foreground" data-testid="text-application-title">
          Apply for Ascension
        </h2>
        <p className="text-muted-foreground text-center mb-10 fade-in-up" data-testid="text-application-description">
          This is a private mentorship for men serious about change. If accepted, you'll be contacted within 24–48 hours.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 fade-in-up">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-muted border-input"
                      placeholder="Your full name"
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="bg-muted border-input"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fitnessLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Current Fitness Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted border-input" data-testid="select-fitness-level">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner" data-testid="option-beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate" data-testid="option-intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced" data-testid="option-advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-muted border-input min-h-[100px]"
                      placeholder="What are your primary goals?"
                      data-testid="textarea-goals"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Why do you want this mentorship?</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-muted border-input min-h-[100px]"
                      placeholder="Share what's driving you to apply..."
                      data-testid="textarea-motivation"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gold text-black font-semibold py-6 text-lg border border-gold-dark"
              disabled={form.formState.isSubmitting}
              data-testid="button-submit-application"
            >
              {form.formState.isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border" aria-label="Footer" data-testid="section-footer">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm mb-4" data-testid="text-copyright">
          © {new Date().getFullYear()} Ascension Private Mentorship
        </p>
        <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
          <a href="#" className="text-muted-foreground hover:text-gold transition-colors" data-testid="link-privacy">
            Privacy Policy
          </a>
          <span className="text-muted-foreground/30" aria-hidden="true">|</span>
          <a href="mailto:info@example.com" className="text-muted-foreground hover:text-gold transition-colors" data-testid="link-contact">
            info@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useScrollAnimation();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SocialProofSection />
      <IdentitySection />
      <PillarsSection />
      <TransformationSection />
      <AuthoritySection />
      <ConsultationSection />
      <FAQSection />
      <ApplicationSection />
      <Footer />
    </main>
  );
}
