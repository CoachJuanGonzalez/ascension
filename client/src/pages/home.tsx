import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationFormSchema, type ApplicationFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, ChevronDown, Play, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/JuanGreyMaster_1_1769102177296.jpeg";

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

// 1️⃣ HERO SECTION
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden"
      aria-label="Hero section"
      data-testid="section-hero"
    >
      <img
        src={heroImage}
        alt="Juan Grey - Private Mentorship"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="sync"
        data-testid="img-hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-background z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 z-0" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gold tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-8 fade-in-up" data-testid="text-hero-tagline">
          PRIVATE MENTORSHIP
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.1] mb-8 fade-in-up text-foreground" data-testid="text-hero-title">
          90 Days to rebuild structure,<br />sharpen execution,<br />and move with direction.
        </h1>
        <div className="max-w-2xl mx-auto mb-12 space-y-4 fade-in-up">
          <p className="text-foreground/90 text-lg md:text-xl font-light tracking-wide">
            This is not motivation.
          </p>
          <p className="text-gold font-serif text-2xl md:text-3xl italic">
            This is structured performance.
          </p>
        </div>
        <div className="fade-in-up">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-black font-bold px-12 py-7 text-base md:text-lg border-2 border-gold-dark shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hero-cta"
          >
            APPLY FOR MENTORSHIP
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up" aria-hidden="true">
          <ChevronDown className="w-6 h-6 text-gold/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// 2️⃣ VIDEO SECTION
function VideoSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black/40 grain-overlay" aria-label="Video introduction" data-testid="section-video">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 fade-in-up text-foreground" data-testid="text-video-title">
            Why structure changes everything
          </h2>
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed fade-in-up" data-testid="text-video-description">
            Most people don't fail from lack of effort.<br />
            They fail from lack of structure.<br />
            <span className="text-gold font-medium mt-2 block">This mentorship is about building the system that keeps you moving forward.</span>
          </p>
        </div>

        {/* Video Container - Replace with actual video embed */}
        <div className="relative aspect-video bg-card border-2 border-gold/30 rounded-lg overflow-hidden shadow-2xl fade-in-up">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/60">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/50 hover:bg-gold/30 transition-all cursor-pointer group">
                <Play className="w-10 h-10 text-gold ml-1 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Watch Introduction</p>
            </div>
          </div>
          {/* Replace this div with your actual video iframe/embed:
          <iframe
            src="YOUR_VIDEO_URL"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          */}
        </div>
      </div>
    </section>
  );
}

