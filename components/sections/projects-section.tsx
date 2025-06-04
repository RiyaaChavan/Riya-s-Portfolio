"use client"

import { motion } from "framer-motion"
import { Code, Github, ExternalLink, Sparkles, Zap, Brain, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTechIcon } from "@/lib/tech-icons"

interface ProjectItem {
  title: string
  techStack: string[]
  description: string
  github?: string
  website?: string
}

interface ProjectsSectionProps {
  data: ProjectItem[]
}

const projectIcons = [Brain, Zap, Database, Code]
const projectColors = [
  "from-violet-500 via-purple-600 to-indigo-600",
  "from-cyan-500 via-blue-600 to-indigo-600",
  "from-emerald-500 via-teal-600 to-cyan-600",
  "from-orange-500 via-red-600 to-pink-600",
]

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-purple-900/10" />

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "1.118445082651931%", top: "43.025112420062996%", symbol: "<>" },
          { left: "29.862072673687056%", top: "14.882370833011048%", symbol: "{}" },
          { left: "72.34560858742557%", top: "24.97220397425067%", symbol: "[]" },
          { left: "45.805809525664785%", top: "77.97245967544978%", symbol: "()" },
          { left: "77.53130583893082%", top: "85.57528577047037%", symbol: "/>" },
          { left: "81.98184255448582%", top: "50.35300350548527%", symbol: "</" },
          { left: "38.83123253348136%", top: "24.746708801293614%", symbol: "&&" },
          { left: "28.71978885270472%", top: "62.9795097778579%", symbol: "||" },
          { left: "3.772004760376668%", top: "87.81615320813849%", symbol: "<>" },
          { left: "9.02022687926296%", top: "49.69213211157643%", symbol: "{}" },
          { left: "99.51437750092518%", top: "90.04371060824657%", symbol: "[]" },
          { left: "1.201697786413991%", top: "61.71903120009722%", symbol: "()" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-mono text-violet-200/20 dark:text-violet-500/10"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + (i * 0.5),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-6 shadow-lg"
          >
            <Code className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="holographic">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions combining AI, ML, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid with Alternating Layouts */}
        <div className="space-y-12">
          {data.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length]
            const colorClass = projectColors[index % projectColors.length]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Project Visual/Icon Side */}
                    <div
                      className={`${isEven ? "order-1" : "order-2 lg:order-1"} lg:col-span-1 relative overflow-hidden`}
                    >
                      <div
                        className={`h-full min-h-[180px] bg-gradient-to-br ${colorClass} flex items-center justify-center relative`}
                      >
                        {/* Animated background pattern */}
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), 
                                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                            }}
                          />
                        </motion.div>

                        {/* Main icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                        </motion.div>

                        {/* Floating tech icons */}
                        <motion.div
                          className="absolute top-3 right-3 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-4 left-4 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Code className="w-2.5 h-2.5 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Content Side */}
                    <div
                      className={`${isEven ? "order-2" : "order-1 lg:order-2"} lg:col-span-3 p-4 flex flex-col justify-center`}
                    >
                      <CardHeader className="p-0 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {project.title}
                          </CardTitle>

                          <div className="flex space-x-2">
                            {project.github && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
                                asChild
                              >
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-5 h-5" />
                                </a>
                              </Button>
                            )}
                            {project.website ? (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
                                asChild
                              >
                                <a href={project.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-violet-100 dark:hover:bg-violet-900/20 opacity-50"
                                disabled
                              >
                                <ExternalLink className="w-5 h-5" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack with Creative Layout */}
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech, techIndex) => {
                              const TechIcon = getTechIcon(tech);
                              return (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className={`px-2 py-0.5 text-xs bg-gradient-to-r ${colorClass} text-white hover:shadow-lg transition-all duration-200 font-medium flex items-center gap-1`}
                                  >
                                    <TechIcon className="w-3 h-3" />
                                    <span>{tech}</span>
                                  </Badge>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Project Stats/Features */}
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                          <div className="text-center">
                            <div className="text-lg font-bold holographic">AI</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Powered</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold holographic">Full</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Stack</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold holographic">Open</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Source</div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 holographic">Interested in Collaboration?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's build something amazing together. Check out my GitHub for more projects!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://github.com/RiyaaChavan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
