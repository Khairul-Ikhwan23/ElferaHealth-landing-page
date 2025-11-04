'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Stethoscope, Heart, Plane, Bandage, Users, GraduationCap, ActivitySquare, Globe } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Private Nursing Assessment',
    description: 'Initial home or client evaluations by registered nurses to determine suitable care plans.',
    color: 'text-elfera-pink'
  },
  {
    icon: Heart,
    title: 'Private Caregiving',
    description: 'Daily assistance for seniors, individuals with disabilities, or patients recovering from illness.',
    color: 'text-elfera-pink'
  },
  {
    icon: Plane,
    title: 'Medical Escort',
    description: 'Accompanied travel for clients requiring medical supervision during trips, hospital transfers, and medical appointments.',
    color: 'text-elfera-teal'
  },
  {
    icon: Bandage,
    title: 'Wound Dressing & Personal Care',
    description: 'Professional wound management and hygiene assistance to promote healing and comfort.',
    color: 'text-elfera-pink'
  },
  {
    icon: Users,
    title: 'Special Needs Caregiving',
    description: 'Support and care for individuals with disabilities and developmental conditions.',
    color: 'text-elfera-teal'
  },
  {
    icon: GraduationCap,
    title: 'Caregiving Training',
    description: 'Workshops and short courses designed to equip individuals and families with essential caregiving skills.',
    color: 'text-elfera-pink'
  },
  {
    icon: ActivitySquare,
    title: 'Health Screening',
    description: 'Preventive health check-ups and medical screenings - available for corporate and community events.',
    color: 'text-elfera-teal'
  },
  {
    icon: Globe,
    title: 'Medical Tourism Facilitation',
    description: 'Coordination of overseas medical consultations, treatments, and travel logistics. We partner with reputable international hospitals, including KPJ Healthcare (Malaysia).',
    color: 'text-elfera-pink'
  }
]

const medicalTourismSteps = [
  { step: '1', title: 'Explore', description: 'Discover a range of treatments and services offered at our trusted partner hospitals.' },
  { step: '2', title: 'Quote', description: 'Request a personalized quote from us based on your medical needs and preferences.' },
  { step: '3', title: 'Arrange', description: 'We\'ll assist in arranging your travel, accommodation, and coordination with your selected hospital.' },
  { step: '4', title: 'Treat', description: 'Receive quality care and treatment from top, trusted healthcare providers abroad.' },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-elfera-pink mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of caregiving and health support services tailored to meet 
            the diverse needs of our clients, from personal care to international medical facilitation.
          </p>
        </motion.div>

        {/* Services Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src="/assets/services-image.jpg"
              alt="ElferaHealth Caregiving Services"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-elfera-pink">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-elfera-pink-light/20 group-hover:bg-elfera-pink/10 transition-colors duration-300">
                    <service.icon className={`w-6 h-6 ${service.color} group-hover:text-elfera-pink transition-colors duration-300`} />
                  </div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-gray-800 group-hover:text-elfera-pink transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medical Tourism Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-elfera-pink-light to-elfera-pink rounded-lg p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-bold text-3xl mb-4 text-white">
              Our Medical Tourism Process
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We make your healthcare journey seamless from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalTourismSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-elfera-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

