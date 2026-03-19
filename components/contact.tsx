"use client"

import type React from "react"

import emailjs from '@emailjs/browser'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 })

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    // Send user's message to you (EmailJS will handle auto-reply)
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      e.currentTarget,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    
    console.log('Email sent successfully')
    setIsSubmitted(true)
  } catch (error) {
    console.error('Email send failed:', error)
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float" 
           style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 md:px-16 relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
            form below or through my contact information.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`flex flex-col md:flex-row gap-8 max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="w-full md:w-auto">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold">Email</h3>
                  <a
                    href="mailto:ramirezadrianfrancis@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block overflow-wrap break-word"
                  >
                    ramirezadrianfrancis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold">Phone</h3>
                  <a href="tel:+639663689364" className="text-muted-foreground hover:text-primary transition-colors text-sm block overflow-wrap break-word">
                    (+63) 966 368 9364
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground text-sm overflow-wrap break-word">Baguio City, Philippines</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" name="user_name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" name="user_email" type="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Subject of your message"  required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message"  rows={6} required />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Copyright notice */}
        <div className="text-center mt-16 pb-20">
          <p className="text-xs text-muted-foreground">
            © 2026 All rights reserved Adrian Ramirez
          </p>
        </div>
      </div>
    </section>
  )
}
