"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

interface JobExperience {
  company: string
  position: string
  duration: string
  description: string
  logo: string
}

interface Education {
  school: string
  degree: string
  duration: string
  description: string
  logo: string
}

function TimelineItem({
  logo,
  title,
  subtitle,
  duration,
  description,
  isLast = false,
}: {
  logo: string
  title: string
  subtitle: string
  duration: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="relative flex gap-4">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
      )}

      {/* Logo node */}
      <div className="relative z-10 flex-shrink-0">
        <div className="h-10 w-10 rounded-xl overflow-hidden border border-border bg-background shadow-sm">
          <Image
            src={logo}
            alt={subtitle}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? "" : ""}`}>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
          <h5 className="font-bold text-foreground text-sm leading-tight">{title}</h5>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
        <p className="text-primary text-xs font-semibold mb-2 tracking-wide">{subtitle}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function About() {
  const experiences: JobExperience[] = [
    {
      company: "Target Display Co., Inc.",
      position: "Web Developer",
      duration: "Sept 2023 – Present",
      description:
        "Identified systemic inefficiencies in legacy Excel-based workflows to architect and develop custom, full-stack internal applications using Laravel, React, and MUI.",
      logo: "/icons/tdci.png",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jun 2023 – Nov 2024",
      description:
        "Built custom web solutions for clients, specializing in full-stack development with Next.js and MongoDB.",
      logo: "/icons/code.png",
    },
    {
      company: "NMS Philippines",
      position: "Web Developer Internship",
      duration: "Mar 2023 – May 2023",
      description:
        "Developed and maintained web applications using Laravel, React, and MUI. Collaborated with cross-functional teams to deliver high-quality solutions.",
      logo: "/icons/nms.png",
    },
  ]

  const education: Education[] = [
    {
      school: "STI College Baguio",
      degree: "BS Information Technology",
      duration: "Jul 2019 – Jul 2023",
      description:
        "Maintained a consistent position on the Dean's List and demonstrated exceptional proficiency in both SQL and NoSQL databases.",
      logo: "/icons/sti.png",
    },
  ]

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-16 md:py-24">
      {/* Floating decorative elements - theme adaptive */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl animate-float delay-500" 
           style={{ animationDelay: '1s' }} />
      
      {/* Decorative grid pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.07] pointer-events-none">
        <div className="grid grid-cols-8 gap-3 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="rounded-full bg-foreground" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative">

        {/* Section header — mirrors hero eyebrow style */}
        <div 
          ref={headerRef}
          className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-[2px] w-10 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Who I Am
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
        </div>

        {/* Bio */}
        <p 
          ref={bioRef}
          className={`text-muted-foreground text-base leading-relaxed max-w-2xl mb-16 transition-all duration-700 delay-200 ${
            bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I&apos;m a Developer based in the Philippines with a passion for building
          clean, performant digital products. I bridge the gap between technical infrastructure and
          modern frontend development — always looking to grow toward cloud engineering.
        </p>

        {/* Two-column timeline grid */}
        <div 
          ref={experienceRef}
          className={`grid md:grid-cols-2 gap-x-16 gap-y-12 transition-all duration-700 delay-300 ${
            experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          {/* Work Experience column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Work Experience</h3>
            </div>

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <TimelineItem
                  key={i}
                  logo={exp.logo}
                  title={exp.position}
                  subtitle={exp.company}
                  duration={exp.duration}
                  description={exp.description}
                  isLast={i === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education + CTA column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Education</h3>
            </div>

            <div className="space-y-0 mb-12">
              {education.map((edu, i) => (
                <TimelineItem
                  key={i}
                  logo={edu.logo}
                  title={edu.degree}
                  subtitle={edu.school}
                  duration={edu.duration}
                  description={edu.description}
                  isLast
                />
              ))}
            </div>

            {/* Stat callouts */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "10+", label: "Projects Shipped" },
                { value: "5+", label: "Happy Clients" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-secondary/30 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="transition-transform hover:-translate-y-0.5"
            >
              <a href="#contact">Let&apos;s Work Together</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}