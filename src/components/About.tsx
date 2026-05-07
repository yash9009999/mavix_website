'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react'
import { animateCounter } from '@/lib/utils'

const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: any }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const element = counterRef.current?.querySelector('.counter-number')
            if (element) {
              animateCounter(element as HTMLElement, end)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <div ref={counterRef} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <div className="counter-number text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {count}
      </div>
      <div className="text-gray-400 text-sm md:text-base font-inter">{label}</div>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">MavixHub</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Driving Digital Innovation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
              At MavixHub, we are pioneers in crafting intelligent digital experiences that transform businesses. Our expertise spans across strategic marketing, compelling content creation, and cutting-edge IT consultancy.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
              We believe in the power of innovation and digital growth. Our team of experts combines creativity with technical excellence to deliver solutions that not only meet but exceed expectations in today's fast-paced digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass px-6 py-3 rounded-full border border-blue-500/30">
                <span className="text-blue-400 font-semibold">Innovation First</span>
              </div>
              <div className="glass px-6 py-3 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">Digital Growth</span>
              </div>
              <div className="glass px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Premium Consultancy</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-3xl border border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <Counter end={150} label="Happy Clients" icon={Users} />
                <Counter end={320} label="Projects Done" icon={Briefcase} />
                <Counter end={15} label="Years Experience" icon={Award} />
                <Counter end={98} label="Success Rate %" icon={TrendingUp} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="text-center fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Our Mission
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              To empower businesses with innovative digital solutions that drive growth, 
              enhance brand presence, and create lasting impact in the digital world. 
              We are committed to excellence, creativity, and delivering results that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
