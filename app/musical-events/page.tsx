"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Clock, Users, Calendar } from "lucide-react"

export default function MusicalEventsPage() {
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
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
      </main>

      <Footer />
    </div>
  )
}
