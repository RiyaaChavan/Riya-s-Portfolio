"use client"

import { motion } from "framer-motion"
import { MapPin, Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  data: {
    name: string
    tagline: string
    location: string
    description: string
  }
  contact: {
    email: string
    github: string
    linkedin: string
    resume: string
  }
}

export function HeroSection({ data, contact }: HeroSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 mb-6 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {data.location}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-slate-900 dark:text-white">{data.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium"
            >
              {data.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                asChild
              >
                <a href={contact.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8"
                asChild
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center space-x-6 mt-8"
            >
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main professional avatar */}
              <motion.div
                className="relative w-80 h-80 mx-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Outer professional ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-2">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700" />
                </div>

                {/* Inner avatar with initials */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl">
                  <span className="text-6xl font-bold text-white">
                    {data.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Professional badges around avatar */}
                <motion.div
                  className="absolute -top-4 right-8 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">AI</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                >
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">ML</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-6 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-6 h-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Professional decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-16 left-16 w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-full opacity-60" />
                <div className="absolute top-24 right-20 w-1 h-1 bg-indigo-300 dark:bg-indigo-600 rounded-full opacity-60" />
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full opacity-60" />
                <div className="absolute bottom-16 right-16 w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-full opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
