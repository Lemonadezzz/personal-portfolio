"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [isErasing, setIsErasing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  const titles = ["Full Stack Developer", "Aspiring Cloud Engineer"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isErasing) {
      if (typedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsErasing(true)
        }, 2000)
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
      } else {
        setIsErasing(false)
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, isErasing, currentIndex, titles])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Enhanced background accent — large faded red orb top-right with animation */}
      <div
        className="animate-pulse-gentle"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(220,53,69,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom-left subtle orb with float animation */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(220,53,69,0.06) 0%, transparent 80%)",
          pointerEvents: "none",
          animationDelay: '1s',
        }}
      />
      
      {/* Animated grid pattern */}
      <div className="absolute top-20 left-20 pointer-events-none opacity-[0.08]">
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 36 }).map((_, i) => (
            <div 
              key={i} 
              className="h-1 w-1 rounded-full bg-primary animate-pulse-gentle"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating decorative shapes */}
      <div 
        className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-primary/20 animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      <div 
        className="absolute top-2/3 right-1/3 h-3 w-3 rounded-full bg-primary/15 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div 
        className="absolute top-1/2 left-1/4 h-2 w-2 rounded-full bg-primary/20 animate-float"
        style={{ animationDelay: '2s' }}
      />

      <Navbar />

      <div className="container mx-auto px-6 md:px-16 pt-24 flex items-center min-h-screen">
        <div
          className="max-w-2xl"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Eyebrow label */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease 0.1s" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "40px",
                height: "2px",
                background: "#dc3545",
                borderRadius: "2px",
              }}
            />
            <span style={{ color: "#dc3545", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Portfolio
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-bold mb-4 text-foreground"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.7s ease 0.2s",
            }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "#dc3545" }}>Adrian<br />Ramirez</span>
          </h1>

          {/* Typed subtitle */}
          <h2
            className="font-medium mb-6 text-muted-foreground"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              minHeight: "2rem",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.7s ease 0.3s",
            }}
          >
            {typedText}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.2em",
                background: "#dc3545",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          </h2>

          {/* Description */}
          <p
            className="mb-10 text-muted-foreground"
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "480px",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.7s ease 0.4s",
            }}
          >
            I build responsive, user-friendly web applications with modern technologies.
            Passionate about creating seamless digital experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-10"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#dc3545",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#b02a37"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#dc3545"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-foreground"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "transparent",
                fontWeight: 600,
                fontSize: "0.95rem",
                borderRadius: "6px",
                textDecoration: "none",
                border: "1.5px solid hsl(var(--border))",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#dc3545"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              Download Resume
            </a>
          </div>

          {/* Social icons */}
          <div
            className="flex items-center gap-5"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease 0.6s" }}
          >
            {[
              { href: "https://github.com/Lemonadezzz", label: "GitHub", icon: <Github className="h-5 w-5" /> },
              { href: "https://linkedin.com/in/ramirezadrianfrancis", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
              { href: "https://x.com/lemonaidssssss", label: "Twitter", icon: <Twitter className="h-5 w-5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1.5px solid hsl(var(--border))",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#dc3545"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(220,53,69,0.4)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ArrowDown className="h-6 w-6" />
      </a>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}