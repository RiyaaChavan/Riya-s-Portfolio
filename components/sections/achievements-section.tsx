"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Medal, Star, Calendar, Sparkles, Crown, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AchievementItem {
  title: string
  details: string
  date: string
}

interface AchievementsSectionProps {
  data: AchievementItem[]
}

const achievementIcons = [Trophy, Award, Medal, Star]
const achievementColors = [
  "from-yellow-400 via-orange-500 to-red-500",
  "from-blue-500 via-purple-600 to-violet-600",
  "from-green-500 via-emerald-600 to-teal-600",
  "from-pink-500 via-rose-600 to-red-600",
]

const achievementBgs = [
  "from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20",
  "from-blue-50 via-purple-50 to-violet-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-violet-900/20",
  "from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20",
  "from-pink-50 via-rose-50 to-red-50 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-red-900/20",
]

export function AchievementsSection({ data }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-900/10 dark:to-orange-900/10" />

      {/* Floating achievement symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "71.2122979699276%", top: "53.85078836453301%", icon: 0 },
          { left: "46.48438704615342%", top: "99.03161204998564%", icon: 1 },
          { left: "60.57436332449198%", top: "54.953955024026335%", icon: 2 },
          { left: "49.832508310611814%", top: "15.495072255945242%", icon: 3 },
          { left: "48.730355464315124%", top: "57.216887807115604%", icon: 0 },
          { left: "59.46065001910345%", top: "63.33805618591241%", icon: 1 },
          { left: "24.521737381464526%", top: "10.618120474874182%", icon: 2 },
          { left: "94.87958202895308%", top: "66.97269558782443%", icon: 3 },
          { left: "90.56057025359664%", top: "93.79796273842351%", icon: 0 },
          { left: "2.185546783149772%", top: "81.07851852445516%", icon: 1 },
          { left: "61.739833020781134%", top: "90.45613289976583%", icon: 2 },
          { left: "31.96269285628445%", top: "96.89137768031203%", icon: 3 },
          { left: "91.08049309963778%", top: "61.310544615802534%", icon: 0 },
          { left: "51.342584862688234%", top: "55.69274585093725%", icon: 1 },
          { left: "82.5492116120808%", top: "4.774521694110955%", icon: 2 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + (i * 0.3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          >
            {item.icon % 4 === 0 && <Trophy className="w-6 h-6 text-yellow-400/30" />}
            {item.icon % 4 === 1 && <Award className="w-6 h-6 text-blue-400/30" />}
            {item.icon % 4 === 2 && <Medal className="w-6 h-6 text-green-400/30" />}
            {item.icon % 4 === 3 && <Star className="w-6 h-6 text-pink-400/30" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg"
          >
            <Crown className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="holographic">Achievements & Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Celebrating excellence in hackathons, competitions, and technical achievements
          </p>
        </motion.div>

        {/* Achievement Cards in Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {data.map((achievement, index) => {
            const IconComponent = achievementIcons[index % achievementIcons.length]
            const colorClass = achievementColors[index % achievementColors.length]
            const bgClass = achievementBgs[index % achievementBgs.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card
                  className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${bgClass} backdrop-blur-sm`}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gradient-to-br">
                    <div
                      className={`absolute -top-[60px] -right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] bg-gradient-to-br ${colorClass}`}
                    />
                  </div>

                  {/* Achievement rank indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      className={`w-8 h-8 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white font-bold text-sm">#{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <motion.div
                      className={`w-full h-full bg-gradient-to-br ${colorClass}`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), 
                                         radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                      }}
                    />
                  </div>

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      {/* Icon with animation */}
                      <motion.div
                        className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -10, 10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {achievement.title}
                        </motion.h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                          {achievement.details}
                        </p>

                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className={`flex items-center bg-gradient-to-r ${colorClass} text-white border-0 px-4 py-2`}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {achievement.date}
                          </Badge>

                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Sparkles className={`w-6 h-6 text-yellow-500`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                  />
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass border-0 shadow-xl max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 holographic">Achievement Highlights</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold holographic mb-2">{data.length}</div>
                  <p className="text-gray-600 dark:text-gray-400">Total Awards</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold holographic mb-2">6000+</div>
                  <p className="text-gray-600 dark:text-gray-400">Participants Competed</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold holographic mb-2">2</div>
                  <p className="text-gray-600 dark:text-gray-400">First Place Wins</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
