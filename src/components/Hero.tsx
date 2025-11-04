'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-image.jpg"
          alt="ElferaHealth Caregiving Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-elfera-pink/80 via-elfera-pink/70 to-elfera-pink-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Compassionate Care You Can Trust
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Providing trusted caregiving and health support services in Brunei - from personal care 
            to medical facilitation, with compassion at the heart of everything we do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              className="btn-secondary bg-white text-elfera-pink hover:bg-gray-100 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </motion.a>
            
            <motion.a
              href="#services"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              Our Services
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

