"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-green-600 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-64 bg-white shadow-lg rounded-lg z-50">
          <div className="py-2 flex flex-col">
            <Link
              href="/about"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/hajj-umrah-guidance"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Umrah & Ziyarah
            </Link>
            <Link
              href="/hajj"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Hajj
            </Link>
            <Link
              href="/makkah"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Makkah
            </Link>
            <Link
              href="/madinah"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Madinah
            </Link>
            <Link
              href="/packages"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              href="/services"
              className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-600"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

