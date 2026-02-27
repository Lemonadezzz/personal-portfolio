import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

export default function About() {
  const experiences: JobExperience[] = [
    {
      company: "Target Display Co., Inc.",
      position: "IT Specialist",
      duration: "Sept 2023 - Present",
      description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality solutions.",
      logo: "/icons/tdci.png"
    },
    {
      company: "Freelance",
      position: "Web Developer / Project Manager",
      duration: "Jun 2023 - Nov 2024",
      description: "Building custom web solutions for clients. Specializing in full-stack development with React, Next.js, and Node.js.",
      logo: "/icons/code.png"
    },
    {
      company: "NMS Philippines",
      position: "Web Developer Internship",
      duration: "Mar 2023 - May 2023",
      description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality solutions.",
      logo: "/icons/nms.png"
    }
  ]

  const education: Education[] = [
    {
      school: "STI College Baguio",
      degree: "BS Information Technology",
      duration: "Jul 2019 - Jul 2023",
      description: "Maintained a consistent position on the Dean's List and demonstrated exceptional proficiency in both SQL and NoSQL databases.",
      logo: "/icons/sti.png"
    }
  ]

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
                  src="/placeholder.svg?height=600&width=600"
                  alt="Adrian Ramirez "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 w-full h-full rounded-2xl -z-10"></div>
            </div>
          </div>

          <div> 
            <h4 className="font-bold text-lg mb-4">Education</h4>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex gap-4 items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="h-12 w-12 rounded-lg object-cover bg-background"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold">{edu.degree}</h5>
                            <p className="text-sm text-primary font-semibold">{edu.school}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{edu.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h4 className="font-bold text-lg mb-4">Work Experience</h4>
            <div className="space-y-4 mb-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex gap-4 items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-12 w-12 rounded-lg object-cover bg-background"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold">{exp.position}</h5>
                            <p className="text-sm text-primary font-semibold">{exp.company}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{exp.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild>
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
