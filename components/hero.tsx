"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [isErasing, setIsErasing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const titles = ["Full Stack Developer", "Aspiring Cloud Engineer" ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isErasing) {
      // Typing phase
      if (typedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1))
        }, 100)
      } else {
        // Finished typing, wait before erasing
        timeout = setTimeout(() => {
          setIsErasing(true)
        }, 2000)
      }
    } else {
      // Erasing phase
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
      } else {
        // Finished erasing, move to next title
        setIsErasing(false)
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, isErasing, currentIndex, titles])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Adrian Ramirez</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build responsive, user-friendly web applications with modern technologies. Passionate about creating
            seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Lemonadezzz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/ramirezadrianfrancis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/lemonaidssssss" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
