'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Location = () => {
  const address = "4th Floor, 93 Sapphire Center, Ajmer Rd, Suraj Nagar West, Civil Lines, Jaipur, Rajasthan 302006"
  const mapUrl = "https://maps.app.goo.gl/Pd6UJ97mchsdVUUZA"

  return (
    <section id="location" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Office</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
            Come visit us at our headquarters in Jaipur. We'd love to discuss your project in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-4 rounded-3xl border border-white/10 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7787246996574!2d75.787270315042!3d26.846674883159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d8f1d1d1d1%3A0x1d1d1d1d1d1d1d1d!2s93%20Sapphire%20Center%2C%20Ajmer%20Rd%2C%20Suraj%20Nagar%20West%2C%20Civil%20Lines%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem', minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Address & Contact Info */}
          <motion.div
            className="fade-in space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Address Card */}
            <div className="glass p-8 rounded-3xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-2 text-white">Office Address</h3>
                  <p className="text-gray-300 leading-relaxed font-inter">
                    4th Floor, 93 Sapphire Center<br />
                    Ajmer Rd, Suraj Nagar West<br />
                    Civil Lines, Jaipur<br />
                    Rajasthan 302006
                  </p>
                </div>
              </div>

              <motion.a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.a>
            </div>

            {/* Contact Information */}
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold font-poppins mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">hello@mavixhub.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Business Hours</p>
                    <p className="text-white font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit CTA */}
            <motion.div
              className="glass p-6 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-bold font-poppins mb-2 text-white">Schedule a Visit</h4>
              <p className="text-gray-300 mb-4 font-inter">
                Planning to visit? Let us know in advance so we can prepare for your meeting.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full"
              >
                Schedule Appointment
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location
