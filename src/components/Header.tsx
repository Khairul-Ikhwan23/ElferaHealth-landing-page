'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { BASE_PATH } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <Image
                src={`${BASE_PATH}/assets/elfera-logo.jpg`}
                alt="ElferaHealth Logo"
                width={50}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-elfera-pink transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-elfera-pink transition-colors">
              Services
            </a>
            <a href="#impi-project" className="text-gray-700 hover:text-elfera-pink transition-colors">
              IMPIAN Project
            </a>
            <a href="#contact" className="text-gray-700 hover:text-elfera-pink transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-elfera-pink transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="#about"
                className="block text-gray-700 hover:text-elfera-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-elfera-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#impi-project"
                className="block text-gray-700 hover:text-elfera-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                IMPIAN Project
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-elfera-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

