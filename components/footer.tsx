import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function Footer() {
  const navigationItems = [
    { href: "/services", label: "All Puja & Services" },
    { href: "/musical-events", label: "Musical Events" },
    { href: "/lessons", label: "Lessons & Scriptures" },
    { href: "/about", label: "About Pandit Ji" },
    { href: "/gallery", label: "Gallery" },
  ]

  return (
    <footer className="bg-gradient-to-r from-amber-900 via-red-900 to-orange-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <div className="text-amber-800 font-bold text-xl">P</div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-amber-100">Pandit Ji</h3>
                <p className="text-amber-300">Spiritual Guide & Hindu Priest</p>
              </div>
            </div>
            <p className="text-amber-200 leading-relaxed mb-6 max-w-md">
              Bringing divine blessings and spiritual wisdom to your life through traditional Hindu ceremonies,
              teachings, and personal guidance. Serving the community with devotion for over 25 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-amber-800" />
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-amber-800" />
              </div>
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-amber-800" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-amber-100 text-lg">Contact Information</h4>
            <div className="space-y-4 text-amber-200">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-400" />
                <span>panditji@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-amber-400" />
                <span>Your City, State, India</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-amber-400" />
                <span>Available 24/7 for emergencies</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-amber-100 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-amber-200 hover:text-amber-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-amber-700" />

        <div className="text-center text-amber-200">
          <p className="mb-2">&copy; 2024 Pandit Ji - Hindu Priest Services. All rights reserved.</p>
          <p className="text-amber-300 font-medium">
            May Lord's blessings be with you always 🙏 | सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
          </p>
        </div>
      </div>
    </footer>
  )
}
