"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContactData {
  email: string
  github: string
  linkedin: string
  resume: string
}

interface ContactSectionProps {
  data: ContactData
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm always open to discussing new opportunities, innovative projects, or just having a conversation
                    about AI, ML, and technology. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 h-auto hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        asChild
                      >
                        <a href={`mailto:${data.email}`}>
                          <Mail className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="text-left">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-gray-500">{data.email}</div>
                          </span>
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 h-auto hover:bg-purple-50 dark:hover:bg-purple-900/20"
                        asChild
                      >
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-3 text-purple-600" />
                          <span className="text-left">
                            <div className="font-medium">LinkedIn</div>
                            <div className="text-sm text-gray-500">Professional Network</div>
                          </span>
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 h-auto hover:bg-gray-50 dark:hover:bg-gray-700"
                        asChild
                      >
                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-3 text-gray-600" />
                          <span className="text-left">
                            <div className="font-medium">GitHub</div>
                            <div className="text-sm text-gray-500">Code Repository</div>
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Send className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start?</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Download my resume or send me a message to get started on your next project.
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href={data.resume} target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
