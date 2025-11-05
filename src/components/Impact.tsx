'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Calendar, Heart } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    number: 6,
    suffix: '+ years',
    label: 'In Service',
    description: 'Serving Brunei since 2019'
  },
  {
    icon: Heart,
    number: 500,
    suffix: '+',
    label: 'Clients Served',
    description: 'Families and individuals cared for'
  }
]

function Counter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * end)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-elfera-pink">
      {count.toLocaleString()}{suffix ? ` ${suffix.trim()}` : ''}
    </span>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-elfera-pink mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through years of dedicated service, we&apos;ve made a lasting impact on 
            families and individuals across Brunei Darussalam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-elfera-light-gray rounded-lg p-8 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-elfera-pink/10">
                    <stat.icon className="w-8 h-8 text-elfera-pink" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-elfera-pink to-elfera-pink-dark text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Experience Compassionate Care
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Every client we serve, every caregiver we train, every family we support 
              contributes to our mission of providing quality care with dignity and compassion.
            </p>
            <a
              href="#contact"
              className="btn-secondary bg-white text-elfera-pink hover:bg-gray-100"
            >
              <Heart className="w-4 h-4" />
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

