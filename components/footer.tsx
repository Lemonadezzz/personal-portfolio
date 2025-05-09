import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-primary">Lemon</span>adezzz
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              A passionate full-stack developer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Lemonadezzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramirezadrianfrancis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/lemonaidssssss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Adrian Ramirez. All rights reserved.</p>

          <p className="text-muted-foreground text-sm mt-4 md:mt-0 flex items-center">
            Made with
            <span className="mx-1 inline-flex gap-2">
              {/* Next.js Icon */}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Next.js"
              >
                <svg className="h-4 w-4" viewBox="0 0 180 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_408_139"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="180"
                    height="180"
                  >
                    <circle cx="90" cy="90" r="90" fill="black" />
                  </mask>
                  <g mask="url(#mask0_408_139)">
                    <circle cx="90" cy="90" r="90" fill="currentColor" />
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#paint0_linear_408_139)"
                    />
                    <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)" />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_408_139"
                      x1="109"
                      y1="116.5"
                      x2="144.5"
                      y2="160.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_408_139"
                      x1="121"
                      y1="54"
                      x2="120.799"
                      y2="106.875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </span>
            by Adrian Ramirez
          </p>
        </div>
      </div>
    </footer>
  )
}

