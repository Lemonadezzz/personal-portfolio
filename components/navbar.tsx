"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold relative z-50">
          <span className="text-primary">Lemon</span>adezzz
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2 relative z-50">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={`absolute top-full left-0 w-full transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="bg-background/80 backdrop-blur-md rounded-lg shadow-lg border border-border/50 overflow-hidden animate-in fade-in duration-300">
              <nav className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="p-4">
                  <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