// 3️⃣ POSITIONING STRIP
function PositioningStrip() {
  return (
    <section className="py-16 px-6 bg-card/50 border-y border-gold/20 grain-overlay" aria-label="Core positioning" data-testid="section-positioning">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { from: "Motivation", to: "Discipline" },
            { from: "Chaos", to: "Structure" },
            { from: "Drift", to: "Direction" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center fade-in-up group"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`positioning-${i}`}
            >
              <p className="text-muted-foreground/60 text-lg line-through mb-3">{item.from}</p>
              <div className="flex items-center justify-center mb-3">
                <div className="h-px w-8 bg-gold/40"></div>
                <span className="text-gold mx-3 text-2xl">→</span>
                <div className="h-px w-8 bg-gold/40"></div>
              </div>
              <p className="text-gold font-serif text-2xl md:text-3xl tracking-wide group-hover:scale-105 transition-transform">{item.to}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4️⃣ WHO THIS IS FOR
function WhoThisIsForSection() {
  const forWho = [
    "Men who want sharper routines and clearer direction",
    "Builders who want their body and mind aligned with their goals",
    "Those in transition who want structure, not noise",
    "Men who perform best when standards rise",
  ];

  return (
    <section className="py-24 md:py-32 px-6 grain-overlay" aria-label="Who this is for" data-testid="section-who-for">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 fade-in-up text-foreground leading-tight" data-testid="text-who-title">
            This mentorship is for men who know they're capable of operating at a higher level<br />
            <span className="text-gold italic">and want their life to reflect that.</span>
          </h2>
        </div>

        <div className="mb-12">
          <p className="text-foreground/90 text-xl md:text-2xl font-light mb-8 fade-in-up">
            This is for:
          </p>
          <div className="space-y-5">
            {forWho.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 fade-in-up border-l-2 border-gold/30 pl-6 py-3 hover:border-gold transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-testid={`who-item-${i}`}
              >
                <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                <span className="text-foreground/90 text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-b border-gold/20 py-8 my-12 fade-in-up">
          <p className="text-center text-lg md:text-xl">
            <span className="text-muted-foreground">If you want comfort, this isn't it.</span><br />
            <span className="text-gold font-serif text-2xl md:text-3xl italic mt-2 block">If you want momentum, keep reading.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// 5️⃣ WHAT CHANGES IN 90 DAYS
function WhatChangesSection() {
  const changes = [
    { title: "Physical consistency", description: "Your training becomes non-negotiable" },
    { title: "Mental clarity", description: "Less noise. More focus." },
    { title: "Structured discipline", description: "Systems that create reliability" },
    { title: "Identity shift", description: "You become someone different" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-card/30 grain-overlay" aria-label="What changes" data-testid="section-changes">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 fade-in-up text-foreground" data-testid="text-changes-title">
          What changes in 90 days
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {changes.map((change, i) => (
            <div
              key={i}
              className="border border-gold/20 bg-card/50 p-8 rounded-lg hover:border-gold/50 transition-all fade-in-up hover-elevate"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`change-card-${i}`}
            >
              <h3 className="text-gold font-serif text-2xl mb-3">{change.title}</h3>
              <p className="text-foreground/80 text-lg">{change.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <p className="text-foreground/90 text-xl md:text-2xl mb-3">
            Your days stop drifting.
          </p>
          <p className="text-gold font-serif text-3xl md:text-4xl italic">
            Your actions start compounding.
          </p>
        </div>
      </div>
    </section>
  );
}

// 6️⃣ HOW THE SYSTEM WORKS
function HowItWorksSection() {
  const components = [
    {
      number: "01",
      title: "Weekly Private Sessions",
      description: "45-minute sessions focused on direction, structure, and decisive action.",
    },
    {
      number: "02",
      title: "Personal Performance Protocol",
      description: "A tailored system built around your life. Training rhythm. Discipline anchors. Priority structure.",
    },
    {
      number: "03",
      title: "Daily Deposits System",
      description: "Simple daily actions that compound progress.",
    },
    {
      number: "04",
      title: "Monthly Performance Audit",
      description: "A structured review of your progress across body, focus, energy, and execution.",
    },
    {
      number: "05",
      title: "Performance Evolution",
      description: "As your life sharpens, your protocol evolves.",
    },
    {
      number: "06",
      title: "Fighter Foundations Bonus",
      description: "Structured introduction to movement, striking mechanics, and combat conditioning.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 grain-overlay" aria-label="How system works" data-testid="section-system">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-20 fade-in-up text-foreground" data-testid="text-system-title">
          How the system works
        </h2>

        <div className="space-y-12">
          {components.map((component, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start fade-in-up"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`component-${i}`}
            >
              <div className="flex-shrink-0">
                <span className="font-serif text-5xl md:text-6xl text-gold/30 font-light">{component.number}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-foreground font-serif text-2xl md:text-3xl mb-3">{component.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">{component.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7️⃣ PROCESS FLOW
function ProcessFlowSection() {
  const steps = ["Apply", "Build your system", "Execute with structure"];

  return (
    <section className="py-24 px-6 bg-card/20 border-y border-gold/20 grain-overlay" aria-label="Process flow" data-testid="section-process">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 fade-in-up text-foreground" data-testid="text-process-title">
          How this works
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold/10 border-2 border-gold/50 flex items-center justify-center">
                  <span className="text-gold font-serif text-2xl font-medium">{i + 1}</span>
                </div>
                <p className="text-foreground text-lg font-medium">{step}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-12 h-px bg-gold/30 mt-[-2rem]"></div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/80 text-xl fade-in-up">
          Simple. Focused. Effective.
        </p>
      </div>
    </section>
  );
}

// 8️⃣ TESTIMONIALS
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This gave me direction again",
      author: "Client",
      context: "8 weeks in"
    },
    {
      quote: "Structure over chaos finally makes sense",
      author: "Client",
      context: "12 weeks in"
    },
    {
      quote: "I operate at a different level now",
      author: "Client",
      context: "90 days"
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-card/40 grain-overlay" aria-label="Testimonials" data-testid="section-testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 fade-in-up text-foreground" data-testid="text-testimonials-title">
          Men who chose structure
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="bg-card border-gold/20 p-8 hover:border-gold/50 transition-all fade-in-up hover-elevate"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`testimonial-${i}`}
            >
              <MessageSquare className="w-8 h-8 text-gold/40 mb-6" />
              <blockquote className="text-foreground/90 text-xl font-serif italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <p className="text-muted-foreground">— {testimonial.author}</p>
                <p className="text-gold/70 text-xs mt-1">{testimonial.context}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground text-sm italic">
            Voice notes, screenshots, and detailed case studies available upon application review
          </p>
        </div>
      </div>
    </section>
  );
}

// 9️⃣ ABOUT JUAN
function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-6 grain-overlay" aria-label="About Juan" data-testid="section-about">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-12 fade-in-up text-foreground" data-testid="text-about-title">
          About Juan Grey
        </h2>

        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p className="fade-in-up">
            Juan Grey is an athlete, entrepreneur, and builder focused on discipline, performance, and purpose.
          </p>
          <p className="fade-in-up" style={{ transitionDelay: "100ms" }}>
            He competed at the national level in his early years and later transitioned into combat training,
            building a life structured around execution and growth.
          </p>
          <p className="fade-in-up" style={{ transitionDelay: "200ms" }}>
            For over a decade he has created tools and projects that have helped thousands reconnect with direction and purpose.
          </p>
          <p className="fade-in-up" style={{ transitionDelay: "300ms" }}>
            Today he trains globally while mentoring a small number of individuals privately.
          </p>
          <div className="pt-6 fade-in-up" style={{ transitionDelay: "400ms" }}>
            <p className="text-gold font-serif text-2xl md:text-3xl italic text-center">
              Structure creates clarity, and clarity creates momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 🔟 PRICING
function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card/30 grain-overlay" aria-label="Pricing" data-testid="section-pricing">
      <div className="max-w-3xl mx-auto">
        <div className="border-2 border-gold/30 bg-card/60 p-12 rounded-lg text-center fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-6">PRIVATE MENTORSHIP</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">90-Day Commitment</h2>
          <p className="text-muted-foreground text-lg mb-8">Paid monthly</p>

          <div className="mb-10">
            <span className="text-gold font-serif text-6xl md:text-7xl">$1,500</span>
            <span className="text-foreground/60 text-2xl ml-2">/ month</span>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="space-y-3 mb-10 text-foreground/80">
            <p>Limited spaces each cycle.</p>
            <p>Applications reviewed personally.</p>
          </div>

          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-black font-bold px-12 py-7 text-lg border-2 border-gold-dark shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-pricing-cta"
          >
            APPLY FOR MENTORSHIP
          </Button>
        </div>
      </div>
    </section>
  );
}

// 1️⃣1️⃣ FINAL CLOSE & APPLICATION
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
      <section id="apply" className="py-24 px-6 bg-black/60 grain-overlay" aria-label="Application submitted" data-testid="section-application-success">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center fade-in-up">
            <Check className="w-10 h-10 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 fade-in-up text-foreground" data-testid="text-success-title">
            Application Received
          </h2>
          <p className="text-foreground/80 text-lg fade-in-up" data-testid="text-success-message">
            We'll review your application and contact you within 24–48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-32 px-6 bg-black/60 grain-overlay" aria-label="Application form" data-testid="section-application">
      <div className="max-w-2xl mx-auto">
        {/* Final Close Copy */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 text-foreground leading-tight">
            The path sharpens those who commit to it.
          </h2>
          <p className="text-foreground/80 text-xl mb-4">
            This isn't for everyone.
          </p>
          <p className="text-gold font-serif text-2xl md:text-3xl italic">
            But if you know it's time to move differently, apply.
          </p>
        </div>

        <Separator className="mb-16 bg-gold/20" />

        {/* Application Form */}
        <div className="max-w-xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-center mb-4 fade-in-up text-foreground" data-testid="text-application-title">
            Apply
          </h3>
          <p className="text-muted-foreground text-center mb-10 fade-in-up" data-testid="text-application-description">
            Applications reviewed personally within 24–48 hours.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 fade-in-up">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-card/50 border-gold/20 focus:border-gold text-foreground h-12"
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
                    <FormLabel className="text-foreground font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-card/50 border-gold/20 focus:border-gold text-foreground h-12"
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
                    <FormLabel className="text-foreground font-medium">Current Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-card/50 border-gold/20 focus:border-gold text-foreground h-12" data-testid="select-fitness-level">
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
                    <FormLabel className="text-foreground font-medium">What are you focused on achieving?</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="bg-card/50 border-gold/20 focus:border-gold text-foreground min-h-[120px]"
                        placeholder="Describe your primary goals..."
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
                    <FormLabel className="text-foreground font-medium">Why are you applying?</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="bg-card/50 border-gold/20 focus:border-gold text-foreground min-h-[120px]"
                        placeholder="What's driving you to make this commitment?"
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
                className="w-full bg-gold hover:bg-gold-light text-black font-bold py-7 text-lg border-2 border-gold-dark shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                disabled={form.formState.isSubmitting}
                data-testid="button-submit-application"
              >
                {form.formState.isSubmitting ? "SUBMITTING..." : "APPLY"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gold/10 bg-black/40" aria-label="Footer" data-testid="section-footer">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-2xl text-gold mb-6">ASCENSION</p>
        <p className="text-muted-foreground text-sm mb-6" data-testid="text-copyright">
          © {new Date().getFullYear()} Private Mentorship. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
          <a href="#" className="text-muted-foreground hover:text-gold transition-colors" data-testid="link-privacy">
            Privacy Policy
          </a>
          <span className="text-muted-foreground/30" aria-hidden="true">·</span>
          <a href="mailto:contact@juangrey.com" className="text-muted-foreground hover:text-gold transition-colors" data-testid="link-contact">
            contact@juangrey.com
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
      <VideoSection />
      <PositioningStrip />
      <WhoThisIsForSection />
      <WhatChangesSection />
      <HowItWorksSection />
      <ProcessFlowSection />
      <TestimonialsSection />
      <AboutSection />
      <PricingSection />
      <ApplicationSection />
      <Footer />
    </main>
  );
}
