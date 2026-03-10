"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"


export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  const projects = [
    {
      id: 1,
      title: "KrakenBoard",
      description:
        "An Agile Based Project Management System.",
      image: "/project1.svg?height=600&width=800",
      technologies: ["Laravel", "React", "SQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "obeliskv2",
      description: "A time management app.",
      image: "/project2.svg?height=600&width=800",
      technologies: ["Next.js", "MongoDB ", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://obeliskv2.vercel.app",
    },
    {
      id: 3,
      title: "ITAMS",
      description: "An IT Asset Management System.",
      image: "/project3.svg?height=600&width=800",
      technologies: ["Laravel", "React", "SQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    }
  ]

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center bg-secondary/50 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-10 right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-pulse-gentle" 
           style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 md:px-16 relative">

        {/* ── Left: text ── */}
          <div 
            ref={headerRef}
            className={`md:w-2/5 flex-shrink-0 mb-12 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-[2px] w-10 rounded-full bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                What I&apos;ve Built
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              My Projects
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
            </p>
          </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image || "/project1.svg"}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/Lemonadezzz" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

