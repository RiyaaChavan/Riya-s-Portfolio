"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EducationItem {
  degree: string
  institution: string
  grade: string
  year: string
}

interface EducationSectionProps {
  data: EducationItem[]
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10"
    >
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
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </motion.div>

        <div className="grid gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">{item.institution}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.year}
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Grade: {item.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
