"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, CreditCard, Calendar, FileText, Shield, CheckCircle } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <Header />

      <main className="pt-16">
        <div className="py-20">
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
      </main>

      <Footer />
    </div>
  )
}
