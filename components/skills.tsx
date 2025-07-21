"use client"
import Image from "next/image"

export default function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies in the web development world. Here are some of the tools and
            technologies I&apos;m proficient with.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Laravel", icon: "/icons/laravel.png" },
            { name: "React", icon: "/icons/react.png" },
            { name: "Inertia", icon: "/icons/inertia.png" },
            { name: "Material UI", icon: "/icons/material.png" },
            { name: "Git", icon: "/icons/git.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-secondary hover:bg-secondary/80 border border-border rounded-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-md"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                  className="max-w-full max-h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=48&width=48`
                  }}
                />
              </div>
              <div className="font-medium text-foreground text-sm">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
