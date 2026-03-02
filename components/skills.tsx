"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skills = [
  { name: "Laravel", icon: "/icons/laravel.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Inertia", icon: "/icons/inertia.png" },
  { name: "Material UI", icon: "/icons/material.png" },
  { name: "Google Cloud", icon: "/icons/gcloud.png" },
]

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-pulse-gentle" 
           style={{ animationDelay: '1s' }} />

      {/* Decorative background geometry */}
      <div className="pointer-events-none absolute top-16 right-10 grid grid-cols-4 gap-[10px] opacity-[0.15] animate-float">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-[3px] w-[3px] rounded-full bg-primary" />
        ))}
      </div>
      
      <div className="pointer-events-none absolute bottom-16 left-10 grid grid-cols-4 gap-[10px] opacity-[0.15] animate-float" style={{ animationDelay: '2s' }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-[3px] w-[3px] rounded-full bg-primary" />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-16 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">

          {/* ── Left: text ── */}
          <div 
            ref={headerRef}
            className={`md:w-2/5 flex-shrink-0 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-[2px] w-10 rounded-full bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Technologies
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              My Stack
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I&apos;ve worked with a variety of technologies in the web development world. Here are
              some of the tools and technologies I&apos;m proficient with.
            </p>
          </div>

          {/* ── Right: skill grid ── */}
          <div 
            ref={gridRef}
            className={`flex-1 transition-all duration-700 delay-200 ${
              gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-5
                             transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 cursor-default
                             animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(220,53,69,0.12)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = ""
                  }}
                >
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background
                                  group-hover:border-primary/30 transition-colors duration-300 shadow-sm">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg?height=32&width=32"
                      }}
                    />
                  </div>

                  {/* Label */}
                  <span className="relative z-10 text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-center leading-tight">
                    {skill.name}
                  </span>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary
                                  group-hover:w-8 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}