"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Globe, Wrench, Users, Zap, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { getTechIcon } from "@/lib/tech-icons"

interface SkillsData {
  languages: string[]
  ml_dl: string[]
  nlp: string[]
  web: string[]
  big_data: string[]
  databases: string[]
  tools: string[]
  soft_skills: string[]
}

interface SkillsSectionProps {
  data: SkillsData
}

const skillCategories = [
  {
    id: "languages",
    label: "Programming Languages",
    icon: Code,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    description: "Core programming languages I work with",
  },
  {
    id: "ml_dl",
    label: "Machine Learning & AI",
    icon: Brain,
    color: "from-purple-500 via-violet-500 to-indigo-500",
    bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    description: "AI/ML frameworks and libraries",
  },
  {
    id: "nlp",
    label: "Natural Language Processing",
    icon: Zap,
    color: "from-green-500 via-emerald-500 to-teal-500",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    description: "NLP tools and technologies",
  },
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    color: "from-orange-500 via-red-500 to-pink-500",
    bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    description: "Frontend and backend technologies",
  },
  {
    id: "big_data",
    label: "Big Data & Cloud",
    icon: Cpu,
    color: "from-indigo-500 via-purple-500 to-pink-500",
    bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
    description: "Big data processing and cloud platforms",
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    color: "from-teal-500 via-cyan-500 to-blue-500",
    bgColor: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
    description: "Database technologies and systems",
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: Wrench,
    color: "from-yellow-500 via-orange-500 to-red-500",
    bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    description: "Development tools and platforms",
  },
  {
    id: "soft_skills",
    label: "Soft Skills",
    icon: Users,
    color: "from-pink-500 via-rose-500 to-red-500",
    bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    description: "Leadership and communication skills",
  },
]

export function SkillsSection({ data }: SkillsSectionProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-300/30 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="holographic">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development, and emerging technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const skills = data[category.id as keyof SkillsData] || []

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group"
              >
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d bg-gradient-to-br ${category.bgColor} backdrop-blur-sm`}
                >
                  <CardContent className="p-4">
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                          {category.label}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{category.description}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {skills.slice(0, hoveredCategory === category.id ? skills.length : 6).map((skill, skillIndex) => {
                          const TechIcon = getTechIcon(skill);
                          return (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                              className="text-center"
                            >
                              <div 
                                className={`flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 hover:bg-opacity-20 text-gray-800 dark:text-gray-200 hover:scale-105 transition-all duration-200 shadow-sm h-full`}
                              >
                                <TechIcon className="w-6 h-6 mb-1" />
                                <p className="text-xs font-medium truncate w-full text-center">{skill}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {skills.length > 6 && hoveredCategory !== category.id && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-2">
                          <Badge variant="outline" className="text-xs text-gray-500 dark:text-gray-400">
                            +{skills.length - 6} more
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    {/* Skill count indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skills.length} skills</span>
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 holographic">Technical Expertise Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => {
                  const skills = data[category.id as keyof SkillsData] || []
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div
                        className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">{skills.length}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {category.label.split(" ")[0]}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
