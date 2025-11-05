'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Unit B3.2, Block B, Simpang 32, Jalan Madang, Kampung Madang, Mukim Berakas B, Bandar Seri Begawan BC3715, Negara Brunei Darussalam.',
    href: null
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+673 8660168',
    href: 'tel:+6738660168'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@elferahealth.com',
    href: 'mailto:hello@elferahealth.com'
  }
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/elferahealth', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/elferahealth', label: 'Facebook' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Have questions about our services or need caregiving support? 
            Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-8 text-elfera-pink">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-elfera-pink/20">
                    <info.icon className="w-6 h-6 text-elfera-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-elfera-pink-light transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-800 hover:bg-elfera-pink transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="w-full h-[380px] md:h-full">
              <iframe
                title="ElferaHealth Office Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127205.041717734!2d114.895049!3d4.913291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTQnNDcuOSJOIDExNMKwNTMnMDIuMSJF!5e0!3m2!1sen!2sus!4v1758182778503!5m2!1sen!2sus"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 Elfera Health and Nursing Care Sdn Bhd. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-elfera-pink-light transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-elfera-pink-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

