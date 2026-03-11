"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hideNav, setHideNav] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Hide nav after hero section
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setHideNav(window.scrollY > heroBottom - 100)
      }

      // Scrollspy logic
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        } ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#home" className="text-xl font-bold">
            <span className="text-primary">Lemon</span>adezzz
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Scrollspy navigation - responsive */}
      <nav className="fixed top-1/2 -translate-y-1/2 right-6 z-50 hidden md:flex flex-col gap-4">
        {navLinks.map((link) => {
          const sectionId = link.href.substring(1)
          const isActive = activeSection === sectionId
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 group"
              title={link.name}
            >
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {link.name}
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-300 ${
                  isActive ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30 group-hover:w-6 group-hover:bg-muted-foreground/50"
                }`}
              />
            </Link>
          )
        })}
      </nav>

      {/* Mobile scrollspy - vertical line with indicators */}
      <nav className="fixed top-1/2 -translate-y-1/2 right-4 z-50 md:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />
          
          {/* Indicators */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                  title={link.name}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? "bg-primary border-primary scale-125" 
                        : "bg-background border-border group-hover:border-primary group-hover:scale-110"
                    }`}
                  />
                  {/* Active section label */}
                  {isActive && (
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-medium text-primary whitespace-nowrap animate-fade-in">
                      {link.name}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Back to top button - shows at contact section */}
      {activeSection === "contact" && (
        <Button
          size="icon"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full shadow-lg animate-fade-in-up"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
