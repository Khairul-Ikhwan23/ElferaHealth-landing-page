'use client'

import { Phone } from 'lucide-react'

export default function StickyContactButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <a
        href="#contact"
        className="bg-elfera-pink text-white p-4 rounded-full shadow-lg hover:bg-elfera-pink-dark transition-colors duration-200 flex items-center justify-center"
        aria-label="Contact Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}

