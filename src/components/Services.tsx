'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, PenTool, Laptop, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: any
  title: string
  description: string
  features: string[]
  delay: number
}

const ServiceCard = ({ icon: Icon, title, description, features, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass p-8 rounded-3xl border border-white/10 card-3d cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(30, 107, 255, 0.3)"
      }}
    >
      {/* Icon */}
      <motion.div
        className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:border-blue-400/50 transition-all"
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-10 h-10 text-blue-400" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold font-poppins mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed font-inter">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm font-inter">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-cyan-400 transition-colors"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions that drive growth and enhance your brand's digital presence across all channels.",
      features: [
        "SEO & SEM Optimization",
        "Social Media Management", 
        "Content Strategy",
        "Email Marketing Campaigns",
        "Analytics & Reporting"
      ]
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling, SEO-optimized content that engages your audience and drives meaningful business results.",
      features: [
        "Blog & Article Writing",
        "Website Copywriting",
        "Technical Documentation",
        "Creative Content",
        "Content Strategy Planning"
      ]
    },
    {
      icon: Laptop,
      title: "IT Consultancy",
      description: "Expert IT solutions and consultancy to optimize your technology infrastructure and drive digital transformation.",
      features: [
        "System Architecture Design",
        "Cloud Solutions",
        "Cybersecurity Consulting",
        "Digital Transformation",
        "IT Strategy & Planning"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-inter">
            We offer comprehensive digital solutions tailored to your business needs, 
            combining creativity with technical excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 font-inter">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
