"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [isErasing, setIsErasing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [terminalLines, setTerminalLines] = useState(0)

  // ── updated titles to reflect both roles
  const titles = ["Fullstack Web Developer", "Aspiring Cloud Engineer", "Building Web & Cloud"]

  const webChips = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"]
  const cloudChips = ["AWS EC2", "S3", "Lambda", "CloudFront"]

  useEffect(() => {
    setMounted(true)
    // reveal terminal lines one by one after mount
    let count = 0
    const interval = setInterval(() => {
      count++
      setTerminalLines(count)
      if (count >= 10) clearInterval(interval)
    }, 280)
    return () => clearInterval(interval)
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
      {/* ── existing background orbs ── */}
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
          animationDelay: "1s",
        }}
      />

      {/* ── new: topology grid overlay on right side ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(220,53,69,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,53,69,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 78% 50%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 78% 50%, black 0%, transparent 70%)",
        }}
      />

      {/* ── existing dot grid ── */}
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

      {/* ── existing floating shapes ── */}
      <div
        className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-primary/20 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-2/3 right-1/3 h-3 w-3 rounded-full bg-primary/15 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 h-2 w-2 rounded-full bg-primary/20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <Navbar />

      {/* ── main content: original wrapper → now a 2-col grid ── */}
      <div className="container mx-auto px-6 md:px-16 pt-24 flex items-center min-h-screen">
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >

          {/* ══════════════════════════════════
              LEFT COL — original content
          ══════════════════════════════════ */}
          <div>

            {/* Eyebrow label — unchanged */}
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

            {/* Main heading — unchanged */}
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

            {/* Typed subtitle — unchanged markup, updated titles array above */}
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

            {/* ── updated bio copy ── */}
            <p
              className="mb-6 text-muted-foreground"
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                maxWidth: "480px",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 0.4s",
              }}
            >
              I ship <strong className="text-foreground font-semibold">clean, responsive web apps</strong> and
              the infrastructure behind them. Bridging polished frontends with scalable cloud systems —
              one deploy at a time.
            </p>

            {/* ── new: AWS status badge ── */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                color: "#4ade80",
                border: "1px solid rgba(74,222,128,0.25)",
                background: "rgba(74,222,128,0.07)",
                padding: "7px 14px",
                marginBottom: "32px",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 0.45s",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  flexShrink: 0,
                  animation: "pulseDot 2s ease-in-out infinite",
                }}
              />
              Currently: AWS Solutions Architect track — SAA-C03
            </div>

            {/* CTA Buttons — "Download Resume" → "See My Stack →" */}
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
                  ;(e.currentTarget as HTMLElement).style.background = "#b02a37"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = "#dc3545"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                }}
              >
                View My Work
              </a>
              <a
                href="#skills"
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
                  ;(e.currentTarget as HTMLElement).style.borderColor = "#dc3545"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                }}
              >
                See My Stack →
              </a>
            </div>

            {/* Social icons — unchanged */}
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
                    ;(e.currentTarget as HTMLElement).style.color = "#dc3545"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(220,53,69,0.4)"
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════
              RIGHT COL — terminal card (new)
              hidden on mobile, shows on lg+
          ══════════════════════════════════ */}
          <div
            className="flex items-center justify-end"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "440px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--background))",
                fontFamily: "'Courier New', monospace",
                fontSize: "0.8rem",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Traffic-light title bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "11px 16px",
                  borderBottom: "1px solid hsl(var(--border))",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                <span
                  className="text-muted-foreground"
                  style={{ flex: 1, textAlign: "center", fontSize: "0.65rem", letterSpacing: "0.05em" }}
                >
                  adrian@portfolio ~ bash
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "18px 22px", lineHeight: 2.0 }}>

                {terminalLines >= 1 && (
                  <div style={{ display: "flex", gap: "8px", animation: "fadeSlideIn 0.25s ease" }}>
                    <span style={{ color: "#dc3545", userSelect: "none" }}>$</span>
                    <span style={{ color: "#a5b4fc" }}>whoami --full</span>
                  </div>
                )}
                {terminalLines >= 2 && (
                  <div className="text-muted-foreground" style={{ paddingLeft: "20px", animation: "fadeSlideIn 0.25s ease" }}>
                    name: <span style={{ color: "#86efac" }}>Adrian Ramirez</span>
                  </div>
                )}
                {terminalLines >= 3 && (
                  <div className="text-muted-foreground" style={{ paddingLeft: "20px", animation: "fadeSlideIn 0.25s ease" }}>
                    role: <span style={{ color: "#dc3545" }}>Fullstack Web Developer</span>
                  </div>
                )}
                {terminalLines >= 4 && (
                  <div
                    className="text-muted-foreground"
                    style={{ paddingLeft: "20px", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.4, animation: "fadeSlideIn 0.25s ease" }}
                  >
                    // web stack
                  </div>
                )}
                {terminalLines >= 5 && (
                  <div style={{ paddingLeft: "20px", display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "2px", animation: "fadeSlideIn 0.25s ease" }}>
                    {webChips.map((c) => (
                      <span
                        key={c}
                        style={{
                          fontSize: "0.6rem", padding: "2px 8px",
                          background: "rgba(220,53,69,0.1)", border: "1px solid rgba(220,53,69,0.3)",
                          color: "#dc3545",
                        }}
                      >{c}</span>
                    ))}
                  </div>
                )}

                {terminalLines >= 6 && (
                  <hr style={{ border: "none", borderTop: "1px solid hsl(var(--border))", margin: "8px 0", animation: "fadeSlideIn 0.25s ease" }} />
                )}

                {terminalLines >= 7 && (
                  <div style={{ display: "flex", gap: "8px", animation: "fadeSlideIn 0.25s ease" }}>
                    <span style={{ color: "#dc3545", userSelect: "none" }}>$</span>
                    <span style={{ color: "#a5b4fc" }}>cat cloud_path.txt</span>
                  </div>
                )}
                {terminalLines >= 8 && (
                  <div className="text-muted-foreground" style={{ paddingLeft: "20px", animation: "fadeSlideIn 0.25s ease" }}>
                    goal: <span style={{ color: "#dc3545" }}>Aspiring Cloud Engineer</span>
                  </div>
                )}
                {terminalLines >= 8 && (
                  <div className="text-muted-foreground" style={{ paddingLeft: "20px", animation: "fadeSlideIn 0.25s ease" }}>
                    track: <span style={{ color: "#86efac" }}>AWS SAA-C03</span>
                  </div>
                )}
                {terminalLines >= 9 && (
                  <div style={{ paddingLeft: "20px", display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "2px", animation: "fadeSlideIn 0.25s ease" }}>
                    {cloudChips.map((c) => (
                      <span
                        key={c}
                        style={{
                          fontSize: "0.6rem", padding: "2px 8px",
                          background: "rgba(125,211,252,0.08)", border: "1px solid rgba(125,211,252,0.25)",
                          color: "#7dd3fc",
                        }}
                      >{c}</span>
                    ))}
                  </div>
                )}

                {terminalLines >= 9 && (
                  <hr style={{ border: "none", borderTop: "1px solid hsl(var(--border))", margin: "8px 0", animation: "fadeSlideIn 0.25s ease" }} />
                )}

                {terminalLines >= 10 && (
                  <div style={{ display: "flex", gap: "8px", animation: "fadeSlideIn 0.25s ease" }}>
                    <span style={{ color: "#dc3545", userSelect: "none" }}>$</span>
                    <span style={{ color: "#a5b4fc" }}>git status</span>
                  </div>
                )}
                {terminalLines >= 10 && (
                  <div className="text-muted-foreground" style={{ paddingLeft: "20px", animation: "fadeSlideIn 0.25s ease" }}>
                    → <span style={{ color: "#86efac" }}>open for freelance projects</span>{" "}
                    <span style={{ color: "#4ade80", fontSize: "0.7rem" }}>●</span>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll down arrow — unchanged */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ArrowDown className="h-6 w-6" />
      </a>

      {/* ── styles: original + new keyframes ── */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(74, 222, 128, 0); }
        }
      `}</style>
    </section>
  )
}