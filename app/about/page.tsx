"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, CheckCircle, Sparkles, Globe, Star, Users, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <div className="text-7xl mb-6">🙏</div>
              <h1 className="text-5xl font-bold text-amber-900 mb-6">About Pandit Ji</h1>
              <p className="text-2xl text-amber-800 font-medium">Dedicated Spiritual Guide & Hindu Priest</p>
              <p className="text-lg text-amber-700 mt-4 max-w-2xl mx-auto">
                Serving the divine through traditional Hindu ceremonies and spiritual guidance for over 25 years
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-amber-800 leading-relaxed space-y-6">
                    <p className="text-xl">
                      With over 25 years of dedicated service to the Hindu community, our experienced Pandit Ji brings
                      profound spiritual wisdom and authentic traditional practices to every ceremony and teaching. His
                      life is devoted to preserving and sharing the sacred knowledge of our ancient traditions.
                    </p>

                    <p>
                      Born into a family of learned priests in the holy city of Varanasi, Pandit Ji was immersed in
                      spiritual practices from childhood. Under the guidance of his revered grandfather, he began
                      learning Sanskrit, Vedic mantras, and ritual procedures at the tender age of seven.
                    </p>

                    <p>
                      Pandit Ji completed his formal education at the prestigious Sampurnanand Sanskrit University in
                      Varanasi, where he earned his Acharya degree in Vedic Studies with specialization in Karma Kanda
                      (ritual practices) and Dharma Shastra (religious law). His thesis on "Traditional Puja Vidhi in
                      Modern Context" was highly acclaimed by scholars.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                    <CardTitle className="text-amber-900 flex items-center text-xl">
                      <Award className="h-6 w-6 mr-3" />
                      Education & Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Acharya in Vedic Studies</p>
                          <p className="text-sm text-amber-700">Sampurnanand Sanskrit University, Varanasi</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Specialization in Karma Kanda</p>
                          <p className="text-sm text-amber-700">Ritual practices and ceremonial procedures</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Jyotish Acharya</p>
                          <p className="text-sm text-amber-700">Vedic Astrology and Vastu Shastra</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Sanskrit Sahitya</p>
                          <p className="text-sm text-amber-700">Classical Sanskrit literature and poetry</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                    <CardTitle className="text-amber-900 flex items-center text-xl">
                      <Sparkles className="h-6 w-6 mr-3" />
                      Areas of Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Star className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Vedic Rituals & Ceremonies</p>
                          <p className="text-sm text-amber-700">All traditional Hindu pujas and samskaras</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Sanskrit Recitation</p>
                          <p className="text-sm text-amber-700">Perfect pronunciation and intonation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Spiritual Counseling</p>
                          <p className="text-sm text-amber-700">Personal guidance based on scriptures</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-900">Astrology & Vastu</p>
                          <p className="text-sm text-amber-700">Traditional Jyotish and architectural guidance</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                  <CardTitle className="text-amber-900 flex items-center text-xl">
                    <Globe className="h-6 w-6 mr-3" />
                    Languages & Communication
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-3">Fluent Languages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Hindi (Native)</span>
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">English (Fluent)</span>
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Sanskrit (Scholar)</span>
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Punjabi (Conversational)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-3">Service Areas</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Home visits available</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Temple ceremonies</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Community events</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-amber-600" />
                          <span className="text-amber-800">Online consultations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6 text-amber-100">Spiritual Philosophy</h3>
                    <blockquote className="text-xl italic text-amber-200 mb-6 leading-relaxed">
                      "True spirituality lies not in complex rituals, but in the sincere devotion of the heart. My
                      mission is to make ancient wisdom accessible to modern devotees while maintaining the sanctity and
                      authenticity of our sacred traditions."
                    </blockquote>
                    <p className="text-amber-300">- Pandit Ji</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">25+</div>
                    <h4 className="font-semibold text-amber-900 mb-2">Years of Service</h4>
                    <p className="text-amber-700">Dedicated spiritual guidance</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">1000+</div>
                    <h4 className="font-semibold text-amber-900 mb-2">Families Served</h4>
                    <p className="text-amber-700">Blessed through ceremonies</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">50+</div>
                    <h4 className="font-semibold text-amber-900 mb-2">Types of Pujas</h4>
                    <p className="text-amber-700">Traditional ceremonies offered</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
