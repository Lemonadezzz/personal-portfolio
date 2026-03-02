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
      position: "Full Stack Developer",
      duration: "Sept 2023 - Present",
      description: "Architected and developed enterprise-grade internal applications using Laravel and React (MUI) to replace legacy Excel-based workflows.",
      logo: "/icons/tdci.png"
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jun 2023 - Nov 2024",
      description: "Built custom web solutions for clients. Specializing in full-stack development with Next.js, and MongoDB",
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
      description: "Maintained a consistent position on the Dean&apos;s List and demonstrated exceptional proficiency in both SQL and NoSQL databases.",
      logo: "/icons/sti.png"
    }
  ]

  return (
    <section id="about" className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Dev Experience</h3>
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-3 items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-10 w-10 rounded-lg object-cover bg-background"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h5 className="font-bold text-sm">{exp.position}</h5>
                            <p className="text-xs text-primary font-semibold">{exp.company}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{exp.duration}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Education</h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-3 items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="h-10 w-10 rounded-lg object-cover bg-background"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h5 className="font-bold text-sm">{edu.degree}</h5>
                            <p className="text-xs text-primary font-semibold">{edu.school}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{edu.duration}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
