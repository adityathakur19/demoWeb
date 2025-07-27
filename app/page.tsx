"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Heart,
  Flame,
  Music,
  BookOpen,
  User,
  Camera,
  CreditCard,
  ChevronRight,
  Play,
  Calendar,
  Clock,
  Users,
  Award,
  Globe,
  Sparkles,
  Shield,
  CheckCircle,
  MessageCircle,
  FileText,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingDiya from "@/components/floating-diya"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

export default function HinduPriestWebsite() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "home", label: "Home", icon: Star },
    { id: "services", label: "All Puja & Services", icon: Flame },
    { id: "musical", label: "Musical Events", icon: Music },
    { id: "lessons", label: "Lessons & Scriptures", icon: BookOpen },
    { id: "about", label: "About Pandit Ji", icon: User },
    { id: "gallery", label: "Gallery", icon: Camera },
    { id: "donate", label: "Donate / Payment", icon: CreditCard },
  ]

  const pujaServices = [
    {
      name: "Satyanarayan Puja",
      description: "Sacred ritual for prosperity and well-being",
      duration: "2-3 hours",
      price: "₹2,100 - ₹5,100",
      benefits: ["Removes obstacles", "Brings prosperity", "Family harmony", "Divine protection"],
      includes: ["Complete puja samagri", "Katha recitation", "Prasad preparation", "Aarti ceremony"],
    },
    {
      name: "Grah Shanti",
      description: "Planetary peace ceremony for harmony",
      duration: "3-4 hours",
      price: "₹3,100 - ₹7,100",
      benefits: ["Planetary peace", "Dosha removal", "Mental tranquility", "Career growth"],
      includes: ["Navagraha worship", "Mantra chanting", "Havan ceremony", "Yantra installation"],
    },
    {
      name: "Rudrabhishek",
      description: "Sacred offering to Lord Shiva",
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
    {
      name: "Durga Puja",
      description: "Powerful worship of Goddess Durga for protection, strength, and victory over negative forces.",
      duration: "2-3 hours",
      price: "₹2,100 - ₹4,100",
      benefits: ["Divine protection", "Inner strength", "Victory over enemies", "Spiritual power"],
      includes: ["Durga saptashati path", "Flower offerings", "Kumkum tilak", "Prasad ceremony"],
    },
    {
      name: "Hanuman Puja",
      description: "Devotional worship of Lord Hanuman for courage, strength, and protection from evil influences.",
      duration: "1-2 hours",
      price: "₹1,100 - ₹2,500",
      benefits: ["Physical strength", "Mental courage", "Evil protection", "Devotion enhancement"],
      includes: ["Hanuman chalisa", "Sindoor offering", "Strength mantras", "Blessed prasad"],
    },
  ]

  const musicalEvents = [
    {
      category: "Mata Ki Chowki",
      description: "Divine musical gatherings celebrating the glory of the Divine Mother",
      events: [
        {
          name: "Durga Mata Chowki",
          details: "Complete night of devotional singing praising Goddess Durga",
          duration: "4-6 hours",
          participants: "20-100 devotees",
        },
        {
          name: "Vaishno Devi Chowki",
          details: "Sacred musical journey to Mata Vaishno Devi through bhajans",
          duration: "3-5 hours",
          participants: "15-80 devotees",
        },
        {
          name: "Santoshi Mata Chowki",
          details: "Devotional program dedicated to Mata Santoshi for fulfillment",
          duration: "3-4 hours",
          participants: "10-60 devotees",
        },
      ],
    },
    {
      category: "Sunderkand Path",
      description: "Sacred recitation of Hanuman's heroic journey from Ramayana",
      events: [
        {
          name: "Weekly Sunderkand",
          details: "Regular Tuesday evening recitation with community participation",
          duration: "2 hours",
          participants: "10-50 devotees",
        },
        {
          name: "Special Occasion Path",
          details: "Elaborate Sunderkand for festivals and special celebrations",
          duration: "3 hours",
          participants: "20-100 devotees",
        },
        {
          name: "Home Sunderkand",
          details: "Private family recitation in the comfort of your home",
          duration: "1.5-2 hours",
          participants: "5-20 family members",
        },
      ],
    },
    {
      category: "Bhajan Programs",
      description: "Melodious devotional singing sessions for spiritual upliftment",
      events: [
        {
          name: "Krishna Bhajan Sandhya",
          details: "Evening of Krishna bhajans with tabla and harmonium",
          duration: "2-3 hours",
          participants: "15-75 devotees",
        },
        {
          name: "Shiva Bhajan Mandali",
          details: "Devotional songs praising Lord Shiva with traditional instruments",
          duration: "2-3 hours",
          participants: "10-60 devotees",
        },
        {
          name: "Ram Bhajan Sabha",
          details: "Sacred gathering singing the glories of Lord Rama",
          duration: "2-3 hours",
          participants: "15-80 devotees",
        },
      ],
    },
    {
      category: "Shardhanjali",
      description: "Memorial rituals and remembrance ceremonies for departed souls",
      events: [
        {
          name: "Pitra Paksha Ceremonies",
          details: "Annual fortnight rituals for ancestral peace and blessings",
          duration: "1-2 hours daily",
          participants: "Family members",
        },
        {
          name: "Annual Remembrance",
          details: "Yearly memorial service with prayers and food distribution",
          duration: "3-4 hours",
          participants: "20-100 attendees",
        },
        {
          name: "Tarpan Rituals",
          details: "Sacred water offerings for departed souls' liberation",
          duration: "1-2 hours",
          participants: "Family members",
        },
      ],
    },
  ]

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

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Delhi",
      text: "Pandit Ji performed our Griha Pravesh with such devotion. The positive energy in our home is incredible!",
      rating: 5,
      service: "Griha Pravesh Puja",
    },
    {
      name: "Priya Gupta",
      location: "Mumbai",
      text: "The Satyanarayan Puja was beautifully conducted. Pandit Ji explained every ritual with patience and love.",
      rating: 5,
      service: "Satyanarayan Puja",
    },
    {
      name: "Amit Verma",
      location: "Bangalore",
      text: "Weekly Gita classes have transformed my understanding of life. Grateful for Pandit Ji's wisdom.",
      rating: 5,
      service: "Gita Classes",
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-red-50/80"></div>

              {/* Floating Diyas */}
              <div className="absolute top-20 left-10">
                <FloatingDiya delay={0} />
              </div>
              <div className="absolute top-40 right-20">
                <FloatingDiya delay={1} />
              </div>
              <div className="absolute bottom-32 left-20">
                <FloatingDiya delay={2} />
              </div>
              <div className="absolute bottom-20 right-10">
                <FloatingDiya delay={0.5} />
              </div>
              <div className="absolute top-60 left-1/2">
                <FloatingDiya delay={1.5} />
              </div>

              <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-8"
                >
                  <div className="text-7xl mb-6"></div>
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-700 via-red-700 to-orange-700 bg-clip-text text-transparent mb-6">
                    Acharya Manikya Sharma
                  </h1>
                  <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed font-medium">
                    Experienced Hindu Priest & Spiritual Guide
                  </p>
                  <p className="text-lg text-amber-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Bringing divine blessings to your home through traditional pujas, spiritual guidance, and sacred
                    ceremonies. Serving the community with 25+ years of devotional experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3 text-lg shadow-lg"
                    onClick={() => setActiveTab("services")}
                  >
                    Book a Puja <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg bg-white/80 backdrop-blur-sm"
                    onClick={() => setActiveTab("about")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Quick Services Preview */}
            <section className="py-20 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl font-bold text-amber-900 mb-6">Our Sacred Services</h2>
                  <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                    Traditional Hindu ceremonies performed with devotion, authenticity, and deep spiritual understanding
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {pujaServices.slice(0, 3).map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 hover:border-amber-300 bg-white/90 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                          <div className="text-4xl mb-3">🪔</div>
                          <CardTitle className="text-amber-800 text-xl">{service.name}</CardTitle>
                          <CardDescription className="text-amber-700">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center text-sm text-amber-700">
                              <Clock className="h-4 w-4 mr-2 text-amber-600" />
                              Duration: {service.duration}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {service.benefits.slice(0, 2).map((benefit, i) => (
                                <Badge key={i} variant="outline" className="border-amber-300 text-amber-700 text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="bg-amber-100 text-amber-800 border-amber-300">{service.price}</Badge>
                              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setActiveTab("services")}
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3 shadow-lg"
                  >
                    View All Services <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-br from-amber-900 via-red-900 to-orange-900 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl font-bold mb-6">Why Choose Our Services</h2>
                  <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                    Experience authentic Hindu traditions with modern convenience and personalized care
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Award,
                      title: "25+ Years Experience",
                      description: "Decades of dedicated service to the Hindu community",
                    },
                    {
                      icon: Shield,
                      title: "Authentic Rituals",
                      description: "Traditional ceremonies performed according to Vedic scriptures",
                    },
                    {
                      icon: Globe,
                      title: "Multilingual Service",
                      description: "Services available in Hindi, English, Sanskrit, and Punjabi",
                    },
                    {
                      icon: Heart,
                      title: "Personalized Care",
                      description: "Each ceremony tailored to your family's specific needs",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="text-center"
                    >
                      <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-8 w-8 text-amber-800" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-amber-100">{feature.title}</h3>
                      <p className="text-amber-200 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl font-bold text-amber-900 mb-6">What Devotees Say</h2>
                  <p className="text-xl text-amber-800">Blessed testimonials from our spiritual family</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <Card className="h-full border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                            ))}
                          </div>
                          <p className="text-amber-800 mb-4 italic">"{testimonial.text}"</p>
                          <div className="border-t border-amber-200 pt-4">
                            <p className="font-semibold text-amber-900">{testimonial.name}</p>
                            <p className="text-sm text-amber-700">{testimonial.location}</p>
                            <Badge variant="outline" className="mt-2 border-amber-300 text-amber-700">
                              {testimonial.service}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )

      case "services":
        return (
          <div className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen">
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
        )

      case "musical":
        return (
          <div className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-5xl font-bold text-amber-900 mb-6">Musical Events</h1>
                <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                  Devotional music and spiritual gatherings that elevate the soul and create divine atmosphere through
                  traditional bhajans, kirtans, and sacred recitations.
                </p>
              </motion.div>

              <div className="space-y-12">
                {musicalEvents.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                        <div className="flex items-center">
                          <div className="text-4xl mr-4">🎵</div>
                          <div>
                            <CardTitle className="text-amber-900 text-2xl">{category.category}</CardTitle>
                            <CardDescription className="text-amber-800 text-base mt-2">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          {category.events.map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200"
                            >
                              <h4 className="font-semibold text-amber-900 text-lg mb-3">{event.name}</h4>
                              <p className="text-amber-800 mb-4 leading-relaxed">{event.details}</p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center text-amber-700">
                                  <Clock className="h-4 w-4 mr-2 text-amber-600" />
                                  <span>{event.duration}</span>
                                </div>
                                <div className="flex items-center text-amber-700">
                                  <Users className="h-4 w-4 mr-2 text-amber-600" />
                                  <span>{event.participants}</span>
                                </div>
                              </div>
                              <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                                <Calendar className="h-4 w-4 mr-2" />
                                Book Event
                              </Button>
                            </div>
                          ))}
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
                className="mt-16 bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white rounded-2xl p-8"
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6">Monthly Musical Calendar</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-amber-100 mb-2">Every Tuesday</h4>
                      <p className="text-amber-200">Hanuman Bhajan</p>
                      <p className="text-sm text-amber-300">7:00 PM - 9:00 PM</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-amber-100 mb-2">Every Friday</h4>
                      <p className="text-amber-200">Mata Ki Chowki</p>
                      <p className="text-sm text-amber-300">6:00 PM - 10:00 PM</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-amber-100 mb-2">Every Saturday</h4>
                      <p className="text-amber-200">Sunderkand Path</p>
                      <p className="text-sm text-amber-300">5:00 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-amber-100 mb-2">Every Sunday</h4>
                      <p className="text-amber-200">Krishna Bhajan</p>
                      <p className="text-sm text-amber-300">6:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )

      case "lessons":
        return (
          <div className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen">
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
        )

      case "about":
        return (
          <div className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <div className="text-7xl mb-6">🙏</div>
                <h1 className="text-5xl font-bold text-amber-900 mb-6">Acharya Pandit Manikya Sharma Ji</h1>
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
                        With over 25 years of dedicated service to the Hindu community, Acharya Pandit Manikya Sharma Ji
                        brings profound spiritual wisdom and authentic traditional practices to every ceremony and
                        teaching. His life is devoted to preserving and sharing the sacred knowledge of our ancient
                        traditions.
                      </p>

                      <p>
                        Born into a family of learned priests in the holy city of Varanasi, Pandit Ji was immersed in
                        spiritual practices from childhood. Under the guidance of his revered grandfather, Pandit
                        Raghunath Sharma, he began learning Sanskrit, Vedic mantras, and ritual procedures at the tender
                        age of seven.
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
                        mission is to make ancient wisdom accessible to modern devotees while maintaining the sanctity
                        and authenticity of our sacred traditions."
                      </blockquote>
                      <p className="text-amber-300">- Acharya Pandit Manikya Sharma Ji</p>
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
        )

      case "gallery":
        return (
          <div className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-5xl font-bold text-amber-900 mb-6">Sacred Gallery</h1>
                <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                  Sacred moments and spiritual ceremonies captured through divine photography and videography. Witness
                  the beauty of traditional Hindu rituals and community celebrations.
                </p>
              </motion.div>

              {/* Photo Gallery */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Photo Gallery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: 1, title: "Satyanarayan Puja Ceremony", category: "Puja" },
                    { id: 2, title: "Grah Shanti Ritual", category: "Puja" },
                    { id: 3, title: "Wedding Ceremony", category: "Samskara" },
                    { id: 4, title: "Mata Ki Chowki", category: "Musical" },
                    { id: 5, title: "Havan Ceremony", category: "Puja" },
                    { id: 6, title: "Bhajan Program", category: "Musical" },
                    { id: 7, title: "Ganesh Puja", category: "Puja" },
                    { id: 8, title: "Community Gathering", category: "Event" },
                    { id: 9, title: "Sunderkand Path", category: "Musical" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group cursor-pointer"
                    >
                      <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden border-2 border-amber-200">
                        <img
                          src={`/placeholder.svg?height=400&width=400&query=Hindu ${item.title.toLowerCase()} ceremony`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <Camera className="h-12 w-12 text-white mx-auto mb-2" />
                            <p className="text-white font-medium">{item.title}</p>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-amber-600 text-white">{item.category}</Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Video Gallery */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Video Gallery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: 1, title: "Complete Satyanarayan Puja", duration: "45 min", category: "Tutorial" },
                    { id: 2, title: "Gita Discourse Highlights", duration: "20 min", category: "Teaching" },
                    { id: 3, title: "Mata Ki Chowki Live", duration: "2 hours", category: "Musical" },
                    { id: 4, title: "Wedding Ceremony Full", duration: "3 hours", category: "Ceremony" },
                    { id: 5, title: "Hanuman Chalisa Tutorial", duration: "15 min", category: "Tutorial" },
                    { id: 6, title: "Bhajan Program Highlights", duration: "30 min", category: "Musical" },
                  ].map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden border-2 border-amber-200">
                        <img
                          src={`/placeholder.svg?height=300&width=400&query=Hindu ${video.title.toLowerCase()} video thumbnail`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                          <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-amber-600 text-white">{video.category}</Badge>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <Badge variant="outline" className="bg-black/50 text-white border-white/50">
                            {video.duration}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h3 className="font-semibold text-amber-900">{video.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Upload Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12"
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-900 mb-4">Share Your Sacred Moments</h3>
                  <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
                    Have photos or videos from ceremonies we conducted? Share them with our community to spread the
                    divine blessings and inspire others.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white"
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      Upload Photos
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 bg-white/80"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Upload Videos
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Gallery Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Gallery Categories</h3>
                  <p className="text-amber-100">Explore our organized collection of sacred moments</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Flame className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Puja Ceremonies</h4>
                    <p className="text-amber-200 text-sm">Traditional worship rituals</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Music className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Musical Events</h4>
                    <p className="text-amber-200 text-sm">Bhajans and devotional singing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Heart className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Life Ceremonies</h4>
                    <p className="text-amber-200 text-sm">Weddings and samskaras</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <BookOpen className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Teaching Sessions</h4>
                    <p className="text-amber-200 text-sm">Scripture classes and discourses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )

      case "donate":
        return (
          <div className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <div className="text-6xl mb-6">🙏</div>
                <h1 className="text-5xl font-bold text-amber-900 mb-6">Donate / Payment</h1>
                <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                  Support our spiritual mission and book services. Your contributions help us serve the community and
                  preserve sacred traditions for future generations.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Donation Section */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                      <CardTitle className="text-amber-900 flex items-center text-2xl">
                        <Heart className="h-6 w-6 mr-3" />
                        Make a Donation
                      </CardTitle>
                      <CardDescription className="text-amber-800 text-base">
                        Support our spiritual activities, community service, and temple maintenance
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-4">Suggested Amounts</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              variant="outline"
                              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 bg-white h-12"
                            >
                              ₹501
                            </Button>
                            <Button
                              variant="outline"
                              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 bg-white h-12"
                            >
                              ₹1,001
                            </Button>
                            <Button
                              variant="outline"
                              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 bg-white h-12"
                            >
                              ₹2,001
                            </Button>
                            <Button
                              variant="outline"
                              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 bg-white h-12"
                            >
                              ₹5,001
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-3">Donation Categories</h4>
                          <div className="space-y-3">
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                              <h5 className="font-medium text-amber-900">Temple Maintenance</h5>
                              <p className="text-sm text-amber-700">Support daily temple operations and upkeep</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                              <h5 className="font-medium text-amber-900">Community Service</h5>
                              <p className="text-sm text-amber-700">Free services for underprivileged families</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                              <h5 className="font-medium text-amber-900">Educational Programs</h5>
                              <p className="text-sm text-amber-700">Scripture classes and spiritual education</p>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white h-12">
                          <Heart className="h-5 w-5 mr-2" />
                          Donate Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Service Payment Section */}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                      <CardTitle className="text-amber-900 flex items-center text-2xl">
                        <CreditCard className="h-6 w-6 mr-3" />
                        Service Payment
                      </CardTitle>
                      <CardDescription className="text-amber-800 text-base">
                        Pay for puja bookings, musical events, and spiritual services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <div>
                              <span className="font-medium text-amber-900">Puja Booking</span>
                              <p className="text-sm text-amber-700">Traditional ceremonies and rituals</p>
                            </div>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                              Pay
                            </Button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <div>
                              <span className="font-medium text-amber-900">Musical Event</span>
                              <p className="text-sm text-amber-700">Bhajan programs and chowki</p>
                            </div>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                              Pay
                            </Button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <div>
                              <span className="font-medium text-amber-900">Lesson Classes</span>
                              <p className="text-sm text-amber-700">Scripture study and spiritual guidance</p>
                            </div>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                              Pay
                            </Button>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <div>
                              <span className="font-medium text-amber-900">Consultation</span>
                              <p className="text-sm text-amber-700">Personal spiritual guidance</p>
                            </div>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                              Pay
                            </Button>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white h-12">
                          <Calendar className="h-5 w-5 mr-2" />
                          Book & Pay for Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Payment Methods */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 text-center">
                    <CardTitle className="text-amber-900 text-2xl">Secure Payment Methods</CardTitle>
                    <CardDescription className="text-amber-800">
                      Multiple convenient and secure payment options available
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-4xl mb-3">💳</div>
                        <h4 className="font-semibold text-amber-900 mb-2">Credit/Debit Cards</h4>
                        <p className="text-sm text-amber-700">Visa, MasterCard, RuPay</p>
                      </div>
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-4xl mb-3">📱</div>
                        <h4 className="font-semibold text-amber-900 mb-2">UPI Payment</h4>
                        <p className="text-sm text-amber-700">PhonePe, GPay, Paytm</p>
                      </div>
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-4xl mb-3">🏦</div>
                        <h4 className="font-semibold text-amber-900 mb-2">Net Banking</h4>
                        <p className="text-sm text-amber-700">All major banks supported</p>
                      </div>
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-4xl mb-3">💰</div>
                        <h4 className="font-semibold text-amber-900 mb-2">Cash Payment</h4>
                        <p className="text-sm text-amber-700">In-person transactions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tax Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Tax Benefits & Transparency</h3>
                  <p className="text-xl text-amber-100">Your donations make a difference and come with benefits</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <FileText className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">80G Tax Benefits</h4>
                    <p className="text-amber-200">Get tax deduction certificates for eligible donations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Shield className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Secure Transactions</h4>
                    <p className="text-amber-200">SSL encrypted payments with bank-level security</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                    <h4 className="font-semibold text-amber-100 mb-2">Transparent Usage</h4>
                    <p className="text-amber-200">Regular updates on how donations are utilized</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
