"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Sparkles, BookOpen, ChevronRight, Globe, Play, FileText } from "lucide-react"

export default function LessonsPage() {
  const scriptures = [
    {
      name: "Bhagavad Gita",
      description: "Divine discourse between Lord Krishna and Arjuna on dharma, karma, and spiritual wisdom",
      lessons: "Weekly classes every Tuesday at 7:00 PM",
      chapters: 18,
      duration: "6 months course",
      benefits: ["Life guidance", "Stress management", "Spiritual growth", "Decision making"],
      topics: ["Dharma and Duty", "Karma Yoga", "Bhakti Yoga", "Meditation", "Self-realization"],
    },
    {
      name: "Shrimad Bhagwatam",
      description: "Sacred stories of Lord Krishna and spiritual teachings for devotional practice",
      lessons: "Monthly discourse sessions - First Sunday of every month",
      chapters: 12,
      duration: "12 months course",
      benefits: ["Devotional growth", "Krishna consciousness", "Moral values", "Spiritual stories"],
      topics: ["Krishna Leela", "Devotional practices", "Spiritual stories", "Divine love", "Surrender"],
    },
    {
      name: "Vedic Stotras",
      description: "Sacred hymns and their meanings for daily worship and spiritual practice",
      lessons: "Learn pronunciation and significance - Every Saturday",
      chapters: "Various",
      duration: "3 months course",
      benefits: ["Correct pronunciation", "Spiritual vibrations", "Daily worship", "Mental peace"],
      topics: ["Vishnu Sahasranama", "Lalita Sahasranama", "Hanuman Chalisa", "Gayatri Mantra", "Daily prayers"],
    },
    {
      name: "Ramayana",
      description: "Epic tale of Lord Rama's life journey and teachings on ideal living",
      lessons: "Monthly storytelling sessions - Second Sunday",
      chapters: 7,
      duration: "8 months course",
      benefits: ["Moral guidance", "Family values", "Ideal behavior", "Devotional stories"],
      topics: ["Rama's virtues", "Sita's devotion", "Hanuman's service", "Dharmic living", "Victory of good"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="text-5xl font-bold text-amber-900 mb-6">Lessons & Scriptures</h1>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                Learn sacred texts and their spiritual meanings through structured courses, weekly discourses, and
                personal guidance from experienced spiritual teacher.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {scriptures.map((scripture, index) => (
                <motion.div
                  key={scripture.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                      <div className="flex items-center mb-3">
                        <div className="text-4xl mr-4">📖</div>
                        <div>
                          <CardTitle className="text-amber-900 text-2xl">{scripture.name}</CardTitle>
                          <Badge className="mt-2 bg-amber-200 text-amber-800">{scripture.duration}</Badge>
                        </div>
                      </div>
                      <CardDescription className="text-amber-800 text-base leading-relaxed">
                        {scripture.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Class Schedule
                          </h4>
                          <p className="text-amber-800">{scripture.lessons}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Benefits
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {scripture.benefits.map((benefit, i) => (
                              <Badge key={i} variant="outline" className="border-amber-300 text-amber-700">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Topics Covered
                          </h4>
                          <ul className="space-y-2">
                            {scripture.topics.map((topic, i) => (
                              <li key={i} className="flex items-center text-amber-800">
                                <ChevronRight className="h-4 w-4 mr-2 text-amber-600" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-amber-50 rounded border border-amber-200">
                            <div className="font-semibold text-amber-900">{scripture.chapters}</div>
                            <div className="text-sm text-amber-700">Chapters</div>
                          </div>
                          <div className="text-center p-3 bg-amber-50 rounded border border-amber-200">
                            <div className="font-semibold text-amber-900">{scripture.duration}</div>
                            <div className="text-sm text-amber-700">Duration</div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Join Classes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">Weekly Discourses</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
                  <div className="text-3xl mb-3">🌅</div>
                  <h4 className="font-semibold text-amber-900 mb-2">Morning Discourse</h4>
                  <p className="text-amber-800 mb-3">Daily spiritual wisdom sessions</p>
                  <p className="text-sm text-amber-700">Every day at 6:00 AM - 7:00 AM</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
                  <div className="text-3xl mb-3">🌙</div>
                  <h4 className="font-semibold text-amber-900 mb-2">Evening Satsang</h4>
                  <p className="text-amber-800 mb-3">Community spiritual gathering</p>
                  <p className="text-sm text-amber-700">Every Sunday at 6:00 PM - 8:00 PM</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
                  <div className="text-3xl mb-3">❓</div>
                  <h4 className="font-semibold text-amber-900 mb-2">Q&A with Pandit Ji</h4>
                  <p className="text-amber-800 mb-3">Personal spiritual guidance</p>
                  <p className="text-sm text-amber-700">Every Thursday at 7:00 PM - 8:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white rounded-2xl p-8"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Online Learning Platform</h3>
                <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                  Can't attend in person? Join our online classes and access recorded sessions, study materials, and
                  interactive discussions.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Globe className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Live Online Classes</h4>
                    <p className="text-amber-200">Interactive sessions via video call</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Play className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Recorded Sessions</h4>
                    <p className="text-amber-200">Access previous classes anytime</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <FileText className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Study Materials</h4>
                    <p className="text-amber-200">Downloadable texts and guides</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
