import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
                <img
                  src="/picture1.svg?height=600&width=600"
                  alt="Adrian Ramirez"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 w-full h-full rounded-2xl -z-10"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Web Developer based in Baguio City, Philippines</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate web developer with 2 years of experience creating modern, responsive web applications. I
              specialize in React, Svelte, Next.js, Laravel, and I&apos;m dedicated to writing clean, efficient, and reusable code that
              delivers both exceptional user and developer experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Code className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-bold">Development</h4>
                    <p className="text-sm text-muted-foreground">2+ years</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Briefcase className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-bold">Experience</h4>
                    <p className="text-sm text-muted-foreground">Web Developer Internship<br/><b>@NMS Philippines</b> <br/>Freelance Developer</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-bold">Education</h4>
                    <p className="text-sm text-muted-foreground">B.S. Information Technology<br/><b>@STI College Baguio</b></p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Code className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-bold">Projects</h4>
                    <p className="text-sm text-muted-foreground">3 completed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button asChild>
              <a href="#contact">Let&apos;s Work Together</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

