'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: '2019',
    title: 'Foundation of ELFERA Health',
    description: 'Founded by Lailatul Zubaidah Hussain, ELFERA Health began offering private nursing and caregiving for families in need.'
  },
  {
    year: '2019-2023',
    title: 'Growing Services',
    description: 'Over time, the company evolved to meet broader healthcare needs - focusing on compassionate caregiving, health assistance, and medical tourism facilitation.'
  },
  {
    year: '2024',
    title: 'The IMPIAN Project Registration',
    description: 'The IMPIAN Project, our CSR initiative, officially registered as a non-governmental organization (NGO) in Brunei, strengthening our commitment to the special needs community.'
  },
  {
    year: 'Today',
    title: 'Trusted Healthcare Partner',
    description: 'ELFERA Health continues to provide comprehensive caregiving and health support services across Brunei, built on empathy, dedication, and the belief that everyone deserves quality care and dignity in living.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-elfera-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-elfera-pink mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ELFERA Health and Nursing Care Sdn Bhd is a Brunei-based company dedicated to providing 
            private caregiving and healthcare support services. Founded in 2019, we have grown from 
            a small nursing service to a trusted provider of comprehensive healthcare solutions.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-elfera-pink">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be Brunei&apos;s leading provider of compassionate, reliable, and professional caregiving 
              and health support services that enhance quality of life and dignity for every individual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-elfera-pink">
              Our Mission
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li>• Deliver personalized and compassionate care tailored to each client&apos;s needs</li>
              <li>• Empower and train caregivers with the skills and empathy required for quality care</li>
              <li>• Bridge access to quality healthcare locally and internationally through medical tourism facilitation</li>
              <li>• Promote inclusion and support for the special needs community through social responsibility initiatives</li>
            </ul>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-elfera-pink mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            ELFERA Health was born from personal experience. When founder Lailatul Zubaidah Hussain&apos;s 
            daughter required constant medical care, she saw the need for dependable and compassionate 
            caregiving support in Brunei.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What started as a small nursing and caregiving service has now grown into a trusted provider 
            offering a wider range of care support services - built on empathy, dedication, and the belief 
            that everyone deserves quality care and dignity in living.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-elfera-pink transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-elfera-pink rounded-full border-4 border-white transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-montserrat font-bold text-elfera-pink text-lg">
                        {item.year}
                      </span>
                      {index < timeline.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-elfera-pink" />
                      )}
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

