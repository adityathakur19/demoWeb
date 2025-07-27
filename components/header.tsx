"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Star, Flame, Music, BookOpen, User, Camera, CreditCard } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", label: "Home", icon: Star },
    { href: "/services", label: "All Puja & Services", icon: Flame },
    { href: "/musical-events", label: "Musical Events", icon: Music },
    { href: "/lessons", label: "Lessons & Scriptures", icon: BookOpen },
    { href: "/about", label: "About Pandit Ji", icon: User },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/donate", label: "Donate / Payment", icon: CreditCard },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div className="flex items-center space-x-3 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">P</div>
              </div>
              <div>
                <h1 className="font-bold text-lg text-amber-900">Pandit Ji</h1>
           {/*     <p className="text-xs text-amber-700">Spiritual Guide</p> */}
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={`${
                    pathname === item.href
                      ? "bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-md"
                      : "text-amber-800 hover:text-amber-900 hover:bg-amber-100"
                  } transition-all duration-200`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-amber-800 hover:bg-amber-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-amber-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={pathname === item.href ? "default" : "ghost"}
                      className={`${
                        pathname === item.href
                          ? "bg-gradient-to-r from-amber-600 to-red-600 text-white"
                          : "text-amber-800 hover:text-amber-900 hover:bg-amber-100"
                      } justify-start transition-all duration-200 w-full`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
