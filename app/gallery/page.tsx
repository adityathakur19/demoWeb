"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Camera, Play, Flame, Music, Heart, BookOpen } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="text-5xl font-bold text-amber-900 mb-6">Sacred Gallery</h1>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
                Sacred moments and spiritual ceremonies captured through divine photography and videography. Witness the
                beauty of traditional Hindu rituals and community celebrations.
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
                  Have photos or videos from ceremonies we conducted? Share them with our community to spread the divine
                  blessings and inspire others.
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
      </main>

      <Footer />
    </div>
  )
}
