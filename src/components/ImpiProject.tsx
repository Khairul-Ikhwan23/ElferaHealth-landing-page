'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Users, ExternalLink, Mail, Phone, Instagram } from 'lucide-react'
import { BASE_PATH } from '@/lib/constants'

export default function ImpiProject() {
  return (
    <section id="impi-project" className="section-padding bg-elfera-light-gray">
      {/* Decorative Background Box */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        {/* Colorful Gradient Background matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-blue-500 via-purple-500 to-pink-500 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 via-cyan-400/30 to-magenta-500/30"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container-custom py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg">
            Our CSR
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src={`${BASE_PATH}/assets/Impian-Project-logo.jpg`}
              alt="The IMPIAN Project Logo"
              width={120}
              height={120}
              className="h-20 w-auto object-contain drop-shadow-lg"
            />
            <h3 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white drop-shadow-lg">
              The IMPIAN Project
            </h3>
          </div>
          <p className="text-lg text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Empowering and supporting the special needs community in Brunei through awareness, 
            advocacy, and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content with Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* TIP Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={`${BASE_PATH}/assets/tip-image.jpg`}
                  alt="The IMPIAN Project - Special Needs Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-gray-800">
                  About The IMPIAN Project
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The IMPIAN Project (TIP) began as the Corporate Social Responsibility (CSR) initiative 
                  of ELFERA Health and Nursing Care Sdn Bhd. Its mission was - and continues to be - to 
                  empower and support the special needs community in Brunei through awareness, advocacy, 
                  and education.
                </p>
                <p>
                  As of 28 November 2024, The IMPIAN Project is officially registered as a 
                  non-governmental organization (NGO) in Brunei, strengthening its commitment to 
                  inclusion and support for individuals with disabilities and their families.
                </p>
                <p className="font-medium bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  If you are an individual with special needs or a disability, we welcome you to join 
                  our growing community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-lg p-8 text-white shadow-xl border-2 border-white/30"
          >
            <div className="mb-6">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Join Our Special Needs Community
              </h3>
              <p className="text-white/90 mb-6">
                Become a member and connect with others in the special needs community. 
                Together, we can create a more inclusive Brunei.
              </p>
            </div>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSewUxJUOhlN_AkCNF5aw0dEut-wxxqfM9tTC8bX8veteJYaoQ/viewform?usp=sharing&ouid=106628755933239253683"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 hover:bg-gray-100 border-2 border-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2 w-full justify-center mb-6"
            >
              <Heart className="w-4 h-4" />
              Become a Member
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+673-8222747</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>theimpianproject@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://instagram.com/theimpianproject.bn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @theimpianproject.bn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

