"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface InternshipItem {
  role: string
  company: string
  duration: string
  description: string
}

interface ExperienceSectionProps {
  data: InternshipItem[]
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional internships and work experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block" />

          <div className="space-y-8">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-background hidden lg:block" />

                <div className="lg:ml-20">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{item.role}</CardTitle>
                            <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                              <Building className="w-4 h-4 mr-1" />
                              {item.company}
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex items-center w-fit">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
