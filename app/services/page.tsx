"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Clock, Sparkles, CheckCircle, ChevronRight, Calendar, MessageCircle } from "lucide-react"

export default function ServicesPage() {
  const pujaServices = [
    {
      name: "Satyanarayan Puja",
      description:
        "Sacred ritual for prosperity, peace, and divine blessings. Includes complete katha recitation and prasad distribution.",
      duration: "2-3 hours",
      price: "₹2,100 - ₹5,100",
      benefits: ["Removes obstacles", "Brings prosperity", "Family harmony", "Divine protection"],
      includes: ["Complete puja samagri", "Katha recitation", "Prasad preparation", "Aarti ceremony"],
    },
    {
      name: "Grah Shanti Puja",
      description:
        "Comprehensive planetary peace ceremony to harmonize cosmic energies and remove astrological doshas.",
      duration: "3-4 hours",
      price: "₹3,100 - ₹7,100",
      benefits: ["Planetary peace", "Dosha removal", "Mental tranquility", "Career growth"],
      includes: ["Navagraha worship", "Mantra chanting", "Havan ceremony", "Yantra installation"],
    },
    {
      name: "Rudrabhishek",
      description:
        "Sacred abhishek of Lord Shiva with milk, honey, and holy water. Powerful ritual for spiritual purification.",
      duration: "1-2 hours",
      price: "₹1,100 - ₹3,100",
      benefits: ["Spiritual purification", "Health improvement", "Stress relief", "Divine grace"],
      includes: ["Shiva lingam abhishek", "Rudra mantra chanting", "Bilva patra offering", "Sacred ash prasad"],
    },
    {
      name: "Ganesh Puja",
      description: "Auspicious ceremony to invoke Lord Ganesha's blessings for new beginnings and obstacle removal.",
      duration: "1-2 hours",
      price: "₹1,100 - ₹2,100",
      benefits: ["Obstacle removal", "New venture success", "Wisdom enhancement", "Good fortune"],
      includes: ["Ganesh murti worship", "Modak offering", "Mantra recitation", "Aarti ceremony"],
    },
    {
      name: "Lakshmi Puja",
      description: "Divine worship of Goddess Lakshmi for wealth, prosperity, and abundance in all aspects of life.",
      duration: "2 hours",
      price: "₹1,500 - ₹3,500",
      benefits: ["Wealth attraction", "Business growth", "Financial stability", "Abundance mindset"],
      includes: ["Lakshmi yantra worship", "Lotus flower offerings", "Prosperity mantras", "Coin prasad"],
    },
    {
      name: "Havan/Yagna",
      description:
        "Sacred fire ceremony for purification, healing, and invoking divine energies through Vedic rituals.",
      duration: "2-3 hours",
      price: "₹2,500 - ₹6,500",
      benefits: ["Environmental purification", "Spiritual cleansing", "Positive energy", "Divine protection"],
      includes: ["Sacred fire setup", "Vedic mantras", "Ghee offerings", "Prasad distribution"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="text-5xl font-bold text-amber-900 mb-6">All Puja & Services</h1>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                Sacred ceremonies performed with traditional authenticity and deep spiritual devotion. Each ritual is
                conducted according to ancient Vedic traditions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {pujaServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-4xl">🪔</div>
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">{service.price}</Badge>
                      </div>
                      <CardTitle className="text-amber-800 text-2xl mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-amber-700 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center text-amber-700">
                          <Clock className="h-5 w-5 mr-3 text-amber-600" />
                          <span className="font-medium">Duration: {service.duration}</span>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Benefits
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, i) => (
                              <Badge key={i} variant="outline" className="border-amber-300 text-amber-700">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Includes
                          </h4>
                          <ul className="space-y-1">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-amber-700">
                                <ChevronRight className="h-3 w-3 mr-2 text-amber-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book This Puja
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
              transition={{ delay: 0.8 }}
              className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">Custom Puja Services</h3>
                <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
                  Need a specific puja or ceremony not listed above? We offer customized spiritual services based on
                  your family's traditions and requirements.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact for Custom Service
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
